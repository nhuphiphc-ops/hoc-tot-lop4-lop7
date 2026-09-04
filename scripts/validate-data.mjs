#!/usr/bin/env node
/**
 * Kiem tra tinh toan ven cua toan bo ngan hang cau hoi.
 *
 *   npm run validate          -> chi bao loi NGHIEM TRONG (exit 1 neu co)
 *   npm run validate -- --all -> bao them canh bao ve chat luong noi dung
 *
 * Cac lop loi duoc phat hien (deu tung xay ra that trong du an nay):
 *   E1  thieu correctIndex hop le  -> QuizArena.jsx so sanh selectedIndex === q.correctIndex
 *                                     nen moi dap an bi cham SAI
 *   E2  options khong du 4 phuong an
 *   E3  correctIndex tro ra ngoai mang options
 *   E4  category khong ton tai trong TOPIC_CATEGORIES -> cau bi mat khi loc theo chu de
 *   E5  trung id trong cung mot ngan hang
 *   E6  thieu de bai hoac loi giai
 *   W1  cau hoi trung y nguyen trong cung mot tuan
 *   W2  tuan co it hon 10 cau
 *   W3  WEEKS_METADATA rong -> lo trinh chi hien "Bai Hoc Tuan N" chung chung
 *   W4  cau hoi sinh tu dong, khong co noi dung hoc thuat
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'src', 'data');
const SHOW_WARNINGS = process.argv.includes('--all');

const FILLER_PATTERNS = [
  /Câu hỏi (bài tập|luyện tập) tuần \d+/i,
  /Bài tập vận dụng tuần \d+/i,
  /Hướng dẫn giải (chi tiết )?(tuần \d+|sẽ sớm ra mắt)/i,
  /Nội dung chi tiết đang được cập nhật/i,
  /Khái niệm cơ bản hoặc hiện tượng bản chất trong nội dung/i,
  /Để thực hiện thí nghiệm hoặc tính toán đại lượng đặc trưng trong/i,
  /Ứng dụng thực tiễn hoặc ý nghĩa đời sống của bài học/i,
  /Bản chất khoa học chính xác được định nghĩa trong SGK/i,
];
const isFillerOption = (o) => /^Đáp án [ABCD]$/.test(String(o).trim());
const isFiller = (q) =>
  FILLER_PATTERNS.some((re) => re.test([q.question, q.explanation, q.hint].filter(Boolean).join(' | '))) ||
  (q.options || []).every(isFillerOption);

function collectBankFiles(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...collectBankFiles(p));
    else if (/^questionBank.*\.js$/.test(e.name)) out.push(p);
  }
  return out;
}

const errors = [];
const warnings = [];
const files = collectBankFiles(DATA).sort();
const label = (f) => path.relative(DATA, f).split(path.sep).slice(0, 2).join('/');

let totalQuestions = 0;

for (const file of files) {
  const mod = await import(url.pathToFileURL(file).href);
  const bankKey = Object.keys(mod).find((k) => k.startsWith('QUESTION_BANK'));
  if (!bankKey) continue;
  const bank = mod[bankKey];
  if (!Array.isArray(bank) || bank.length === 0) continue;
  totalQuestions += bank.length;

  const name = label(file);
  const catKey = Object.keys(mod).find((k) => k.startsWith('TOPIC_CATEGORIES'));
  const wkKey = Object.keys(mod).find((k) => k.startsWith('WEEKS_METADATA'));
  const catIds = new Set((catKey ? mod[catKey] || [] : []).map((c) => c.id));
  const weeksMeta = wkKey ? mod[wkKey] || {} : {};

  const add = (list, code, msg, n) => list.push({ name, code, msg, n });
  const seenIds = new Map();
  const byWeek = new Map();
  let e1 = 0, e2 = 0, e3 = 0, e4 = 0, e6 = 0, w4 = 0;

  for (const q of bank) {
    if (typeof q.correctIndex !== 'number' || !Number.isInteger(q.correctIndex)) e1++;
    else if (!Array.isArray(q.options) || q.options.length !== 4) e2++;
    else if (q.correctIndex < 0 || q.correctIndex >= q.options.length) e3++;
    if (catIds.size && q.category && q.category !== 'all' && !catIds.has(q.category)) e4++;
    if (!q.question || !q.explanation) e6++;
    if (q.id) seenIds.set(q.id, (seenIds.get(q.id) || 0) + 1);
    if (isFiller(q)) w4++;
    if (!byWeek.has(q.week)) byWeek.set(q.week, []);
    byWeek.get(q.week).push(q);
  }

  if (e1) add(errors, 'E1', 'thieu correctIndex hop le', e1);
  if (e2) add(errors, 'E2', 'options khong du 4 phuong an', e2);
  if (e3) add(errors, 'E3', 'correctIndex ngoai pham vi options', e3);
  if (e4) add(errors, 'E4', 'category khong co trong TOPIC_CATEGORIES', e4);
  if (e6) add(errors, 'E6', 'thieu de bai hoac loi giai', e6);
  const dupId = [...seenIds.values()].filter((v) => v > 1).length;
  if (dupId) add(errors, 'E5', 'trung id trong cung ngan hang', dupId);

  let w1 = 0, w2 = 0;
  for (let w = 1; w <= 35; w++) {
    const arr = byWeek.get(w) || [];
    if (arr.length < 10) w2++;
    const uniq = new Set(arr.map((q) => String(q.question).trim().toLowerCase()));
    w1 += arr.length - uniq.size;
  }
  if (w1) add(warnings, 'W1', 'cau trung y nguyen trong cung tuan', w1);
  if (w2) add(warnings, 'W2', 'tuan co duoi 10 cau', w2);
  if (wkKey && Object.keys(weeksMeta).length === 0) add(warnings, 'W3', 'WEEKS_METADATA rong', 1);
  if (w4) add(warnings, 'W4', 'cau sinh tu dong, khong co noi dung', w4);
}

const print = (list, title) => {
  console.log(`\n${title} (${list.length})`);
  if (!list.length) { console.log('  (khong co)'); return; }
  const width = Math.max(...list.map((r) => r.name.length));
  for (const r of list) {
    console.log(`  ${r.code}  ${r.name.padEnd(width)}  ${String(r.n).padStart(4)}  ${r.msg}`);
  }
};

console.log(`Da kiem tra ${files.length} file / ${totalQuestions} cau hoi.`);
print(errors, 'LOI NGHIEM TRONG');
if (SHOW_WARNINGS) print(warnings, 'CANH BAO CHAT LUONG NOI DUNG');
else console.log(`\nCanh bao chat luong: ${warnings.length} muc (chay "npm run validate -- --all" de xem).`);

if (errors.length) {
  console.log('\nKET QUA: THAT BAI - can sua cac loi nghiem trong o tren.');
  process.exit(1);
}
console.log('\nKET QUA: DAT - khong co loi nghiem trong.');

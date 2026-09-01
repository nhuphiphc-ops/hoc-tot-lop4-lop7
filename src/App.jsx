import React, { useState, useEffect, useRef } from 'react';
import { LearningProvider, useLearning } from './context/LearningContext';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { InstallAppBanner } from './components/InstallAppBanner';
import { RoadmapView } from './components/RoadmapView';
import { CustomPractice } from './components/CustomPractice';
import { WrongQuestionsReview } from './components/WrongQuestionsReview';
import { ParentDashboard } from './components/ParentDashboard';
import { BadgesModal } from './components/BadgesModal';
import { QuizArena } from './components/QuizArena';
import { ResultModal } from './components/ResultModal';
import { ExplanationView } from './components/ExplanationView';
import { MemberManagement } from './components/MemberManagement';
import { VideoLearningView } from './components/VideoLearningView';
import { VideoPlayerModal } from './components/VideoPlayerModal';

const MainContent = () => {
  const { currentGrade, currentSubject, saveQuizResult, getQuestionsByWeek, isMath, wrongQuestions } = useLearning();
  const [currentTab, setCurrentTab] = useState('roadmap'); // 'roadmap' | 'videos' | 'practice' | 'wrong' | 'dashboard' | 'badges' | 'members'
  const [activeQuizConfig, setActiveQuizConfig] = useState(null);
  const [currentResultData, setCurrentResultData] = useState(null);
  const [currentEarnedRewards, setCurrentEarnedRewards] = useState(null);
  const [isViewingExplanation, setIsViewingExplanation] = useState(false);
  const [activeVideoLesson, setActiveVideoLesson] = useState(null);

  // Track grade & subject changes to immediately close any ongoing quiz and show the new roadmap
  const prevGradeRef = useRef(currentGrade);
  const prevSubjectRef = useRef(currentSubject);

  useEffect(() => {
    if (prevGradeRef.current !== currentGrade || prevSubjectRef.current !== currentSubject) {
      prevGradeRef.current = currentGrade;
      prevSubjectRef.current = currentSubject;
      setActiveQuizConfig(null);
      setCurrentResultData(null);
      setIsViewingExplanation(false);
      try {
        localStorage.removeItem('toan_active_quiz_draft');
      } catch { /* ignore */ }
    }
  }, [currentGrade, currentSubject]);

  // Start a Quiz
  const handleStartQuiz = (config) => {
    let questions = config.questions;
    if (!questions && config.week) {
      const weekQuestions = getQuestionsByWeek(config.week);
      if (config.difficulty && config.difficulty !== 'all') {
        questions = weekQuestions.filter(q => q.difficulty === config.difficulty);
      }
      if (!questions || questions.length === 0) {
        questions = weekQuestions;
      }
    }

    if (!questions || questions.length === 0) {
      alert("Chưa có câu hỏi cho phần này!");
      return;
    }

    // Prepare questions
    const preparedQuestions = questions.map(q => ({ ...q }));
    const timeLimit = config.timeLimitSec || Math.max(300, preparedQuestions.length * 75); // 75s per question

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setActiveQuizConfig({
      type: config.type || 'week',
      grade: currentGrade,
      subject: currentSubject,
      week: config.week || null,
      title: config.title || `Luyện tập Tuần ${config.week || ''}`,
      questions: preparedQuestions,
      timeLimitSec: timeLimit
    });
    setCurrentResultData(null);
    setIsViewingExplanation(false);
  };

  // Finish Quiz & Submit
  const handleFinishQuiz = (resultPayload) => {
    const fullResultData = {
      ...resultPayload,
      grade: currentGrade,
      subject: currentSubject,
      type: activeQuizConfig?.type || 'week',
      week: activeQuizConfig?.week || null,
      title: activeQuizConfig?.title || 'Bài Luyện Tập'
    };

    const rewards = saveQuizResult(fullResultData);
    setCurrentResultData(fullResultData);
    setCurrentEarnedRewards(rewards);
  };

  // Retry Current Quiz
  const handleRetryCurrentQuiz = () => {
    if (!activeQuizConfig) return;
    const restartConfig = { ...activeQuizConfig };
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentResultData(null);
    setIsViewingExplanation(false);
    setActiveQuizConfig(restartConfig);
  };

  // Retry Wrong Only Questions
  const handleRetryWrongOnly = () => {
    if (!currentResultData) return;
    const wrongItems = currentResultData.details.filter(d => !d.isCorrect);
    if (wrongItems.length === 0) return;

    const wrongQuestionsList = wrongItems.map(d => d.question);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveQuizConfig({
      type: 'retry_wrong',
      grade: currentGrade,
      subject: currentSubject,
      week: currentResultData.week,
      title: `Luyện Lại Câu Sai (${wrongQuestionsList.length} câu)`,
      questions: wrongQuestionsList,
      timeLimitSec: Math.max(180, wrongQuestionsList.length * 90)
    });
    setCurrentResultData(null);
    setIsViewingExplanation(false);
  };

  // Exit Quiz
  const handleExitQuiz = () => {
    setActiveQuizConfig(null);
    setCurrentResultData(null);
    setIsViewingExplanation(false);
    try {
      localStorage.removeItem('toan_active_quiz_draft');
    } catch { /* ignore */ }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen font-nunito text-slate-800 flex flex-col ${
      isMath 
        ? 'bg-gradient-to-b from-amber-50/50 via-white to-orange-50/30' 
        : 'bg-gradient-to-b from-rose-50/50 via-white to-purple-50/30'
    }`}>
      {/* Mobile Install App Banner */}
      <InstallAppBanner />

      {/* Top Navigation */}
      <Navbar 
        currentTab={currentTab} 
        onSelectTab={(tab) => {
          if (activeQuizConfig) {
            if (window.confirm("Bạn có chắc muốn thoát bài làm hiện tại để chuyển trang không?")) {
              handleExitQuiz();
              setCurrentTab(tab);
            }
          } else {
            handleExitQuiz();
            setCurrentTab(tab);
          }
        }} 
      />

      {/* Main Tab & Quiz Arena View Routing */}
      <main className="flex-1 pb-24 md:pb-16 pt-2">
        {/* Active Quiz Player */}
        {activeQuizConfig && !currentResultData && (
          <QuizArena
            quizConfig={activeQuizConfig}
            onFinish={handleFinishQuiz}
            onExit={handleExitQuiz}
          />
        )}

        {/* Step-by-Step Explanation Review Modal */}
        {currentResultData && isViewingExplanation && (
          <ExplanationView
            resultData={currentResultData}
            onClose={() => setIsViewingExplanation(false)}
            onRetry={handleRetryCurrentQuiz}
            onExit={handleExitQuiz}
          />
        )}

        {/* Normal Dashboard / Roadmap / Practice / Wrong Tabs */}
        {!activeQuizConfig && !isViewingExplanation && (
          <>
            {currentTab === 'roadmap' && (
              <RoadmapView 
                onStartQuiz={handleStartQuiz} 
                onOpenVideoLesson={setActiveVideoLesson}
              />
            )}

            {currentTab === 'videos' && (
              <VideoLearningView 
                onSelectVideo={setActiveVideoLesson}
                onStartQuiz={handleStartQuiz}
              />
            )}

            {currentTab === 'practice' && (
              <CustomPractice onStartQuiz={handleStartQuiz} />
            )}

            {currentTab === 'wrong' && (
              <WrongQuestionsReview onStartQuiz={handleStartQuiz} />
            )}

            {currentTab === 'dashboard' && (
              <ParentDashboard onSelectTab={setCurrentTab} />
            )}

            {currentTab === 'badges' && (
              <BadgesModal onClose={() => setCurrentTab('roadmap')} />
            )}

            {currentTab === 'members' && (
              <MemberManagement />
            )}
          </>
        )}
      </main>

      {/* Global Video Lecture Player Modal */}
      {activeVideoLesson && (
        <VideoPlayerModal
          video={activeVideoLesson}
          onClose={() => setActiveVideoLesson(null)}
          onStartQuiz={handleStartQuiz}
        />
      )}

      {/* Result Celebration Modal */}
      {currentResultData && !isViewingExplanation && (
        <ResultModal
          resultData={currentResultData}
          earnedRewards={currentEarnedRewards}
          onRetry={handleRetryCurrentQuiz}
          onRetryQuiz={handleRetryCurrentQuiz}
          onRetryWrongOnly={handleRetryWrongOnly}
          onRetryWrong={handleRetryWrongOnly}
          onViewExplanation={() => {
            setIsViewingExplanation(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenExplanations={() => {
            setIsViewingExplanation(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onReview={() => {
            setIsViewingExplanation(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onClose={handleExitQuiz}
          onExit={handleExitQuiz}
          onBackToRoadmap={handleExitQuiz}
        />
      )}

      {/* Fixed Bottom Navigation Bar for Mobile Phones */}
      {!activeQuizConfig && !isViewingExplanation && (
        <MobileBottomNav
          currentTab={currentTab}
          onSelectTab={(tab) => {
            handleExitQuiz();
            setCurrentTab(tab);
          }}
          wrongCount={wrongQuestions?.length || 0}
        />
      )}
    </div>
  );
};

function App() {
  return (
    <LearningProvider>
      <MainContent />
    </LearningProvider>
  );
}

export default App;

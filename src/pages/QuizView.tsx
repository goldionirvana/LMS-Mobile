import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QUIZZES } from '@/lib/mockData';
import { ChevronLeft, CheckCircle2, XCircle, ArrowRight, RefreshCcw, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { motion } from 'motion/react';

export default function QuizView() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const quiz = QUIZZES.find(q => q.id === quizId);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (isFinished) return;
    
    if (timeLeft <= 0) {
      setIsFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isFinished]);

  if (!quiz) return <div className="p-10 text-center text-foreground">Quiz not found</div>;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
    setTimeLeft(300);
  };

  if (isFinished) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-md bg-card rounded-[40px] p-8 text-center shadow-2xl border border-border"
        >
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${percentage >= 70 ? 'bg-green-500/10 text-green-500' : 'bg-guide-gold/10 text-guide-gold'}`}>
            {percentage >= 70 ? <CheckCircle2 className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
          </div>
          <h1 className="text-2xl font-black text-foreground mb-2">Quiz Completed!</h1>
          <p className="text-muted-foreground mb-8">You scored {score} out of {quiz.questions.length}</p>
          
          <div className="bg-muted rounded-3xl p-6 mb-8">
            <div className="text-4xl font-black text-academy-blue mb-1">{percentage}%</div>
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Success Rate</div>
          </div>

          <div className="grid gap-3">
            <Button 
              onClick={() => navigate(-1)}
              className="w-full h-14 rounded-2xl bg-academy-blue text-white font-bold"
            >
              Back to Course
            </Button>
            <Button 
              variant="outline"
              onClick={resetQuiz}
              className="w-full h-14 rounded-2xl border-border text-muted-foreground font-bold flex items-center justify-center gap-2"
            >
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="min-h-screen bg-background pb-24 text-foreground">
      <div className="px-6 py-4 flex items-center justify-between border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-muted-foreground">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 px-8">
          <Progress value={progress} className="h-2 bg-muted" />
        </div>
        <div className="flex items-center gap-2 text-guide-gold font-bold">
          <Timer className="w-4 h-4" />
          <span className="text-xs">{formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="px-6 py-10">
        <span className="text-[10px] font-black text-guide-gold uppercase tracking-widest mb-4 block">Question {currentQuestion + 1}</span>
        <h2 className="text-xl font-black text-foreground leading-tight mb-10">
          {question.question}
        </h2>

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              className={`w-full p-5 rounded-3xl text-left transition-all duration-300 border-2 flex items-center justify-between group ${
                selectedOption === index 
                  ? 'border-academy-blue bg-academy-blue/5 text-academy-blue' 
                  : 'border-border bg-muted text-foreground hover:border-academy-blue/30'
              }`}
            >
              <span className="font-bold">{option}</span>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                selectedOption === index ? 'border-academy-blue bg-academy-blue text-white' : 'border-border bg-background'
              }`}>
                {selectedOption === index && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background border-t border-border z-10">
        <Button 
          disabled={selectedOption === null}
          onClick={handleNext}
          className="w-full h-14 rounded-2xl bg-academy-blue text-white font-bold text-base shadow-xl shadow-academy-blue/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:shadow-none"
        >
          {currentQuestion + 1 === quiz.questions.length ? 'Finish Quiz' : 'Next Question'}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

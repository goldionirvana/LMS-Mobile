/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import Courses from './pages/Courses';
import MyLearning from './pages/MyLearning';
import Profile from './pages/Profile';
import QuizView from './pages/QuizView';
import MaterialView from './pages/MaterialView';
import KMS from './pages/KMS';
import LearningReport from './pages/LearningReport';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-foreground">
        <div className="max-w-md mx-auto bg-background min-h-screen shadow-2xl shadow-slate-200 relative">
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Home />
                <BottomNav />
              </>
            } />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/course/:courseId/material/:lessonId" element={<MaterialView />} />
            <Route path="/quiz/:quizId" element={<QuizView />} />
            <Route path="/learning-report" element={<LearningReport />} />
            <Route path="/kms" element={
              <>
                <Navbar />
                <KMS />
                <BottomNav />
              </>
            } />
            <Route path="/courses" element={
              <>
                <Navbar />
                <Courses />
                <BottomNav />
              </>
            } />
            <Route path="/my-learning" element={
              <>
                <Navbar />
                <MyLearning />
                <BottomNav />
              </>
            } />
            <Route path="/profile" element={
              <>
                <Navbar />
                <Profile />
                <BottomNav />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


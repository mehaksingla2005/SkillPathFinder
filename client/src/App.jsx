import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import Skill from './components/Skill';
import UserDashboard from './components/UserDashboard';
import QuestionnaireForm from './components/QuestionnaireForm';
import RecommendationPage from './components/RecommendationPage';
import UserProfile from './components/Profile';
function App() {
  
    const user = {
      name: 'Mehak Rishabh',
      username: 'Mehak571111',
      joinDate: 'July 2024',
      following: 0,
      followers: 0,
      dayStreak: 0,
      totalXP: 0,
      currentLeague: 'None',
      topFinishes: 0,
      wildfireProgress: 0
    };
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/selectskill" element={<Skill />} />
        <Route path="/question" element={<QuestionnaireForm />} />
        <Route path="/recommendation" element={<RecommendationPage/>} />
        <Route path = "/profile" element = {<UserProfile/>}></Route>
        {/* Other routes */}
      </Routes>
    </Router>
    {/* <UserDashboard user={user} /> */}
    </>
  );
}

export default App;
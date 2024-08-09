import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Skill from './components/Skill';
import UserDashboard from './components/UserDashboard';
import QuestionnaireForm from './components/QuestionnaireForm';
import RecommendationsPage from './components/RecommendationsPage';
import UserProfile from './components/Profile';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
// import { AuthProvider } from './components/AuthContext';

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
    {/* <AuthProvider> */}
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/selectskill" element={<Skill />} />
        <Route path="/question" element={<QuestionnaireForm />} />
        <Route path="/recommendation" element={<RecommendationsPage/>} />
        <Route path = "/profile" element = {<UserProfile/>}></Route>
        {/* Other routes */}
      </Routes>
      <ToastContainer />
    </Router>
    {/* </AuthProvider> */}
    {/* <UserDashboard user={user} /> */}
    </>
  );
}

export default App;









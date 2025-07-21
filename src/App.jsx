import { useState } from "react";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";

function App(){
  const [currentView,setCurrentView] = useState('login');
  const [currentUser,setCurrentUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
  };

  const handleRegisterSuccess = () =>{
    alert('Registration Successful');
    setCurrentView('login');
  };

  return(
    <div>
      {currentView === 'login' && (
        <LoginPage
          onRegisterClick={()=>setCurrentView('register')}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {currentView === 'register' && (
        <RegisterPage
          onRegisterSuccess = {handleRegisterSuccess}
          onLoginClick = {() => setCurrentView('login')}
        />
      )}

      {currentView === 'dashboard' && (
        <Dashboard user={currentUser} onLogout={()=>{
          setCurrentUser(null);
          setCurrentView('login');
        }}
        />
      )}
    </div>
  );
}
export default App;
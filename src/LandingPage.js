import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/landing'); // Redirect to Login Page
  };

  return (
    <div className="container">
      <h2>Welcome to 'Website'</h2>
      <button className="button" onClick={goToLogin}>Log In</button>
    </div>
  );
}

export default LandingPage;

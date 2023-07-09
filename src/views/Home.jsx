import '../styles/home.css';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className='home-title'>Game</h1>
      <div>
        <button onClick={()=>navigate("/SignUp")} className="home-button">Registrarse</button>
        <button onClick={()=>navigate("/Login")} className="home-button login-button">Ingresar</button>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import '../Components/Start.css'

function Start () {
    const navigate = useNavigate()

    return(
        <>
        <div className="container">
            <h1 className="title-start">Number Guessing Game</h1>
            <button className="start-btn" onClick={() => navigate('/game-start')}>Start</button>
        </div>
        </>
       
    );
}
export default Start
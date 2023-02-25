import logo from './logo.svg';
import './App.css';
import './index.css';
import './dataQuestions';
function QuizApp(props) {
  return (
    <div className="quizApp">
     <h2>Completed!</h2>
     <h4>Total Score {props.score}/20</h4>
     <h4>Currect Questions {props.corrAns}/{questions.length}</h4>
     <button onClick={props.handleRestart}>Restart</button>
    </div>
  );
}

export default QuizApp;

import logo from './logo.svg';
import './App.css';
import './index.css';
import {questions} from './dataQuestions';
function QuizApp(props) {
  return (
    <div className="quizApp">
     <h2>🎉Completed!</h2>
     <h4>Total Score {props.score}/25</h4>
     <h4>Currect Questions {props.corrAns}/{questions.length}</h4>
     <button onClick={props.handleRestart}>Restart</button>
    </div>
    
  );
}

export default QuizApp;

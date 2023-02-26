import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { questions } from "./dataQuestions";
import "./App.js";
import QuizApp from "./App.js";

function Text() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [corrAns, setCorrAns] = useState(0);
  const [showRes, setShowRes] = useState(false);
  const handleansOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 5);
      setCorrAns(corrAns + 1);
    }
  };
  const handleNextOpt = () => {
    const nextQues = currQuestion + 1;
    if (nextQues < questions.length) {
      setCurrQuestion(nextQues);
    } else {
      setShowRes(true);
    }
  };
  const handleRestart = () => {
    setCurrQuestion(0);
    setScore(0);
    setCorrAns(0);
    setShowRes(false);
  };

  return (
    <>
      <div className="app">
        {showRes ? (
          <QuizApp
            score={score}
            corrAns={corrAns}
            handleRestart={handleRestart}
          />
        ) : (
          <>
            <div className="question-area">
              <h5>Score: {score}</h5>

              <div className="question-count">
                <h2>
                  Question {currQuestion + 1}/{questions.length}
                </h2>
              </div>

              <div className="question-text">
                {questions[currQuestion].QuestionArea}
              </div>
              <div className="answer-area">
                {questions[currQuestion].answerOption.map((ans, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => handleansOption(ans.isCorrect)}
                    >
                      {ans.answerText}
                    </button>
                  );
                })}
                <div className="button">
                  <button onClick={handleRestart}>Quit</button>
                  <button onClick={handleNextOpt}>Next</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Text />);

reportWebVitals();

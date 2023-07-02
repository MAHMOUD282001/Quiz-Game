import React, { useEffect, useState } from "react";
import "./QuizApp.css";
import questions from "../../assets/Questions.json";
import video1 from "../../assets/Videos/Video1.mp4"
import video2 from "../../assets/Videos/Video2.mp4"


function QuizApp() {
  let [questionIndex, setQustionIndex] = useState(0);

  let [question, setQustion] = useState("");
  let [firstAnswer, setFirstAnswer] = useState("");
  let [secondAnswer, setSecondAnswer] = useState("");
  let [thairdAnswer, setThairdAnswer] = useState("");
  let [fourthAnswer, setFourthAnswer] = useState("");
  let [score, setScore] = useState(0);

  let incrementQuestionIndex = (e) => {
    console.log(questions[questionIndex].right_answer)
    
    let targetValue = e.target.innerHTML
    
    const replacements = {
      '&lt;': '<',
      '&gt;': '>',
    };
    
    for (let key in replacements) {
      targetValue = targetValue.replace(key, replacements[key]);
    }
    
    console.log(targetValue)
    
    if (targetValue == questions[questionIndex].right_answer) {
      console.log("yes")
      setScore(score + 10);
    } else {
      console.log("no")
      setScore(score - 10);
    }

    setQustionIndex(questionIndex + 1);
  };
  
  console.log(score)

  useEffect(() => {
    if (questionIndex < questions.length) {
      setQustion(questions[questionIndex].title);
      setFirstAnswer(questions[questionIndex].answer_1);
      setSecondAnswer(questions[questionIndex].answer_2);
      setThairdAnswer(questions[questionIndex].answer_3);
      setFourthAnswer(questions[questionIndex].answer_4);
    }
  }, [questionIndex]);

  return (
    <div className="game-content">
      <h1>Quiz App</h1>
      {questionIndex < questions.length ? (
        <>
          <div className="question">{question}</div>

          <div className="btns-content">
            <button
              className="shadow__btn game-btn"
              onClick={(e) => incrementQuestionIndex(e)}
            >
              {firstAnswer}
            </button>

            <button
              className="shadow__btn game-btn"
              onClick={(e) => incrementQuestionIndex(e)}
            >
              {secondAnswer}
            </button>

            <button
              className="shadow__btn game-btn"
              onClick={(e) => incrementQuestionIndex(e)}
            >
              {thairdAnswer}
            </button>

            <button
              className="shadow__btn game-btn"
              onClick={(e) => incrementQuestionIndex(e)}
            >
              {fourthAnswer}
            </button>
          </div>
        </>
      ) : (
        <>
          
          <div style={{width : "100%"}}>
            {score > 40 ? (
              <video src={video1} width="100%" height="auto" style={{margin: "30px 0"}} controls autoPlay/>
            )
            :
            (
              <video src={video2} width="100%" height="auto" style={{margin: "30px 0"}} controls autoPlay/>
            )
            }
          </div>
          
          <h2>Your Score: {score}</h2>
        </>
      )}
    </div>
  );
}

export default QuizApp;

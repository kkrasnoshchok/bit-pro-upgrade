import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./FirstQuestion.css";
import LoadingPage from "../LoadingPage/LoadingPage";

function FirstQuestion(props) {
  const [loading, setLoading] = useState(false);
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("second");
  };

  // hook useEffect для лоадера
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="quiz">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="quizPage">
          <div className="container">
            <div className="quizInner">
              <div className="quizQuestion question">
                Do you have an experience in investment?
              </div>
              <div className="quizAnswers answers">
                <div
                  className="answer"
                  onClick={setQuizState}
                >
                  Yes
                </div>
                <div
                  className="answer"
                  onClick={setQuizState}
                >
                  No
                </div>
                <div
                  className="answer"
                  onClick={setQuizState}
                >
                  I am loss to answer
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FirstQuestion;

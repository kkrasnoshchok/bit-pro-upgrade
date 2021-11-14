import React, { useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./Start.css";
import { IoIosArrowForward } from "react-icons/io";

export default function Start() {
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("first");
  };
  return (
    <div className="start">
      <main className="startMain main">
        <div className="mainTitle title">
          <strong>Welcome</strong>
          <p>to our App</p>
        </div>
        <div className="mainDescription description">
          <p className>
            <strong>Start making money</strong> from any place, wherever you
            are, to that end{" "}
            <strong>you need just smartphone an Internet.</strong>
          </p>
          <p className>
            With an eye to <strong>register</strong> you need{" "}
            <strong>to answer the several simple questions.</strong>
          </p>
        </div>

        <div className="mainButton">
          <button onClick={setQuizState}>
            <p>continue</p>
            <IoIosArrowForward className="arrowIcon"/>
          </button>
        </div>
      </main>
    </div>
  );
}

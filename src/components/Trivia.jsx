import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import wait from "../sounds/wait.mp3";

export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setStop,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  const [waitPlay, { stop }] = useSound(wait);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    waitPlay();
  }, [waitPlay]);

  useEffect(() => stop, [waitPlay, stop]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName("answer active");
    setIsDisabled(true);
    delay(1000, () => {
      setClassName(answer.correct ? "answer correct" : "answer wrong");
    });
    delay(3000, () => {
      if (answer.correct) {
        setIsDisabled(false);
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        delay(
          1000,
          () => {
            wrongAnswer();
            stop();
            setStop(true);
          },
          []
        );
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer) => (
          <button
            className={selectedAnswer === answer ? className : "answer"}
            onClick={() => handleClick(answer)}
            disabled={isDisabled}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}

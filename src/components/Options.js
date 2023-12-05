import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { questions, dispatch, answer, index } = useQuiz();
  const isAnswered = answer !== null;
  const question = questions[index];

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            isAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: index });
          }}
          key={option}
          disabled={isAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

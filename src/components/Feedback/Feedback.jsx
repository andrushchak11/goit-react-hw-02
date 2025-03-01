import css from "./Feedback.module.css";

function Feedback({ feedback, totalFeedback }) {
  return (
    <>
      <h2>Feedback Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
    </>
  );
}

export default Feedback;

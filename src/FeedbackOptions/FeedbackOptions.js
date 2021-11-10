import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
        {options.map((option, index) => (
            <button key={index} name={option} onClick={onLeaveFeedback}>
                {option}
            </button>
        ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;

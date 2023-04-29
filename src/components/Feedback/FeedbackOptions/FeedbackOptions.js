import React from "react";
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className="Btn__list">
        {options.map((name, index) => (
            <button
                key={index}
                className={css.button}
                type="button"
                onClick={() => onLeaveFeedback({ name })}
            >
                {name}
            </button>
        ))}
    </div>
    )
    
};

export default FeedbackOptions;


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
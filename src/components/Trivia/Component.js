import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import classNames from "classnames";
import dateFormat from "dateformat";
import { connect } from "react-redux";

// Actions */
import { loadTrivia as loadTriviaAction } from "../../store/actions";

/** Local */
import WithJss from "../../hocs/WithJss";
import styles from "./styles";

const Component = (props) => {

  const {
    classes,
    loadTrivia,
    answer,
    question,
    value,
    airdate,
    category
  } = props;

  const [revealResponse, setRevealResponse] = useState(false);
  const [burnedQuestion, setBurnedQuestion] = useState(false);
  const [burnedQuestions, setBurnedQuestions] = useState(0);

  const classNameNextButton = classNames(
    classes.nextButton,
    {
      [classes.nextButtonDisabled]: !revealResponse
    }
  );

  const classNameQuestionBoxChangeInfo = classNames(
    classes.questionBoxChangeInfo,
    {
      [classes.questionBoxChangeInfoAnswer]: !revealResponse
    }
  );

  useEffect(() => {
    loadTrivia()
  }, []);

  useEffect(() => {
    if(revealResponse && !burnedQuestion) {
      setBurnedQuestion(true)
      setBurnedQuestions(burnedQuestions + 1)
    }
  }, [revealResponse]);
  
  const handleNextQuestion = () => {
    loadTrivia()
    setBurnedQuestion(false)
    setRevealResponse(false)
  };

  return (
    <div className={classes.root}>
      <div className={classes.burnedQuestionsBox}>
        <span>
          { `BURNED QUESTIONS: "${burnedQuestions}"` }
        </span>
      </div>
      <div className={classes.categoryBox}>
        <span>
          { `CATEGORY: "${category}"` }
        </span>
      </div>
      <div className={classes.questionBox}>
        <div className={classes.questionBoxHeader}>
          <span>
            { `AIR DATE: "${ dateFormat(airdate, "shortDate") }"` }
          </span>
          <span>
            { `POINTS: "${ value }"` }
          </span>
        </div>
        <div className={classes.questionBoxInfo}>
          {
            revealResponse ? (
              <p>
                { `ANSWER: "${answer}"` }
              </p>
            ) : (
              <p>
                { `QUESTION: "${question}"` }
              </p>
            )
          }
          
        </div>
        <div className={classNameQuestionBoxChangeInfo} onClick={() => setRevealResponse(!revealResponse)}>
          {
            revealResponse ? (
              <span>
                REVEAL QUESTION
              </span>
            ) : (
              <span>
                REVEAL ANSWER
              </span>
            )
          }
        </div>
      </div>
      <button className={classNameNextButton} onClick={handleNextQuestion} disabled={!revealResponse}>
        <span>
          NEXT QUESTION
        </span>
      </button>
    </div>
  );
}

const propTypes = {
  /** Overrides or extends the default classes. */
  classes: PropTypes.objectOf(PropTypes.string),
  loadTrivia: PropTypes.func,
  answer: PropTypes.string,
  question: PropTypes.string,
  value: PropTypes.number,
  airdate: PropTypes.string,
  category: PropTypes.string
};

const defaultProps = {
  classes: {},
  loadTrivia: null,
  answer: '',
  question: '',
  value: 0,
  airdate: '',
  category: ''
};

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

const mapStateToProps = state => ({
  answer: state.trivia.answer,
  question: state.trivia.question,
  value: state.trivia.value,
  airdate: state.trivia.airdate,
  category: state.trivia.category
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadTrivia: loadTriviaAction
}, dispatch);

const ComponentWithJss = WithJss(styles)(props => <Component {...props} />);

const ComponentConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentWithJss);

export default ComponentConnected;
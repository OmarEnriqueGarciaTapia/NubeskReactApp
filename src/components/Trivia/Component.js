import React from "react";
import PropTypes from "prop-types";

/** Local */
import WithJss from "../../hocs/WithJss";
import styles from "./styles";

const Component = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.burnedQuestionsBox}>
        <span>
          Burned Questions 0
        </span>
      </div>
      <div className={classes.categoryBox}>
        <span>
          Category
        </span>
      </div>
      <div className={classes.questionBox}>
        <div className={classes.questionBoxHeader}>
          <span>
            Air Date
          </span>
          <span>
            Difficulty
          </span>
        </div>
        <div className={classes.questionBoxCenter}>
          <span>
            Question / Answer
          </span>
        </div>
        <div className={classes.questionBoxFooter}>
          <span>
            Answer / Question
          </span>
        </div>
      </div>
      <button className={classes.nextButton} >
        <span>
          Next Question
        </span>
      </button>
    </div>
  );
}

const propTypes = {
  /** Overrides or extends the default classes. */
  classes: PropTypes.objectOf(PropTypes.string)
};

const defaultProps = {
  classes: {}
};

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export default WithJss(styles)(props => <Component {...props} />);

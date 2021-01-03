import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

/** Local */
import WithJss from "../../hocs/WithJss";
import styles from "./styles";


const Component = ({ classes }) => {
let history = useHistory();
  return (
    <div className={classes.root}>
      <button className={classes.startGameButton} onClick={ () => history.push('/trivia') } >
        <span>
          Start Game
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

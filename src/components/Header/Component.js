import React from "react";
import PropTypes from "prop-types";

/** Local */
import WithJss from "../../hocs/WithJss";
import styles from "./styles";
import logo from '../../resources/media/logo.png';

const Component = ({ classes }) => {
  return (
    <div className={classes.root}>
      <img src={logo} className="logo" alt="logo" />
      <span>Trivia App</span>
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

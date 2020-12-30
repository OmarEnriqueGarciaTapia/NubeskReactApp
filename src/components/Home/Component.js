import React from "react";
import PropTypes from "prop-types";

/** Local */
import WithJss from "../../hocs/WithJss";
import styles from "./styles";

const Component = ({ classes }) => {
  return (
    <div className={classes.root}>
      <span>Home</span>
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

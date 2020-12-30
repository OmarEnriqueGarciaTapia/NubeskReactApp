import React from 'react';
import PropTypes from 'prop-types';
import WithJss from '../../hocs/WithJss';
import styles from './styles';

const Main = (props) => {
  const {
    classes,
    children
  } = props;
  return (
    <div className={classes.root}>
      { children }
    </div>
  )
}

const propTypes = {
  /** Overrides or extends the default classes. */
  classes: PropTypes.objectOf(PropTypes.string),
  /** hide or show the component. */
  hide: PropTypes.bool,
};

const defaultProps = {
  classes: null,
  hide: false,
};

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default WithJss(styles)(props => <Main {...props} />);
import React from "react";
import jss from "jss";
import preset from "jss-preset-default";
import withStyles from 'react-jss';
import { compose } from '../../helpers/common';

jss.setup(preset());

const WithJss = styles => Component => {
  const styleSheet = jss.createStyleSheet(styles, {
    index: 0,
    link: true,
    classNamePrefix: 'Default-'
  });
  styleSheet.attach();

  return withStyles({}, {
    index: 1,
  })(
    ({
      classes, ...other
    }) => {
      styleSheet.update(other);
      const newClasses = compose( styleSheet.classes, classes,)
      return (
        <Component
          {... other}
          classes={newClasses}
        />
      );
    }
  );
};

export default WithJss;

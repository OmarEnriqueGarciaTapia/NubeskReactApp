import { colors } from "../../styles";

const defaultStyles = {
  '@keyframes Rotation': {
    '0%': {
      transform: 'rotate(0deg)',
      opacity: 1
    },
    '50%': {
      transform: 'rotate(180deg)',
      opacity: '0.5'
    },
    '100%': {
      transform: 'rotate(360deg)',
      opacity: 1
    }
  },
  root: {
    border: `2.5em solid ${colors().solid.grey}`,
    borderRadius: '50%',
    borderTop: `2.5em solid ${colors().solid.yellow}`,
    width: '10em',
    height: '10em',
    animationName: '$Rotation',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationDuration: '0.75s'
  }
};

const mobileStyles = {
  "@media (max-width: 1024px)": {
  }
};

const styles = { ...defaultStyles, ...mobileStyles }

export default styles;

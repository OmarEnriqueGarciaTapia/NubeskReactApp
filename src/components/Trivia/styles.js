import {
  colors,
  shadows
} from '../../styles';

const styles = {
  root: {
    width: '75%',
    margin: '0 auto',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column'
  },
  box: {
    extend: 'flex',
    width: '100%',
    borderRadius: 10,
    backgroundColor: colors().solid.secondary,
    '& span': {
      padding: 10,
      height: "auto",
      textAlign: 'center'
    },
    '& div': {
      width: '100%',
      alignItems: 'center'
    },
  },
  burnedQuestionsBox: {
    extend: 'box',
    height: '8vh'
  },
  categoryBox: {
    extend: 'box',
    height: '8vh'
  },
  questionBox: {
    extend: 'box',
    width: '100%',
    height: '40vh',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  questionBoxHeader: {
    extend: 'flex',
    height: '8vh',
    borderBottom: `1px solid ${colors().solid.primary}`,
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  questionBoxCenter: {
    extend: 'flex',
    height: '16vh',
    justifyContent: 'center',
  },
  questionBoxFooter: {
    extend: 'flex',
    height: '16vh',
    justifyContent: 'center',
    backgroundColor: colors().solid.blue,
    borderRadius: 0
  },
  nextButton: {
    width: '100%',
    height: '16vh',
    backgroundColor: colors().solid.green
  }
};

const mobileStyles = {
  '@media (max-width: 1024px)': {}
};

export default {
  ...styles,
  ...mobileStyles
};
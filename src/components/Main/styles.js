import { colors, gradients } from '../../styles';

const text = {
  textAlign: 'center',
  fontSize: '1em',
  fontWeight: 'bold'
};

const globalStyles = {
  '@global': {
    '@font-face': [
      {
        fontFamily: 'Roboto',
        src: 'url(/fonts/Roboto/Roboto-Regular.ttf)'
      }
    ],
    body: {
      margin: 0,
      background: gradients().purpleDiagonal.background,
      filter: gradients().purpleDiagonal.filter,
    },
    a: {
      extend: [text],
      color: colors().solid.primary
    },
    p: {
      extend: [text],
      fontSize: '0.80em'
    },
    span: {
      extend: [text],
    },
    h1: {
      extend: [text],
    }
  }
};

const styles = {
  root: {
    width: '100%',
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroudColor: 'grey',
    height: '100vh'
  }
};

const mobileStyles = {
  '@media (max-width: 1024px)': {
  }
};

export default {
  ...globalStyles,
  ...styles,
  ...mobileStyles
};

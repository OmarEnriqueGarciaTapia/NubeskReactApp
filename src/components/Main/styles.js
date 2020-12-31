import { colors, gradients } from "../../styles";

const globalStyles = {
  "@global": {
    "@font-face": [
      {
        fontFamily: "Roboto",
        src: "url(/fonts/Roboto/Roboto-Regular.ttf)"
      }
    ],
    body: {
      margin: 0,
      background: gradients().purpleDiagonal.background,
      filter: gradients().purpleDiagonal.filter,
    },
    a: {
      color: colors().solid.primary,
      textDecoration: "none",
      fontSize: "xx-large"
    },
    p: {
      color: colors().solid.primary,
      fontSize: "xx-large"
    },
    span: {
      color: colors().solid.primary,
      fontSize: "xx-large"
    },
    h1: {
      color: colors().solid.primary,
      fontSize: "1.25em"
    }
  }
};

const styles = {
  root: {
    width: "100%",
    fontFamily: "Roboto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroudColor: "grey",
    height: "100vh"
  }
};

const mobileStyles = {
  "@media (max-width: 1024px)": {}
};

export default {
  ...globalStyles,
  ...styles,
  ...mobileStyles
};

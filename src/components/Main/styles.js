import { gradients } from "../../styles";

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
      color: "#1896BD",
      textDecoration: "none",
      fontSize: "1em"
    },
    p: {
      fontSize: "1em"
    },
    span: {
      fontSize: "1em"
    },
    h1: {
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
    backgroudColor: "grey"
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

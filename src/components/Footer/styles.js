import { colors, shadows } from "../../styles";

const styles = {
  root: {
    width: "100%",
    height: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderTop: "1px solid grey",
    color: colors().solid.primary,
    backgroundColor: colors().solid.secondary,
    boxShadow: shadows("white").bottom
  }
};

const mobileStyles = {
  "@media (max-width: 1024px)": {
  }
};

export default { ...styles, ...mobileStyles };

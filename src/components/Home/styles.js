import { colors, shadows } from "../../styles";

const styles = {
  root: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  startGameButton: {
    width: "100%",
    height: "50vh",
    fontSize: "xx-large",
    backgroundColor: colors().solid.blue,
    borderRadiud: 5
  }
};

const mobileStyles = {
  "@media (max-width: 1024px)": {
  }
};

export default { ...styles, ...mobileStyles };

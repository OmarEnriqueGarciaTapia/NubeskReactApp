import { colors } from "../../styles";

const defaultStyles = {
  root: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  startGameButton: {
    width: "80%",
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

const styles = { ...defaultStyles, ...mobileStyles }

export default styles;

import colors from "./colors";

const gradients = () => {
  return(
    {
      purpleDiagonal: {
        background: `linear-gradient(90deg, ${colors().solid.pink} 0%, ${colors().solid.blue} 100%)`,
        filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='${colors().solid.pink}', endColorstr='${colors().solid.blue}', GradientType=1 )`
      }
    }
  )
}

export default gradients;
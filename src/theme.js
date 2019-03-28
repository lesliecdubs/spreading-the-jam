// export default {
//   // add a custom font
//   font: "Roboto, sans-serif",
//   // custom colors
//   Slide: {
//     background: "linear-gradient(#4EB3A7, #468DAD)"
//   },
//   colors: {
//     text: "white"
//     // background: "linear-gradient(#e66465, #9198e5)"
//   }
// };
// example theme.js
import theme from "mdx-deck/themes";
import atomDark from "react-syntax-highlighter/styles/prism/atom-dark";

export default {
  ...theme,
  font: "Roboto, sans-serif",
  monospace: '"Dank Mono", monospace',
  prism: {
    style: atomDark
  },
  img: {
    maxWidth: "100%"
  },
  ul: {
    listStyle: "none",
    paddingLeft: "20px",
    display: "inline-block"
  },
  li: {
    paddingBottom: "20px",
    fontFamily: '"Dank Mono", monospace'
  },
  colors: {
    text: "#fff",
    background: "white",
    link: "#fff",
    pre: "#fff",
    preBackground: "#051626",
    code: "#fff"
  }
};

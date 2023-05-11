import { StyleSheet } from "react-native"
import COLORS from "../../constants/styles/colors.js"

const styles = StyleSheet.create({
  largeFooter: {
    height: "50px",
    backgroundColor: COLORS.veryDarkGrayColor,
    borderTopColor: "#000",
    borderTopWidth: "1px",
    boxSizing: "border-box",
    display: "block",
    fontFamily: '"Helvetica", "Arial", sans-serif'
  },
  mediumFooter: {
    height: "50px",
    backgroundColor: COLORS.veryDarkGrayColor,
    borderTopColor: "#000",
    borderTopWidth: "1px",
    boxSizing: "border-box",
    display: "block",
    fontFamily: '"Helvetica", "Arial", sans-serif'
  },
  smallFooter: {
    height: "50px",
    backgroundColor: COLORS.veryDarkGrayColor,
    borderTopColor: "#000",
    borderTopWidth: "1px",
    boxSizing: "border-box",
    display: "block",
    fontFamily: '"Helvetica", "Arial", sans-serif'
  },

  footerUl: { flexDirection: "row", height: "100%", display: "flex", justifyContent: "center", padding: "0", listStyleType: "none", color: "#fff", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", fontFamily: '"Helvetica", "Arial", sans-serif' },
  footerLi: { marginVertical: "auto", marginHorizontal: "0", listStyleType: "none", color: "#fff", textAlign: "-webkit-match-parent", fontFamily: '"Helvetica", "Arial", sans-serif' },
  footerA: { all: "unset", cursor: "pointer", listStyleType: "none", color: "#fff", fontFamily: '"Helvetica", "Arial", sans-serif' }
})

export default styles

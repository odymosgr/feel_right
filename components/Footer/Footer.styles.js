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
    backgroundColor: "#fff",
    borderTopColor: "#000",
    borderTopWidth: "1px",
    boxSizing: "border-box",
    display: "block",
    fontFamily: '"Helvetica", "Arial", sans-serif'
  },
  smallFooter: {
    height: "50px",
    backgroundColor: COLORS.darkGrayColor,
    borderTopColor: "#000",
    borderTopWidth: "1px",
    boxSizing: "border-box",
    display: "block",
    fontFamily: '"Helvetica", "Arial", sans-serif'
  }
})

export default styles

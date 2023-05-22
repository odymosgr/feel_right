import { StyleSheet } from "react-native"
import COLORS from "../../constants/styles/colors.js"
import { Colors } from "react-native/Libraries/NewAppScreen"

const styles = StyleSheet.create({
  largeRightSignup: { width: "500px", height: "440px", borderRadius: "40px", backgroundColor: COLORS.lightGrayColor, paddingTop: "14px", display: "block" },
  mediumRightSignup: { width: "500px", height: "440px", borderRadius: "40px", backgroundColor: COLORS.lightGrayColor, paddingTop: "14px", display: "block" },
  smallRightSignup: { width: "320px", height: "440px", borderRadius: "40px", backgroundColor: COLORS.lightGrayColor, paddingTop: "14px", display: "block" },

  largeFormSignup: { height: "100%", width: "380px", margin: "auto", display: "block" },
  mediumFormSignup: { height: "100%", width: "380px", margin: "auto", display: "block" },
  smallFormSignup: { height: "100%", width: "260px", margin: "auto", display: "block" },

  largeFormHeader: { display: "block" },
  mediumFormHeader: { display: "block" },
  smallFormHeader: { display: "block" },

  largeFormHeaderText: { color: COLORS.darkBlueColor, height: "85px", width: "100%", margin: "0", paddingVertical: "0", paddingHorizontal: "10px", fontFamily: '"Helvetica"', fontStyle: "normal", fontWeight: "400", fontSize: "56px", lineHeight: "74px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" },
  mediumFormHeaderText: { color: COLORS.darkBlueColor, height: "85px", width: "100%", margin: "0", paddingVertical: "0", paddingHorizontal: "10px", fontFamily: '"Helvetica"', fontStyle: "normal", fontWeight: "400", fontSize: "56px", lineHeight: "74px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" },
  smallFormHeaderText: { color: COLORS.darkBlueColor, height: "85px", width: "100%", margin: "0", paddingVertical: "0", paddingHorizontal: "10px", fontFamily: '"Helvetica"', fontStyle: "normal", fontWeight: "400", fontSize: "56px", lineHeight: "74px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" },

  largeFormWrapper: { display: "flex", flexDirection: "column", justifyContent: "space-between", height: "310px" },
  mediumFormWrapper: { display: "flex", flexDirection: "column", justifyContent: "space-between", height: "310px" },
  smallFormWrapper: { display: "flex", flexDirection: "column", justifyContent: "space-between", height: "310px" },

  largeGreenBtn: { display: "flex", backgroundColor: COLORS.greenColor, justifyContent: "center", margin: "0", paddingVertical: "1px", paddingHorizontal: "6px", height: "47px", borderRadius: "10px", border: "1px solid #000", color: "#fff", fontWeight: "700", fontSize: "24px", textAlign: "center", width: "100%" },
  largeGreenBtnHover: { display: "flex", justifyContent: "center", margin: "0", paddingVertical: "1px", paddingHorizontal: "6px", height: "47px", borderRadius: "10px", border: "1px solid #000", color: "#fff", fontWeight: "700", fontSize: "24px", textAlign: "center", width: "100%", backgroundColor: COLORS.lightGreenColor, curson: "pointer" }
})

export default styles

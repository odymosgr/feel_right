import { StyleSheet } from "react-native"
import COLORS from "../../constants/styles/colors.js"

const styles = StyleSheet.create({
  largeHeroSection: { paddingTop: "94px", marginBottom: "50px", display: "block", fontFamily: '"Helvetica", "Arial", sans-serif' },
  mediumHeroSection: { paddingTop: "94px", marginBottom: "50px", display: "block", fontFamily: '"Helvetica", "Arial", sans-serif' },
  smallHeroSection: { paddingTop: "10px", marginBottom: "50px", display: "block", fontFamily: '"Helvetica", "Arial", sans-serif' },

  largeHeroWrapper: { marginVertical: "0", marginLeft: "auto", marginRight: "auto", maxWidth: "1317px", height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "row" },
  mediumHeroWrapper: { marginVertical: "0", marginLeft: "auto", marginRight: "auto", height: "100%", display: "flex", maxWidth: "800px", flexDirection: "column", justifyContent: "space-around" },
  smallHeroWrapper: { marginVertical: "0", marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "space-between", maxWidth: "360px", height: "780px" },

  largeHeroLeft: { display: "block" },
  mediumHeroLeft: { display: "block", textAlign: "center" },
  smallHeroLeft: { display: "block", textAlign: "center" },

  largeHeroLeftHeader: { display: "block", height: "205px", margin: "0", paddingTop: "14px", fontFamily: '"Helvetica"', fontStyle: "normal", fontWeight: "400", fontSize: "56px", lineHeight: "74px", color: COLORS.darkBlueColor },
  mediumHeroLeftHeader: { display: "block", height: "205px", margin: "0", paddingTop: "14px", fontFamily: '"Helvetica"', fontStyle: "normal", fontWeight: "400", fontSize: "56px", lineHeight: "74px", color: COLORS.darkBlueColor },
  smallHeroLeftHeader: { display: "block", margin: "0", paddingTop: "14px", fontFamily: '"Helvetica"', fontStyle: "normal", fontWeight: "400", color: COLORS.darkBlueColor, fontSize: "32px", lineHeight: "50px", height: "150px" },

  largeHeroLeftText: { display: "block", height: "306px", margin: "0", paddingTop: "0", fontFamily: '"Helvetica"', fontStyle: "normal", fontWeight: "400", fontSize: "28px", lineHeight: "37px", color: COLORS.veryDarkGreyColor },
  mediumHeroLeftText: { display: "block", lineHeight: "30px", height: "200px", margin: "0", paddingTop: "0", fontFamily: '"Helvetica"', fontStyle: "normal", fontWeight: "400", fontSize: "28px", color: COLORS.veryDarkGreyColor },
  smallHeroLeftText: { display: "block", fontSize: "16px", lineHeight: "20px", height: "150px", margin: "0", paddingTop: "0", fontFamily: '"Helvetica"', fontStyle: "normal", fontWeight: "400", color: COLORS.veryDarkGreyColor }
})

export default styles

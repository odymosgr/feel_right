import { View, Text, TouchableOpacity, Dimensions } from "react-native"
import styles from "./Footer.styles.js"

const Footer = () => {
  return (
    <View style={styles.footerDiv}>
      <View style={styles.footerUl}>
        <TouchableOpacity style={styles.footerLi}>
          <Text style={styles.footerA}>Home</Text>
        </TouchableOpacity>
        <View style={styles.footerLi}>
          <Text style={styles.footerA}>&nbsp;|&nbsp;</Text>
        </View>
        <TouchableOpacity style={styles.footerLi}>
          <Text style={styles.footerA}>About Us</Text>
        </TouchableOpacity>
        <View style={styles.footerLi}>
          <Text style={styles.footerA}>&nbsp;|&nbsp;</Text>
        </View>
        <TouchableOpacity style={styles.footerLi}>
          <Text style={styles.footerA}>Terms</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Footer

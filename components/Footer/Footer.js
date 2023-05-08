import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import styles from "./Footer.styles.js"

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.ul}>
        <TouchableOpacity style={styles.li}>
          <Text style={styles.a}>Home&nbsp;|&nbsp;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.li}>
          <Text style={styles.a}>About Us&nbsp;|&nbsp;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.li}>
          <Text style={styles.a}>Terms</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Footer

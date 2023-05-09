import React, { useEffect, useState } from "react"
import { Dimensions } from "react-native"
import { View, Text, TouchableOpacity } from "react-native"
import styles from "./Footer.styles.js"

const Footer = props => {
  const windowWidth = { props }

  ///
  // const [windowWidth, setWindowWidth] = useState(
  //   Dimensions.get('window').width,
  // );
  ////

  const [footerStyle, setFooterStyle] = useState(styles.largeFooter)

  useEffect(() => {
    const handleResize = () => {
      const width = Dimensions.get("window").width
      if (width < 850) {
        setFooterStyle(styles.smallFooter)
      } else if (width < 1100) {
        setFooterStyle(styles.mediumFooter)
      } else {
        setFooterStyle(styles.largeFooter)
      }
    }

    Dimensions.addEventListener("change", handleResize)

    return () => {
      Dimensions.removeEventListener("change", handleResize)
    }
  }, [])

  let footer
  if (windowWidth < 850) {
    footer = styles.smallFooter
  } else if (windowWidth < 1100) {
    footer = styles.mediumFooter
  } else {
    footer = styles.largeFooter
  }

  return (
    <View style={footerStyle}>
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

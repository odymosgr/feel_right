import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Dimensions } from "react-native"
import styles from "./HeroSection.styles.js"
import SignupForm from "../SignupForm/SignupForm.js"

const HeroSection = () => {
  const [heroStyles, setHeroStyles] = useState({
    heroSection: styles.largeHeroSection,
    heroWrapper: styles.largeHeroWrapper,
    heroLeft: styles.largeHeroLeft,
    heroLeftHeader: styles.largeHeroLeftHeader,
    heroLeftText: styles.largeHeroLeftText
  })

  useEffect(() => {
    const handleResize = () => {
      const width = Dimensions.get("window").width
      let newStyles = { ...heroStyles }

      if (width < 850) {
        newStyles = {
          heroSection: styles.smallHeroSection,
          heroWrapper: styles.smallHeroWrapper,
          heroLeft: styles.smallHeroLeft,
          heroLeftHeader: styles.smallHeroLeftHeader,
          heroLeftText: styles.smallHeroLeftText
        }
      } else if (width < 1100) {
        newStyles = {
          heroSection: styles.mediumHeroSection,
          heroWrapper: styles.mediumHeroWrapper,
          heroLeft: styles.mediumHeroLeft,
          heroLeftHeader: styles.mediumHeroLeftHeader,
          heroLeftText: styles.mediumHeroLeftText
        }
      } else {
        newStyles = {
          heroSection: styles.largeHeroSection,
          heroWrapper: styles.largeHeroWrapper,
          heroLeft: styles.largeHeroLeft,
          heroLeftHeader: styles.largeHeroLeftHeader,
          heroLeftText: styles.largeHeroLeftText
        }
      }

      setHeroStyles(newStyles)
    }

    Dimensions.addEventListener("change", handleResize)

    return () => {
      Dimensions.removeEventListener("change", handleResize)
    }
  }, [])

  return (
    <View style={heroStyles.heroSection}>
      <View style={heroStyles.heroWrapper}>
        <View style={heroStyles.heroLeft}>
          <Text style={heroStyles.heroLeftHeader}>
            Track & Predict
            {"\n"}
            Your <Text style={{ textDecorationLine: "underline" }}>Comfort Levels</Text>
          </Text>
          <Text style={heroStyles.heroLeftText}>
            How <Text style={{ fontWeight: "bold" }}>cold</Text> or <Text style={{ fontWeight: "bold" }}>warm</Text> you feel when going out? {"\n"}
            {"\n"}
            How <Text style={{ fontWeight: "bold" }}>heavy</Text> your clothing should be? {"\n"}
            {"\n"}
            Track your comfort and we will <Text style={{ fontWeight: "bold" }}>predict</Text> it!
          </Text>
        </View>
        <SignupForm />
      </View>
    </View>
  )
}

export default HeroSection

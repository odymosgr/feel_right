import { Text, View } from "react-native"

import AppWrapper from "../components/AppWrapper/AppWrapper"
import Footer from "../components/Footer/Footer"
import HeroSection from "../components/HeroSection/HeroSection"

function HomeLoggedOut() {
  return (
    <AppWrapper style={{ display: "block" }}>
      <View>
        <Text>Home Logged Out</Text>
      </View>
      <HeroSection />
      <Footer />
    </AppWrapper>
  )
}

export default HomeLoggedOut

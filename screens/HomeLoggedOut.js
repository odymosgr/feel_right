import { Text, View } from "react-native"

import AppWrapper from "../components/AppWrapper/AppWrapper"
import Footer from "../components/Footer/Footer"

function HomeLoggedOut(props) {
  const windowWidth = { props }

  return (
    <AppWrapper style={{ display: "block" }}>
      <View>
        <Text>Home Logged Out</Text>
      </View>
      <Footer windowWidth={windowWidth} />
    </AppWrapper>
  )
}

export default HomeLoggedOut

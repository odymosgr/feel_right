import React from "react"
import { View } from "react-native"

const AppWrapper = ({ children, style }) => {
  return <View style={[{ flex: 1 }, style]}>{children}</View>
}

export default AppWrapper

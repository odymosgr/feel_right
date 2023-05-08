import React from "react"
import { StyleSheet, Text, View } from "react-native"
import HomeLoggedOut from "./screens/HomeLoggedOut"

export default function App() {
  return <HomeLoggedOut />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

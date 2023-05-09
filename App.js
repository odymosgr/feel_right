import React, { useState, useEffect } from "react"
import { Dimensions } from "react-native"
import HomeLoggedOut from "./screens/HomeLoggedOut"

export default function App() {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get("window").width)

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(Dimensions.get("window").width)
    }
    Dimensions.addEventListener("change", updateWidth)
    return () => Dimensions.removeEventListener("change", updateWidth)
  }, [])

  return <HomeLoggedOut windowWidth={windowWidth} />
}

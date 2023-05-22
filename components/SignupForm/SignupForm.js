import React, { useEffect, useState } from "react"
import { View, Text, Pressable, Dimensions } from "react-native"
import { Formik, Form, Field, ErrorMessage } from "formik"
import styles from "./SignupForm.styles.js"

const SignupForm = () => {
  const [signupStyles, setSignupStyles] = useState({
    rightSignup: styles.largeRightSignup,
    formSignup: styles.largeFormSignup,
    formHeader: styles.largeFormHeader,
    formHeaderText: styles.largeFormHeaderText,
    formWrapper: styles.largeFormWrapper
  })

  useEffect(() => {
    const handleResize = () => {
      const width = Dimensions.get("window").width
      let newStyles = { ...signupStyles }

      if (width < 850) {
        newStyles = {
          rightSignup: styles.smallRightSignup,
          formSignup: styles.smallFormSignup,
          formHeader: styles.smallFormHeader,
          formHeaderText: styles.smallFormHeaderText,
          formWrapper: styles.smallFormWrapper
        }
      } else if (width < 1100) {
        newStyles = {
          rightSignup: styles.mediumRightSignup,
          formSignup: styles.mediumFormSignup,
          formHeader: styles.mediumFormHeader,
          formHeaderText: styles.mediumFormHeaderText,
          formWrapper: styles.mediumFormWrapper
        }
      } else {
        newStyles = {
          rightSignup: styles.largeRightSignup,
          formSignup: styles.largeFormSignup,
          formHeader: styles.largeFormHeader,
          formHeaderText: styles.largeFormHeaderText,
          formWrapper: styles.largeFormWrapper
        }
      }

      setSignupStyles(newStyles)
    }

    Dimensions.addEventListener("change", handleResize)

    return () => {
      Dimensions.removeEventListener("change", handleResize)
    }
  }, [])

  return (
    <View style={signupStyles.rightSignup}>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }}
        validate={values => {
          const errors = {}
          if (!values.username) {
            errors.username = "Required"
          }
          if (!values.email) {
            errors.email = "Required"
          }
          if (!values.password) {
            errors.password = "Required"
          }
          return errors
        }}
      >
        {({ isSubmitting }) => (
          <Form style={signupStyles.formSignup}>
            <View style={signupStyles.formHeader}>
              <Text style={signupStyles.formHeaderText}>Sign Up</Text>
            </View>
            <View style={signupStyles.formWrapper} className="form-wrapper">
              <div className="form-group">
                <label htmlFor="username">
                  <small>Username</small>
                </label>
                <Field id="username" name="username" type="text" placeholder="Pick a username" autoComplete="off" />
                <ErrorMessage name="username" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <small>Email</small>
                </label>
                <Field id="email" name="email" type="text" placeholder="you@example.com" autoComplete="off" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <small>Password</small>
                </label>
                <Field id="password" name="password" type="password" placeholder="Create a password" />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              <TouchableOpacity style={[styles.greenBtn, greenBtnStyle]} onPress={() => console.log("Sign Up button pressed")} onMouseEnter={handleGreenBtnMouseEnter} onMouseLeave={handleGreenBtnMouseLeave} disabled={isSubmitting}>
                <Text style={styles.greenBtnText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </Form>
        )}
      </Formik>
    </View>
  )
}

export default SignupForm

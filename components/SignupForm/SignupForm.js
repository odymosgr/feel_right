import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

const SignupForm = () => (
  <div className="right sign-up">
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
        <Form>
          <div className="form-header">
            <h3 className="sign-up--header">Sign Up</h3>
          </div>
          <div className="form-wrapper">
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
            <button className="btn green" type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

export default SignupForm

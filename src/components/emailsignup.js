import React, { useState } from "react"

const EmailSignUp = () => {
  const [form, setForm] = useState({
    recipient: "",
    successfullySent: false,
    disabled: false
  })

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget

    if (name === "userEmail") {
      setForm({ ...form, recipient: value })
    }
  }

  const validateInputs = () => {
    if (form.recipient === "") {
      return false
    }
    return true
  }

  const submitForm = event => {
    event.preventDefault()

    if (validateInputs()) {
      sendEmail()
    }
  }

  const sendEmail = () => {
    // send form contents to the backend
    fetch("http://localhost:5000/sendemail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form })
    })

    // notify the user of successful send and disable button to protect against spam
    setForm({ ...form, successfullySent: true, disabled: true })
    setTimeout(() => {
      setForm({ ...form, successfullySent: false, disabled: false })
    }, 5000)
  }

  return (
    <div className="flex flex-col">
      <p className="mb-2 text-3xl text-center text-white"> Subscribe to our newsletter </p>
      <div className="flex flex-row">
        <div className="hidden md:block md:w-1/6"> </div>
        <form className="w-full px-4 font-mono md:w-4/6 " onSubmit={event => submitForm(event)}>
          <input
            required
            type="email"
            placeholder="parent@gmail.com"
            className="w-3/4 px-3 py-2 leading-tight border shadow appearance-none rounded-l-md focus:appearance-none "
            name="userEmail"
            id="userEmail"
            value={form.recipient}
            onChange={event => onChangeHandler(event)}
          />

          <input
            disabled={form.disabled}
            value="Subscribe"
            type="submit"
            className="w-1/4 py-2 text-center text-white transition duration-100 ease-in-out rounded-r-md bg-base hover:bg-green-700 focus:shadow-outline-indigo"
          ></input>
          {form.successfullySent && (
            <p class="text-white pt-2 text-xs italic">&#10003; Please check your inbox for verification</p>
          )}
        </form>
        <div className="hidden md:w-1/6 md:block"> </div>
      </div>
    </div>
  )
}

EmailSignUp.propTypes = {}

EmailSignUp.defaultProps = {}

export default EmailSignUp

import React from "react"
import CollectorButton from './CollectorButton'
import SubmitForm from './SubmitForm'

export default function UserInterface () {
  const formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={formContainerStyle}>
      <h2>We carry the latest and greatest editions of your favorite comic books!</h2>
      <h2>Are you a collector?</h2>
      <CollectorButton />

      <h2>Have a special request? Click here to fill out our form</h2>
      <SubmitForm />
    </div>
  )
}
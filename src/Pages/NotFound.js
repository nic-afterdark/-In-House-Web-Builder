import React from 'react'
import Alert from "react-bootstrap/Alert";

const NotFound = () => {
  return (
    <div>
        <Alert variant="danger">
        You are on unknown page.{" "}
        <Alert.Link href="/">Go Back</Alert.Link>. Give it a click if
        you like.
      </Alert>
    </div>
  )
}

export default NotFound

import React, { useState } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "./firebase";
import {doc, setDoc} from "firebase/firestore";

//import ReactDOM from "react-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email)

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {await register(email, password)
      .then((responce) => console.log(responce))
    .catch((error) => console.log(error))}
    catch {console.log(123)}   
    
  }
  const register = (email, password) => {
    return createUserWithEmailAndPassword (auth, email, password)
    
  
  }
  return (
    <div className="Login">
      <h3>Welcome to Holiday Home!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

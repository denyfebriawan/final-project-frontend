import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { register } from "../redux/actions/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = () => {
    dispatch(register(name, email, phone, password))
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setSuccess(false);
      });
  };

  return (
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder"></div>
        {!success && (
          <Form>
            <h2 className="text-center">
              <strong>Sign In</strong>
            </h2>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Enter your name" name="name" value={name} onChange={onChangeName} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" name="password" value={email} onChange={onChangeEmail} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChangePassword} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Control type="text" placeholder="Phone number" name="phone" value={phone} onChange={onChangePhone} required />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleRegister}>
              Submit
            </Button>
            <hr />
            <p>Already have an account?</p>
            <p>
              <Link to={"/login"}>Sign in here!</Link>
            </p>
          </Form>
        )}

        {message && (
          <div className="form-group mt-3">
            <div className={`alert alert-${success ? "success" : "danger"}`} role="alert">
              {message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;

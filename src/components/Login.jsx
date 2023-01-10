import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import { login } from "../redux/actions/auth";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = () => {
    setLoading(true);

    dispatch(login(email, password))
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder"></div>
        <Form>
          <h2 className="text-center">
            <strong>Sign In</strong>
          </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={onChangeEmail} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChangePassword} required />
          </Form.Group>
          {message && (
            <div className="form-group mt-3">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <Button onClick={handleLogin} variant="primary" type="submit" disabled={loading}>
            {loading && <span className="spinner-border spinner-border-sm" />}
            <span>Log In</span>
          </Button>
          <hr />
          <p>Dont have an account?</p>
          <p>
            <Link to={"/register"}>Sign Up here!</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;

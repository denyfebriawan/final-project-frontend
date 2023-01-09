import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    // <div className="auth-style">
    //   <div className="form-container">
    //     <div className="image-holder"></div>
    //     <Form>
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label>Email address</Form.Label>
    //         <Form.Control type="email" placeholder="Enter email" />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicPassword">
    //         <Form.Label>Password</Form.Label>
    //         <Form.Control type="password" placeholder="Password" />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //         <Form.Check type="checkbox" label="Check me out" />
    //       </Form.Group>
    //
    //     </Form>
    //   </div>
    // </div>
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder"></div>
        <Form>
          <h2 class="text-center">
            <strong>Sign In</strong>
          </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <hr />
          <p>Dont have an account ?</p>
        </Form>
      </div>
    </div>
  );
};

export default Login;

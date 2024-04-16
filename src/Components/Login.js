import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function Login(props) {
  const msgClass = ["text-center"];
  if (props.type) {
    msgClass.push("text-success");
  } else {
    msgClass.push("text-danger");
  }

  return (
    <div className="container mt-5 w-25 ">
      <div className="card">
        <div className="card-body shadow p-4">
          <strong className={msgClass.join(" ")}>{props.message}</strong>
          <form onSubmit={props.login}>
            <div className="d-flex justify-content-center">
              <h3>Login </h3>
            </div>

            <div className="p-2">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>

            <div className="p-2">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>

            <div className="p-2 mb-2">
              <button type="submit" className="btn btn-primary form-control">
                Login
              </button>
            </div>
            <p>
              If no Account ?{" "}
              <a href="#" onClick={props.switch}>
                Creater Account
              </a>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

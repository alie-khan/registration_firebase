import React from "react";
import {Link} from "react-router-dom"

function Register(props) {
  const msgClass = ["text-center"];
  if (props.type) {
    msgClass.push("text-success");
  } else {
    msgClass.push("text-danger");
  }

  return (
    <div className="container mt-5 w-25 p-3 ">
      <div className="bg-white  card-body shadow p-3">
        <strong className={msgClass.join(" ")}>{props.message}</strong>
        <form onSubmit={props.register}>
          <div className="d-flex justify-content-center">
            <h3> Create An Account </h3>
          </div>
          <Link className="btn btn-primary form-control" onclick={props.google} >Via Google</Link>
           <p className="text-center mt-2" >. . . . . . . . Or . . . . . . . . .</p>
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

          <div className="p-2">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>

          <div className="p-2">
            <button type="submit" className="btn btn-primary form-control mb-3">
              Register
            </button>
            <p>
              If Already Register ?{" "}
              <a href="" onClick={props.switch}>
                Login Page
              </a>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

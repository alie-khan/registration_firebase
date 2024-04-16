import { Component } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3w1CmaBmdbI1smGnNYGMaEeVt4q44uyA",
  authDomain: "registration-d3b6a.firebaseapp.com",
  projectId: "registration-d3b6a",
  storageBucket: "registration-d3b6a.appspot.com",
  messagingSenderId: "996058446084",
  appId: "1:996058446084:web:dc976f878fcc898d6f7851",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      message: "",
      type: 1,
    };
  }

  pageHandler = (event) => {
    event.preventDefault();
    this.setState({ page: !this.state.page, message: null });
  };

  registrationHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password !== confirmPassword) {
      this.setState({ message: "Password Does not match!", type: 0 });
      return;
    }

    const authPromise = createUserWithEmailAndPassword(auth, email, password);
    authPromise
      .then((data) => {
        sendEmailVerification(auth.currentUser)
      
        this.setState({ message: "Successfully Register", type: 1 }, () => {
          event.target.email.value = "";
          event.target.password.value = "";
          event.target.confirmPassword.value = "";
        });
      })
      .catch((error) => {
        this.setState({ message: error.message, type: 0 });
      });
  };

  loginHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const authPromise = signInWithEmailAndPassword(auth, email, password);
    authPromise
      .then((data) => {
        if(data.user.emailVerified === true){
          this.setState({ message: "Login Successsfully ", type: 1 });
        }
        else{
          this.setState({message:"Your Email Not Verified Yet!", type:0 })
        }
      })
      .catch((error) => {
        this.setState({ message: error.message, type: 0 });
      });
  };

  googleHandler =(event)=>{
    event.preventDefault()
alert("Roza ")
  }
  render() {
    return (
      <div>
        {this.state.page ? (
          <Login
            switch={this.pageHandler}
            login={this.loginHandler}
            type={this.state.type}
            message={this.state.message}
          />
        ) : (
          <Register
            switch={this.pageHandler}
            register={this.registrationHandler}
google ={this.googleHandler}    
            message={this.state.message}
            type={this.state.type}
          />
        )}
      </div>
    );
  }
}
export default App;

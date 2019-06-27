// dependencies
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Form, Input, Button } from "../styles/Styles";

// components

// styles
import "./Login.scss";

// actions
import { userLogin } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    this.props.userLogin(this.state.credentials);
    // .then(() => {
    //   this.props.history.push('/profile');
    // });
  };

  render() {
    const { isLoggedIn, error } = this.props;
    if (isLoggedIn) {
      this.props.history.push("/");
    }

    if (error) {
      toast.error(error);
    }

    return (
      <div className="mt-5 mb-5">
        <Form
          className="text-center border border-light p-5 w-50 text-center m-auto mb-5"
          onSubmit={this.login}
        >
          <p className="h4 mb-4">Sign in</p>
          <Input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            className="form-control mb-4"
            placeholder="Enter Username"
          />

          <Input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            className="form-control mb-4"
            placeholder="Enter Password"
          />

          <div className="d-flex justify-content-around" />

          <Button className="btn  btn-block my-4" type="submit">
            Sign in
          </Button>

          <p>
            Not a member?
            <Link to="/register" className="purple-text">
              Register
            </Link>
          </p>

          <p>or sign in with:</p>
          <a href="##" className="purple-text mx-2">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="##" className="purple-text mx-2">
            <i className="fab fa-twitter" />
          </a>
          <a href="##" className="purple-text mx-2">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="##" className="purple-text mx-2">
            <i className="fab fa-github" />
          </a>
        </Form>
      </div>
      // <div className="login-container">
      //   <div className="login-form-container">
      //     <button
      //       type="button"
      //       className="btn btn-primary"
      //       data-toggle="modal"
      //       data-target="#basicExampleModal"
      //     >
      //       Move This to the Main Login in Nav
      //     </button>

      //     <div
      //       className="modal fade"
      //       id="basicExampleModal"
      //       tabindex="-1"
      //       role="dialog"
      //       aria-labelledby="exampleModalLabel"
      //       aria-hidden="true"
      //     >
      //       <div className="modal-dialog" role="document">
      //         <div className="modal-content">
      //           <div className="modal-header">
      //             <h5 className="modal-title" id="exampleModalLabel">
      //               Log In
      //             </h5>
      //             <button
      //               type="button"
      //               className="close"
      //               data-dismiss="modal"
      //               aria-label="Close"
      //             >
      //               <span aria-hidden="true">&times;</span>
      //             </button>
      //           </div>
      //           <div className="modal-body">
      //             <div className="form-container">
      //               <form onSubmit={this.login}>
      //                 <input
      //                   type="text"
      //                   name="username"
      //                   value={this.state.credentials.username}
      //                   onChange={this.handleChange}
      //                   placeholder="username"
      //                 />
      //                 <input
      //                   type="password"
      //                   name="password"
      //                   value={this.state.credentials.password}
      //                   onChange={this.handleChange}
      //                   placeholder="password"
      //                 />
      //                 <button>Login</button>
      //               </form>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );

    // ) : (
    //   <Redirect to="/profile" />
    // );
  }
}
const mapStateToProps = state => ({
  error: state.error,
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  { userLogin }
)(Login);

// import React from "react";
// import { connect } from "react-redux";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";

// import { errorOption } from "../../utils/utils";
// import { loginUser } from "../../actions/auth";
// import { Button, Input, Form } from "../../styles/Styles";

// function Login(props) {
//   const username = React.createRef();
//   const password = React.createRef();
//   const { error } = props;
//   const { isSignedIn } = props.auth;

//   const handleLogin = e => {
//     e.preventDefault();

//     const payload = {
//       username: username.current.value,
//       password: password.current.value
//     };

//     props.loginUser(payload);
//   };

//   if (isSignedIn) {
//     props.history.push("/");
//   }

//   if (error) {
//     toast.error(error, errorOption());
//   }

//   return (
//     <div className="mt-5">
//       <Form
//         className="text-center border border-light p-5 w-50 text-center m-auto"
//         onSubmit={this.login}
//       >
//         <p className="h4 mb-4">Sign in</p>
//         <Input
//           type="text"
// name="username"
// value={this.state.credentials.username}
// onChange={this.handleChange}
// placeholder="Enter Username"
//         />

//         <Input
//           type="password"
// name="password"
// value={this.state.credentials.password}
// onChange={this.handleChange}
// placeholder="Enter Password"
//         />

//         <div className="d-flex justify-content-around" />

//         <Button className="btn  btn-block my-4" type="submit">
//           Sign in
//         </Button>

//         <p>
//           Not a member?
//           <Link to="/register" className="purple-text">
//             Register
//           </Link>
//         </p>

//         <p>or sign in with:</p>
//         <a href="##" className="purple-text mx-2">
//           <i className="fab fa-facebook-f" />
//         </a>
//         <a href="##" className="purple-text mx-2">
//           <i className="fab fa-twitter" />
//         </a>
//         <a href="##" className="purple-text mx-2">
//           <i className="fab fa-linkedin-in" />
//         </a>
//         <a href="##" className="purple-text mx-2">
//           <i className="fab fa-github" />
//         </a>
//       </Form>
//     </div>
//   );
// }

// const mapStateToProps = state => ({
//   auth: state.auth,
//   error: state.error.error
// });

// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(Login);

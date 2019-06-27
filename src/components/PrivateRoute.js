import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component,isLoggingIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggingIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn
})

export default connect(mapStateToProps)(PrivateRoute);

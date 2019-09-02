// Higher Order Component (hoc) - A component that renders another component
// reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";
import { checkPropTypes } from "prop-types";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You have to be Authenticated to see the content!</p>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="There are the details" />,
//   document.getElementById("app")
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="There are the details" />,
  document.getElementById("app")
);

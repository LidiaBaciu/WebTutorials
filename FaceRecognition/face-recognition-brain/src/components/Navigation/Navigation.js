import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
      >
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign out
        </p>
      </nav>
    );
  }
  return (
    <nav
      style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
    >
      <p
        onClick={() => onRouteChange("signin")}
        className="f3 link dim black underline pa3 pointer"
      >
        Log in
      </p>
      <p
        onClick={() => onRouteChange("register")}
        className="f3 link dim black underline pa3 pointer"
      >
        Register
      </p>
    </nav>
  );
};

export default Navigation;

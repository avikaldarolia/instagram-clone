import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export default function IsUserLoggedIn({
  user,
  loggedInPath,
  children,
  ...rest
}) {
  console.log("inside isSUerLoggedIn", user)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) {
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
                state: { from: location },
              }}
            />
          );
        }
      }}
    />
  );
}

IsUserLoggedIn.propTypes = {
  user: PropTypes.object,
  logged: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

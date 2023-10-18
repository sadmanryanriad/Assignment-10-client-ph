import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PrivateError from "./PrivateError";
import Spinner from "../Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Spinner></Spinner>;

  if (!user?.email) return <PrivateError></PrivateError>;

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;

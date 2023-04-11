import { useContext } from "react";
import AuthContext from "../context/AuthContext.js";

const useConfig = () => {
  const { token } = useContext(AuthContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
};
export default useConfig;

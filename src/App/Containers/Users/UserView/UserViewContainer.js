import React from "react";

import Spinner from "../../../Components/Spinner";
import useRequest from "../../../Hooks/useRequest";
import { getSingleUserUrl } from "../../../helpers/apiUrl";

const UserViewContainer = ({ match }) => {
  const [user, loading] = useRequest({
    url: getSingleUserUrl(match?.params?.userId),
    method: { method: "GET" },
  });

  if (loading) {
    return <Spinner />;
  }

  return <h1>{user.name}</h1>;
};

export default UserViewContainer;

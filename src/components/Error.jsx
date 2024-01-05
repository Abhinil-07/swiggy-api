import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h3>
        {err.data}: {err.status}
      </h3>
    </div>
  );
};

export default Error;

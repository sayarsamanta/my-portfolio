import React from "react";
import { useRouteError } from "react-router";
function Error() {
  const error = useRouteError();
  return (
    <div>
      <h3>{error?.data}</h3>
    </div>
  );
}

export default Error;

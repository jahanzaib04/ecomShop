import React, { Fragment } from "react";

const Error = () => {
  return (
    <Fragment>
      <div class="error">
        <div class="hd1">404</div>
        <div class="hd2">Not Found</div>
        <p>The resource requested could not be found on this server!</p>
      </div>
    </Fragment>
  );
};

export default Error;

import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to={`/`}>Go to home page</Link>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
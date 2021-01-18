import React from "react";

import { Button, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{
        margin: "40vw"
      }}
    >
      <Button variant="dark" disabled>
        <Spinner
          as="span"
          animation="border"
          size="lg"
          role="status"
          aria-hidden="true"
        />
        <span className="sr-only">Loading...</span>
      </Button>{" "}
      <Button variant="dark" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="lg"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
};

export default Loader;

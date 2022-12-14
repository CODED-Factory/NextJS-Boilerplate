import { NextPage, NextPageContext } from "next";
import React from "react";

interface Props {
  statusCode?: number;
}

const Error: NextPage<Props> = ({ statusCode }: Props) => {
  return (
    <p>
      {statusCode != null
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode =
    res != null ? res.statusCode : err != null ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

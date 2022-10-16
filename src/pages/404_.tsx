import React from "react";
import Head from "next/head";

const Custom404: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>404 - Page Not Found</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">404 - Page Not Found</h1>

        <p className="mt-3 text-2xl">This page could not be found.</p>
      </main>
    </div>
  );
};

export default Custom404;

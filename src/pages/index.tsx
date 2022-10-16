import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import React from "react";

const IndexPage: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-red-600 text-lg ">Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>{t("common:arabic")}</a>
        </Link>
      </p>
    </>
  );
};

export default IndexPage;

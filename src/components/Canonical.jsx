import React from "react";
import { Helmet } from "react-helmet-async";

const Canonical = () => {
  const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default Canonical;

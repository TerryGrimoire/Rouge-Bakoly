import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Tarifs({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Spectacles </title>
        <link rel="canonical" href={`${helmet.href}/Tarifs`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
    </div>
  );
}

export default Tarifs;

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Title = ({ match }) => {
  const [title, setTitle] = useState("Toy Cars Zone");

  console.log(match);
  useEffect(() => {
    if (match) {
      setTitle(`Toy Cars Zone | ${match}`);
    }
  }, [match]);
  return <Helmet title={title} />;
};

export default Title;

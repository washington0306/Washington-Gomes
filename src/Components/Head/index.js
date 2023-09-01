import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../../Assets/ls-logo-brand.png";

const Head = () => {
  return (
    <>
      <Helmet>
        <title>José Washington Full Stack</title>
        <meta
          name="description"
          content="Washington Gomes é um desenvolvedor Full-Stack que produz Landing Pages e Aplicações web. "
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, ReacJS, Node, Full-Stack Developer"
        />
        <meta name="author" content="Washington Gomes" />
        <meta
          property="og:title"
          content="Washington Gomes | Full-Stack Developer"
        />
        <meta
          name="og:description"
          content="Washington Gomes é um desenvolvedor Full-Stack que produz Landing Pages e Aplicações web. "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content=""
        />
        <link rel="icon" type="image/x-icon" href={favicon} />
      </Helmet>
    </>
  );
};

export default Head;

import React from "react";
import Helmet from "react-helmet";

export function Meta({
  title,
  description = "Seraphin is specialising in wireless sensor cloud monitoring systems based in Glasgow, UK.",
}) {
  return (
    <Helmet>
      <title>
        {title
          ? `${title} | Seraphin | Wireless sensor cloud monitoring system`
          : "Seraphin | Wireless sensor cloud monitoring system | Glasgow, Uk"}
      </title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        name="og:image"
        content="https://seraphin.cloud/images/social.jpg"
      />
      <meta name="og:description" content={description} />
      <meta name="og:url" content="https://seraphin.cloud/" />
      <meta name="og:site_name" content="Seraphin" />

      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Seraphin | Wireless sensor cloud monitoring system"
      />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image:src"
        content="https://seraphin.cloud/images/social.jpg"
      />
      <meta name="twitter:url" content="https://seraphin.cloud/" />
    </Helmet>
  );
}

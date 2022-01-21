import React from "react";
import { Link } from "gatsby";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function ImageTextRow({
  imageUrl,
  imageAlt,
  title,
  body,
  link,
  imageFirst,
}) {
  return (
    <div
      className={`row row--clickable ${imageFirst ? "row--image-first" : ""}`}
    >
      <div className="row__text">
        <h3>
          <Link to={link} className="text-link text-link--with-icon">
            {title} <ArrowForwardIosIcon />
          </Link>
        </h3>
        {body}
      </div>
      <img src={imageUrl} alt={imageAlt} width="250px" height="250px" />
    </div>
  );
}

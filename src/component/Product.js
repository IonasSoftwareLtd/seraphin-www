import CN from "classnames";
import { Link } from "gatsby";
import React from "react";

export function ProductList({ children, className }) {
  return <div className={CN("product-list", className)}>{children}</div>;
}

export function Product({ image, header, content, className, url }) {
  return (
    <div className={CN("product", className)}>
      <div className="product__inner">
        {image && <img className="product__image" src={image} alt={header} />}
        <div className="product__content">
          {header && <h1 className="product__header">{header}</h1>}
          {content && <div>{content}</div>}
        </div>
        {url && (
          <div className="product__cta">
            <Link to={url} className="btn">
              Check specification
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

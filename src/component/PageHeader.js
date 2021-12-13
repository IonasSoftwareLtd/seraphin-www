import { window } from "browser-monads-ts";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { bubble as Menu } from "react-burger-menu";
import { Panel } from "./Panel";

const menuItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "Products",
    link: "/products",
  },
];

export function PageHeader() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const setDimension = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenWidth]);

  return (
    <Panel className="panel--header">
      <div className="header">
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/">
              <img src="/logo.svg" alt="Seraphin logo" />
            </Link>
          </div>
          {screenWidth < 550 ? (
            <Menu
              width={300}
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
              right
            >
              {menuItems.map((item) => (
                <Link to={item.link} key={item.link}>
                  {item.label}
                </Link>
              ))}
            </Menu>
          ) : (
            <div className="header__nav">
              <nav className="nav">
                <ul>
                  {menuItems.map((item) => (
                    <li>
                      <Link to={item.link} key={item.label}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </Panel>
  );
}

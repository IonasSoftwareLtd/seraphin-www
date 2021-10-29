import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { Panel } from "./Panel";
import { bubble as Menu } from "react-burger-menu";
import { window } from "browser-monads-ts";

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
                <Link to={item.link}>{item.label}</Link>
              ))}
            </Menu>
          ) : (
            <div className="header__nav">
              <nav className="nav">
                <ul>
                  {menuItems.map((item) => (
                    <li>
                      <Link to={item.link}>{item.label}</Link>
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

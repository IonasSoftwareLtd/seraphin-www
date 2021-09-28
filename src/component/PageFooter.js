import React from "react"
import { Panel } from "./Panel"

export function PageFooter() {
  return (
    <Panel className="panel--no-spacing">
      <div className="footer">
        <div className="footer__inner">
          &copy; {new Date().getFullYear()} Seraphin
        </div>
      </div>
    </Panel>
  )
}

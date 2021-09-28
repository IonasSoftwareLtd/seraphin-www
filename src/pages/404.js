import React from "react"
import { Panel } from "../component/Panel"
import { PageHeader } from "../component/PageHeader"
import { PageFooter } from "../component/PageFooter"
import { Meta } from "../component/Meta"

export default function Home() {
  return (
    <div>
      <Meta />
      <PageHeader />

      <Panel className="panel--special" header="Page not found"></Panel>

      <PageFooter />
    </div>
  )
}

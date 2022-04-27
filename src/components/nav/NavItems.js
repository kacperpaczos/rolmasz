import React from "react"
import * as NavItemsStyles from "./NavItems.module.css"

export default function NavItems({ children }) {
  return (
    <ul className={NavItemsStyles.nav}>{children}</ul>
  )
}
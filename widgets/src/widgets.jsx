import React from "react"
import Clock from "./clock"
import Tabs from "./tabs"

const Widget = props => (<>
  <Clock/ > <Tabs tabs = {[{title:"I'm the man", content:"You better recognize"},
  {title:"Super Mario is my hero", content:"Filler content broh"}]}/></>)

export default Widget

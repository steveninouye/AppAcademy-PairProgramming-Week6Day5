import React from "react"

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {tabs:props.tabs,
    selectedIndex:0}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    let num = parseInt(e.target.id)
    this.setState({selectedIndex:num})
  }

  render() {
    const content = this.state.tabs[this.state.selectedIndex].content
    return (
      <div className = "tabs-folder tabs">


        {this.state.tabs.map((tab, idx) =>
        <div onClick = {this.handleClick} id = {idx}>{tab.title}</div>)
        }
          <div className = "tab-content">{content}</div>
      </div>
    )
  }
}

export default Tabs

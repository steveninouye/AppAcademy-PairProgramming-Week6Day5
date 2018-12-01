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
      <div className = "tabs-container tab-header">


        {this.state.tabs.map((tab, idx) =>
        <div key={(idx**2)/5}  className="tab-title" onClick = {this.handleClick} id = {idx}>{tab.title}</div>)
        }
          <div className = "tab-content">{content}</div>
      </div>
    )
  }
}

export default Tabs

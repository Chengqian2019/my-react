import React, { Component } from 'react'

export default class Input extends Component {

  add=(e)=>{
    if(e.keyCode === 13){
      this.props.changeList(e.target.value)

    }
  }
  render() {
    return (
      <div>
        <input onKeyUp={this.add}/>
      </div>
    )
  }
}

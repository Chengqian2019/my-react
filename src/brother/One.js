import React, { Component } from 'react'
import EventHub from '../eventHub.js'

export default class One extends Component {
  //1. 实现点击兄弟组件的按钮来改变我的颜色状态
  state={
    color:"red"
  }
  componentDidMount(){
    //2.状态只能由组件自身去修改，所以在组件挂载完之后监听一个事件。
    EventHub.on("changeColor",(color)=>{
      this.setState({
        // color:"yellow"
        color:color
      })
    })
  }
  render() {
    return (
      <div style={{color:this.state.color}}>
        ONE
      </div>
    )
  }
}

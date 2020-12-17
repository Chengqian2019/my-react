import React, { Component } from 'react'
import EventHub from '../eventHub.js'

export default class Two extends Component {
  chufaOne=()=>{
    /* 
      4.这个方法，通过EventHub.triggerx
      (“触发的兄弟组件的方法”，“传递的参数”|传递参数的方法)
      来触发兄弟组件的changeColor方法。
    */
    // EventHub.trigger("changeColor")
    // EventHub.trigger("changeColor","yellow")
    EventHub.trigger("changeColor",this.color16()) 
    //调用本身方法返回一个随即色并传给兄弟组件
  }
  color16(){//十六进制颜色随机
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    // var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
    var color = 'rgb('+`${r},${g},${b}`+')'

    return color;
  }
  render() {
    return (
      <div>
        {/* 3.给兄弟组件添加一个点击事件，点击后触发自身的一个方法 */}
        <button onClick={this.chufaOne}>Two</button>
      </div>
    )
  }
}

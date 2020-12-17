import React, { Component } from 'react'
import Input from './Input.js'
import List from './List.js'

export default class todos extends Component {
  state={
    list:[
      {id:1,username:"周杰伦"},
      {id:2,username:"王心凌"},
      {id:3,username:"王一博"}
    ]
  }
  
  /* 子组件给父组件传递数据 */
  //1.父组件定义一个方法来修改自身的状态
  changeList=(username)=>{
   this.setState({
    list:[
      ...this.state.list,
      {id:parseInt(Math.random()*1000),username}
    ]
   })
  }
  
  render() {
    return (
      <div>
        <Input changeList={this.changeList}/>
        {/* 父组件给子组件传递数据 */}
        <List list={this.state.list}/>
      </div>
    )
  }
}

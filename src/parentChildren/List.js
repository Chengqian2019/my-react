import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* <li>list </li> */}
          {
            this.props.list.map((item,index)=>{
              return <li key={index}>{item.username}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

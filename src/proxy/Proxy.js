import React, { Component } from 'react'
import axios from 'axios'

export default class Proxy extends Component {
  //在这个生命周期里进行axios异步数据请求：
  componentDidMount(){
    axios.get("https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=6AB6C6D0406511EB991975106D5BEF44E13C6122156C4135887E02F999F77EAF&optimus_risk_level=71&optimus_code=10").then(res=>{
      console.log(res);
    })
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

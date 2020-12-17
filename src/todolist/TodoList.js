import React, { Component } from 'react'
import axios from "axios"

export default class TodoList extends Component {
  state={
    list:[],
    username:'',
    age:0
  }
  /* 1.原始状态为空，在componentDidMount钩子里异步请求我们服务器数据：
    安装axious插件：yarn add axios -g
  */
 //json-server帮我们实现了跨域问题
  componentDidMount(){
    this.getData()
  }
    getData=()=>{
      axios.get("http://localhost:4000/list").then(res=>{
        // console.log(res.data) //拿到我们mock文件夹里的json数据
        /* 
          2.get请求后端数据：通过axios请求到我们自己搭建的服务器里的数据后，直接显示在我们页面。
        */
        this.setState({
          list:res.data
        })
      })
    }

  //可以通过input输入内容修改状态（之前我们是修改完直接渲染视图，
  //现在我们要通过修改后端数据来重新获取数据，从而让视图更改）

  /* 想写一次方法，同时管理更新多个标签 */
  getting=(e)=>{
    // console.log(e.target.id) //直接打印输入内容了的input的id值。
    this.setState({
      [e.target.id] : e.target.value,
    })
    // console.log(this.state.username)
  }

  //post添加后端数据：
  add=()=>{
    axios.post("http://localhost:4000/list",{
      username:this.state.username,
      age:this.state.age
    }).then(res=>{
      // console.log(res)//数据成功添加了
      //重新进行axios请求更新视图
      this.getData()
    })
  }

  //delate删除后端数据：
  delete=(id)=>{
    axios.delete("http://localhost:4000/list/"+id).then(res=>{
      this.getData()
    })
  }

  //patch 更新后端数据(首先得修改数据，让用户在弹出框修改!!!!!prompt("提示内容"，输入框默认值))
  update=({username,age,id})=>{
    let  value = prompt('请输入要修改的值',username+','+age)
    // console.log(value)//得到输入框修改后值
    //我们如果要修改最好以一个数组的形式上传
    let arr = value.split(",")
    // console.log(arr); // ["tom", "65"]
    //把我们修改后的数据提交给后端通过axios.patch()方法直接上传修改后数据
    axios.patch("http://localhost:4000/list/"+id,{
      username:arr[0],
      age:arr[1]
    }).then(res=>{
      this.getData()
    })
  }

  //模糊查询：是我们自己定义的方法，不会修改后台数据

  /* 
  模糊查询（本身json-server就有模糊查询的功能，直接在url：http://localhost:4000/list
  拼接上？和要查询的内容即可，也可以模糊查询..list?username_like=） 
  */
  blur=()=>{
    let keywords = prompt('请输入查询用户名的关键字')
    axios.get("http://localhost:4000/list?username_like="+keywords).then(res=>{
        // console.log(res.data) //拿到我们mock文件夹里的json数据
        /* 
          2.get请求后端数据：通过axios请求到我们自己搭建的服务器里的数据后，直接显示在我们页面。
        */
        this.setState({
          list:res.data
        })
      })
  }

  render (){
    //解构数据，并通过map方法把我们的数据渲染到页面
    let {list} = this.state
    return (
      <div>
        <p>请输入用户信息</p>
        用户名：<input id="username" type="text" value={this.state.username} onChange={this.getting}/>
        <br/>
        年龄：<input id="age" type="number" value={this.state.age} onChange={this.getting}/>
        <button onClick={this.add}>提交</button>
        <button onClick={this.blur}>模糊查询</button>
        {/* 如果要返回查询前的数据，直接重新请求就可以了。 */}
        <button onClick={()=>{this.getData()}}>返回</button>
        <ul>
          {
            list.map((item,index)=>{
              return <li key={index}>
                {item.username}=={item.age}
                {/* 注：删除的时候，要用把当前点击li的下标传过去，这时会导致函数自执行，通过。bind不加（）调用就可以点击才触发了 */}
                <button onClick={this.delete.bind(this,item.id)}>删除</button>
                <button onClick={this.update.bind(this,item)}>更新</button>
              </li>
              
            })
          }
        </ul>
      </div>
    )
  }
}
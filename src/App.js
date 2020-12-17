import Form from "./Form"
import Todos from './parentChildren/Todos.js'
import TodoList from './todolist/TodoList.js'
import Other from './brother/Other.js'
import Proxy from './proxy/Proxy.js'
// import React from 'react';
//class App extends React.Component{  //写法一
  
// import React from 'react';
// const Component = React.Component  //写法二
// class App extends Component{

import React,{Component} from 'react'; //写法三(解构赋值的方式，直接从react里封装好的对象里结构出来Component)
// class App extends Component{

// import React,{Component as MyComponent} from 'react'; //写法四(通过as给组件重命名)
// class App extends MyComponent{

//   render(){
//     return(
//       <div>我是app组件。。。</div>
//     )
//   }
// }
// export default App;

//定义组件和暴露组件还可以简写为：
export default class App extends Component{
  render(){
    return(
      <div>
        <Form/>
        <hr/>
        <Todos/>
        <hr/>
        <Other/>
        <hr/>
        <TodoList/>
        <hr/>
        <Proxy/>  
      </div>

    )
  }
}
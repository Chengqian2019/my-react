import React, { Component } from 'react'
import One from './One.js'
import Two from './Two.js'
export default class Other extends Component {
  render() {
    return (
      <div>
        <One/>
        <Two/>
      </div>
    )
  }
}

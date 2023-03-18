import React, { Component, createRef } from 'react'

export default class Userefs extends Component {
    constructor()
    {
        super()
        this.state={name:"HelloWorld"}
        this.h1Ref=createRef()
    }
    componentDidMount()
    {
        let h1=document.querySelector('h1')
        console.log(h1,"DOM Way");
        console.log(this.h1Ref.current,'React Way');
    }
  render() {
    return (
        <>
        <h1 ref={this.h1Ref}>{this.state.name}</h1>
        </>  
    )
  }
}

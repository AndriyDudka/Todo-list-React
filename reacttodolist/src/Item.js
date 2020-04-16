import React, { Component } from 'react'

class Item extends Component {
  initialState = {
    name: '',
    isDone: ''
  }

  state = this.initialState

  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
      isDone: false
    })
  }

  submitForm = () => {
      if (!this.state.name){
          alert("Input some item please");
          return;
      }

    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render(){
      const {name} = this.state;

      return (
          <form class="input-item">
              <input placeholder="Item name" type="text" name="name" value={name} onChange={this.handleChange}/>
              <input type="button" value="Add" onClick={this.submitForm} />
              <hr></hr>
          </form>
          
      );
  }
}

export default Item;
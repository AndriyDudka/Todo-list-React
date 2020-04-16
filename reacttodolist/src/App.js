import React, {Component} from 'react';
import Item from './Item'
import ListItems from './ListItems'

class App extends Component {
    state = {
        items: []
    }

    render(){
        const {items} = this.state
        return(
            <div className="container">
              <Item handleSubmit={this.handleSubmit}/>
              <ListItems ItemsData={items} removeItem={this.removeItem} doneItem={this.doneItem} cancelItem={this.cancelItem}/>
            </div>
      )
    }

    handleSubmit = character => {
        this.setState({ 
          items: [...this.state.items, character] 
            }
        )
      }

    removeItem = index => {
        const {items} = this.state
  
        this.setState({
          items: items.filter((character, i) =>{
                return i !== index
            })
        })
    }

    doneItem = index => {
      const {items} = this.state;

      this.setState({
        items: items.map(function(item, i){
          if (i === index){
            item.isDone = true;
          }

          return item;
        })
      })
    }

    cancelItem = index => {
      const {items} = this.state;

      this.setState({
        items: items.map(function(item, i){
          if (i === index){
            item.isDone = false;
          }
          
          return item;
        })
      })
    }
  }

  export default App

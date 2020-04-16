import React from 'react'

const ListItems = props => {
      const { ItemsData, removeItem, doneItem, cancelItem } = props;
      return (
        <div>
          <Header />
          <Items ItemsData={ItemsData} removeItem={removeItem} doneItem={doneItem} cancelItem={cancelItem}/>
        </div>
      )
  }

const Header = () => {
    return (
        <div class="header">Items</div>
    )
}

const Items = props => {
    const rows = props.ItemsData.map((row, index) => {
      return (
        <div class="item" key={index}>
            <div class={row.isDone ? "strike-item" : "item-name"}>{row.name}</div>
            <button class="remove-btn" onClick={() => props.removeItem(index)}>Remove</button>
            <button class="done-btn" onClick={() => props.doneItem(index)}>Done</button>
            <button class="cancel-btn" onClick={() => props.cancelItem(index)}>Cancel</button>
        </div>
      )
    })
  
    return <div>{rows}</div>
  }

export default ListItems
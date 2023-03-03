import React from 'react'
import Item from './Item'
import "./Items.css"

const Items: React.FC = (props) => {

  return (
    <div className="items">
      {props.items.map((item) => (
        <Item
          name={item.name}
          species={item.sepecies}
          location={item.location.name}
          origin={item.origin.name}
          image={item.image}
        />))
      }
    </div>
  )
}

export default Items
import React from 'react'
import { Character } from '../../types'
import Card from './Card'
import "./Cards.css"

interface CardsProps {
  items: Character[]
}

const Cards: React.FC<CardsProps> = (props) => {
  return (
    <div className="cards">
      {props.items.map((item) => (
        <Card
          key={item.id}
          {...item}
        />))
      }
    </div>
  )
}

export default Cards
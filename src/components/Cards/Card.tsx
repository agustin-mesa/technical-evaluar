import React from 'react'
import { Character } from '../../types'

const Card: React.FC<Character> = ({
  name,
  species,
  location,
  origin,
  image
}) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-info">
        <div className="card-info__header">
          <h4>{name}</h4>
          <span><b>●</b> {species}</span>
        </div>
        <div className="card-info__body">
          <div className="location">
            <span>Last known location:</span>
            <span>{location.name}</span>
          </div>
          <div className="first-seen">
            <span>First seen in:</span>
            <span>{origin.name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
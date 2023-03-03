import React from 'react'

interface ItemProps {
  name: string;
  species: string;
  image: string,
  location: string;
  origin: string
}

const Item: React.FC<ItemProps> = ({
  name,
  species,
  location,
  origin,
  image
}) => {
  return (
    <div className="item">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="item-info">
        <div className="info-header">
          <h4>{name}</h4>
          <span>- Unknown - {species}</span>
        </div>
        <div className="info-body">
          <div className="location">
            <span>Last known location:</span>
            <span>{location}</span>
          </div>
          <div className="first-seen">
            <span>First seen in:</span>
            <span>{origin}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
import React from 'react'

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part) => (
        <div key={part.name}>
          <p>{part.name} </p>
          <span>{part.exercises}</span>
        </div>
        
      ))}
    </div>
  )
}

export default Content
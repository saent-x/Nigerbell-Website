import React from "react"
import "../styles/partners.css"

export default ({partners}) => {
  return (
    <div className="partners-container">
      <h1 className="partners-header">Partners</h1>
      <div className="partners-logos">
        {partners.map((e, key) => (
          <img key={key} style={{ margin: "10px" }} width="150" src={e} />
        ))}
      </div>
    </div>
  )
}
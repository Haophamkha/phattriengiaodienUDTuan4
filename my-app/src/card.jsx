import React from "react";
const card_style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem'
    }
export default function Card({ items }) {
  return (
    <div style={card_style}>
      {
        items.map((item, index) => (
          <div key={index}>
            <img src={item.url} alt="" />
            <span>{item.name}</span>
            <button>{item.description}</button>
          </div>
        ))
      }
    </div>
  );
}

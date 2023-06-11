import React from 'react'

export default function Spinner(props) {
  return (
    <div className={"spinner-border text-" + props.variant + " "} role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
  )
}

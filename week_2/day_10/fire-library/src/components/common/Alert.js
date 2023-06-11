import React from 'react'

export default function Alert({
    show, 
    children, 
    variant, 
}) {
  return (
    <>
    {show ? (
        <div className={"alert alert-dismissible fade show alert-" + variant + " "} role="alert">
            <div>{children}</div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    ) : (
        <></>
    )}
    </>
  )
}

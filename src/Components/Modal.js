import React from 'react'


const Modal = (props) => {

    React.useEffect(function(){
        setTimeout(function(){
          props.closeModal()
        }, 3000)
      })
      
  return (
    <div>
        <h2>{props.modalContent}</h2>
    </div>
  )
}

export default Modal
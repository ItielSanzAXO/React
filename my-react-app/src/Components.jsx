import React, { useState } from 'react'
//UseState es un hook que permite actualizar el estado de un componente
export default function Components() {

    //Creamos una propiedad de estado
    const [text, setText] = useState()
    //Creamos un boton
    const [button1, setUpdate] = useState()
    //enf crea una funcion que permite actualizar el estado

    const textOnChange = (event) => {
        setText(event.target.value)
    }
    const buttonClick = () => {
      setUpdate(text)
    }
    
  return (
    <div>
        <input type="text" value={text} onChange={textOnChange}/>
        <button OnClick={buttonClick}>Actualizar</button>
        <p>Texto input: {text}</p>
        <p>Texto actualizado: {button1}</p>
    </div>
  )
}

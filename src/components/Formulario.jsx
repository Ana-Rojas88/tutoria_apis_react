import { useEffect, useRef } from "react";

const Formulario = () => {
const inputRef = useRef()

useEffect(()=>{
    inputRef.current.focus()
},[])

  return (
    <div className="container_formulario">
            <h2 >Ejemplo useRef - Focus automático</h2>
      <form>
      <h3> Formulario</h3>
      <input  type="text" placeholder="Nombre" ref={inputRef}/>
      <input type="email" placeholder="Correo electrónico" />
      <input type="text" placeholder="Teléfono" /> 
      </form>
    </div>
  );
};

export default Formulario;

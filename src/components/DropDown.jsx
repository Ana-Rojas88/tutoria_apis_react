import { useRef, useState } from 'react'

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropRef = useRef(null)



    const toggleDropDown = () => {
        if (!isOpen) {
            dropRef.current.style.display = 'block'
            dropRef.current.style.color= 'blue'
            setIsOpen(!isOpen)
        } else {
            dropRef.current.style.display = 'none'
            setIsOpen(!isOpen)
        }
    }

  return (
    <div className='container_drop'>
        <h2>DropDown</h2>
    <button onClick={toggleDropDown} style={{padding:"1rem", fontSize:"1rem", backgroundColor:"#e8c39e", border:"none",
        color: isOpen ? 'red' : 'green'
    }}>
        {isOpen ? "Cerrar Ventana" : "Abrir Ventana"}</button>
    <div ref={dropRef}>
        {
            isOpen && (
                <div style={{
                padding:"1rem", background:"#2196f3"
                }}>
                   <h1>Hola G111</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magnam quas odit minima, facere placeat nisi beatae? Enim sapiente veniam assumenda delectus voluptate iure, rerum quibusdam aspernatur sed, quos deleniti?</p>
                </div>
            )
        }

    </div>
</div>
  )
}

export default DropDown
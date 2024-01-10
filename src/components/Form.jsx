import React, { useContext, useState } from 'react'
import ContactContext from '../context/ContactContext'

const Form = () => {
  const { isDark, dispatch } = useContext(ContactContext)
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [relation, setRelation] = useState("Others")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (number.length === 10) {
      dispatch({
        type: "SAVE",
        payload: {
          id: crypto.randomUUID(),
          name,
          number,
          relation
        }
      })
      setName("")
      setNumber("")
      setRelation("Others")

    } else {
      alert("enter valid number")
    }


  }
  return (

    <div className={isDark ? 'container bg-dark' : 'container bg-light'}>
      <form className='my-3 ' onSubmit={(e) => handleSubmit(e)}>
        <input type="text" className='form-control my-3' placeholder='Enter Name...' onChange={(e) => setName(e.target.value)} value={name} required />
        <input type="number" className='form-control my-3' placeholder='Enter Number...' onChange={(e) => setNumber(e.target.value)} value={number} required />
        <select className='form-control my-3' onChange={(e) => setRelation(e.target.value)} value={relation} >
          <option value=""></option>
          <option value="family">Family</option>
          <option value="friends">Friends</option>
          <option value="bussiness">Bussiness</option>
          <option value="others">Others</option>
        </select>
        <button className='btn btn-primary w-100 '>SAVE</button>
      </form>

    </div >

  )
}

export default Form
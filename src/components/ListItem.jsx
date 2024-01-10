import React, { useContext } from 'react'
import ContactContext from '../context/ContactContext'

const ListItem = ({ contact }) => {
  const { dispatch, isDark } = useContext(ContactContext)
  const deleteContact = (id) => {
    dispatch({
      type: "DELETE",
      payload: id
    })


  }

  return (
    <>

      <li className={isDark ? 'list-group-item bg-dark text-light my-2' : 'list-group-item bg-light text-dark my-2'}>
        <h3>{contact.name}</h3>
        <h4>{contact.number}</h4>
        <span className="badge rounded-pill bg-primary">{contact.relation}</span>
        <span className='float-end my-3'>
          <button className='btn btn-success mx-2' >Call Now</button>
          <button className='btn btn-danger' onClick={() => deleteContact(contact.id)}>Delete</button>
        </span>
      </li>

    </>
  )
}

export default ListItem
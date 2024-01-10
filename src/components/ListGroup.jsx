import React from 'react'
import ListItem from './ListItem'
import { useContext } from 'react'
import ContactContext from '../context/ContactContext'

const ListGroup = () => {
  const { contacts } = useContext(ContactContext)
  return (
    <div className='container bg-light'>
      <ul className='list-group my-4'>
        {contacts.map(contact => <ListItem key={contact.id} contact={contact} />)}
      </ul>
    </div>
  )
}

export default ListGroup
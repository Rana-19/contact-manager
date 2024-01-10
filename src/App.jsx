import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import ContactContext, { ContactProvider } from './context/ContactContext'


const App = () => {

  return (

    <ContactProvider>

      <div>
        <NavBar />
        {/* form */}
        <Form />
        {/* list */}
        <ListGroup />
      </div>



    </ContactProvider>

  )
}

export default App
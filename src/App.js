import React, { useState } from 'react'
import './styles/App.css'
import BoostLink from './BoostLink'
import Footer from './Footer'
import Heading from './Heading'
import InputUrl from './InputUrl'
import MiddleInformation from './MiddleInformation'

const App = () => {

  
  const [count, setCount] = useState(0);
  const [dataLink, setDataLink] = useState([]);
  return (
    <>
      <Heading />
      <InputUrl 
       
        count={count}
        setCount={setCount}
        dataLink={dataLink}
        setDataLink={setDataLink} 

      />
      <MiddleInformation 
        dataLink={dataLink} 
        setDataLink={setDataLink}
      />
      <BoostLink />
      <Footer />
    </>
  )
}

export default App


import './App.css'
import Routes from './routes/Routes';
import { Globalstore } from './secstore/Store_global';
import { useEffect } from 'react';

function App() {
  const {ThunkCarshop}=Globalstore()
  
  useEffect(() => {
    ThunkCarshop()
  })
  
  return (
    <>
      <Routes />
    </>
  )
}

export default App

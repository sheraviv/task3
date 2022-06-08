import { Route, Routes, Link } from 'react-router-dom'
import { useState, useMemo } from 'react'

import { Footer } from './ui-components/Footer'
import { Header } from './ui-components/Header'
import { Contact } from './pages/Contact'
import { Ref_Form } from './pages/Ref_Form'
import { MeetingsTable, } from './pages/Ref_Table'

import { UserContext } from "./UserContext";

function App() {
  const [team, setTeam] = useState<any>(2)

  const providerValue = useMemo(() => ({ team, setTeam }), [team, setTeam])

  return <>
    <Header />

    <main className="container content">

      <UserContext.Provider value={providerValue}>

        <Routes >
          <Route path="/contact" element={<Contact />} />
          <Route path="/ref_form" element={<MeetingsTable/>} />
         
        </Routes>

      </UserContext.Provider>
    </main>

    <Footer />
  </>;

}

export default App;

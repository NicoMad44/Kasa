import { Routes, Route } from 'react-router-dom'

import { Home } from '../../pages/Home/Index'
import { Accomodation } from '../../pages/Accomodation/Index'
import { APropos } from '../../pages/APropos/Index'
import { Error } from '../../pages/Error/Index'

export function RouterNM(){
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logements/:accomodationId" element = {<Accomodation />} />
          <Route path="/APropos" element={<APropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
    )

}
        
        
        
        
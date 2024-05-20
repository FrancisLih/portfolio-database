import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "./store/StoreContext"

import Works from "./components/pages/developer/dashboard/works/Works";
import Certificate from "./components/pages/developer/dashboard/certificate/Certificate";
import Home from "./components/pages/developer/ui/Home";
import Badges from "./components/pages/developer/ui/showcase/Badges";
import Badge from "./components/pages/developer/dashboard/badge/Badge";

function App() {
  const queryClient = new QueryClient;
  return (
    <>
    <QueryClientProvider client={queryClient
    }>
      <StoreProvider>
        <Router>
          <Routes>
            <Route path='/database/works' element={<Works/>}/>
            <Route path='/database/Certificate' element={<Certificate/>}/>
            <Route path='/database/badges' element={<Badge/>}/>
            <Route path='/home' element={<Home/>}/>
            {/* <Route path='/database/Portfolio' element={<Portfolio/>}/> */}
          </Routes>
      </Router>
     </StoreProvider>
     </QueryClientProvider>
    </>
  )
}

export default App

import { Route, Routes } from "react-router"
import HomeLayout from "./layouts/HomeLayout"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"


function App() {
  return(
    <Routes>
      <Route path="/" element={<HomeLayout/>} >
      <Route index element={<Home/>}/>
      <Route path=":id" element={<MovieDetail/>}/>

      </Route>
    </Routes>
  )

}

export default App

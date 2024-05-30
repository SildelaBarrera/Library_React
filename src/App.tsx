import {Routes, Route} from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Books from "./pages/Books"
import Home from "./pages/Home"
import AddBook from "./pages/AddBook"
import EditBook from "./pages/EditBook"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import LogIn from "./pages/LogIn"
import PrivateRoutes from "./components/routes/PrivateRoutes"
import PublicRoutes from "./components/routes/PublicRoutes"



function App() {
  console.log('<App/>');

  return (
    <div className="border-2 border-indigo-600 min-h-screen flex flex-col">
      <Header />

      <main className="grow">
      
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/Login" element={<LogIn/>}/>

          <Route element={<PrivateRoutes />}>

            <Route path="/books" element={<Books/>}/>
            <Route path="/addbook" element={< AddBook/>}/>
            <Route path="/editbook" element={<EditBook/>}/>
            <Route path="/profile" element={<Profile/>}/>
          
          </Route>

          <Route element={<PublicRoutes />}>

            <Route path="/register" element={<Register/>}/>
            <Route path="/Login" element={<LogIn/>}/>

          </Route>


        </Routes>


      </main>      

      <Footer />
    </div>
  )
}

export default App;
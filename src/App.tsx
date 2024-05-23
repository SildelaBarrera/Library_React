// import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
// import Book from './components/Book'
import './App.css'


function App() {

  return( 
  <>
    <div className = "flex-col space-y-28 h-screen w-screen border-4 border-red-500 border-dotted">
      
      <Header/>
      <div className = " h-96 border-4 border-green-500 border-solid" ></div>
      <Footer/>
    
    </div>
    
  </>
  
  )


}
export default App

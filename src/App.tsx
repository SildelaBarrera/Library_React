import Header from './components/Header';
import Footer from './components/Footer';
import BookPage from './pages/BookPage';
import './App.css'


function App() {

  return( 
  <>
    <div className = "flex-col min-h-screen w-screen flex-col border-4 border-red-500 border-dotted">
      
      <Header/>
      
         
        <main className = "h-96 border-4 border-green-500 border-solid " >
          <BookPage/> 
        </main> 
    
     
      <Footer/>
    
    </div>
    
  </>
  
  )


}
export default App

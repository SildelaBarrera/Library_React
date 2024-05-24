import Footer from "./components/Footer";
import Header from "./components/Header";
import BookPage from "./pages/BookPage"
// import HomePage from "./pages/HomePage"

function App() {
  console.log('<App/>');

  return (
    <div className="border-2 border-indigo-600 min-h-screen flex flex-col">
      <Header />

      <main className="grow">
        <BookPage />
        {/* <HomePage /> */}
      </main>      

      <Footer />
    </div>
  )
}

export default App;
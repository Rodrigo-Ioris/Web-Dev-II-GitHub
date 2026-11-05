
import './App.css'

import Header from './Components/Header'
import Article from './Components/Article'
import AlbumGallery from './Components/AlbumGallery'
import Author from './Components/Author'
import Comments from './Components/Comments'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="page">

      <Header />

      <main className="main-content">
        <Article />
      </main>

      <AlbumGallery />

      <Author />

      <Comments />

      <Footer />

    </div>
  )
}

export default App

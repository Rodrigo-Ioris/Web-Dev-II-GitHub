
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <img src={logo} alt="Erased Tapes logo" />
      </div>

      <nav className="navigation">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>

    </header>
  )
}

export default Header

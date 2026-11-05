
import profilePicture from '../assets/profile_picture.jpg'
import facebookIcon from '../assets/facebook-icon.png'
import instagramIcon from '../assets/instagram-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'

function Author() {
  return (
    <section className="author-section" id="story">

      <h2>The Author</h2>

      <div className="author-content">

        <img
          src={profilePicture}
          alt="Author"
          className="author-picture"
        />

        <div className="author-description">
          <p>
            Sapien leo scelerisque per convallis torquent nunc.
            Lobortis eleifend a nam sit turpis nostra.
            Tempus suspendisse libero curae faucibus lobortis
            litora bibendum praesent! Eget quam magna,
            diam commodo interdum sapien magnis.
          </p>

          <div className="social-icons">

            <a href="#facebook" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>

            <a href="#instagram" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>

            <a href="#twitter" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" />
            </a>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Author

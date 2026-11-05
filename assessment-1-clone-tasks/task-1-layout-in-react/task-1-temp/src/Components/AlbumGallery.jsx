
import allEncores from '../assets/all-encores.jpg'
import articulation from '../assets/articulation.jpg'
import blurred from '../assets/blurred.jpg'
import encores from '../assets/encores-2.jpg'
import eulogy from '../assets/eulogy-for-evolution.jpg'

function AlbumGallery() {
  return (
    <section className="album-gallery">

      <div className="featured-album">
        <img src={allEncores} alt="Featured album" />
      </div>

      <div className="album">
        <img src={articulation} alt="Articulation album" />
      </div>

      <div className="album">
        <img src={blurred} alt="Blurred album" />
      </div>

      <div className="album">
        <img src={encores} alt="Encores album" />
      </div>

      <div className="album">
        <img src={eulogy} alt="Eulogy for Evolution album" />
      </div>

    </section>
  )
}

export default AlbumGallery

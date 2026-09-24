export function GallerySection({ items }) {
  return <section className="work-section container" id="work">
    <div className="work-heading"><div><p className="section-kicker">002 / The gallery</p><h2>SEE WHAT'S<br /><span>POSSIBLE.</span></h2></div></div>
    <div className="gallery-grid">{items.map((item, index) => <figure className={`gallery-card ${item.className}`} key={item.image}><img src={item.image} alt={item.alt} loading={index > 1 ? 'lazy' : 'eager'} /></figure>)}</div>
  </section>
}

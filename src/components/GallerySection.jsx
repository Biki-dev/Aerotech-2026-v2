export function GallerySection({ items }) {
  return <section className="work-section container" id="work">
    <div className="work-heading mt-35"><div><h2 className="font-space font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-black">GALLERY</h2></div></div>
    <div className="gallery-grid">{items.map((item, index) => <figure className={`gallery-card ${item.className}`} key={item.image}><img src={item.image} alt={item.alt} loading={index > 1 ? 'lazy' : 'eager'} /></figure>)}</div>
  </section>
}

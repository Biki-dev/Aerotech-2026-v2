import { ArrowUpRight } from 'lucide-react'
import { galleryFilters } from '../data/gallery'

function GalleryCard({ item }) {
  return <article className={`gallery-card ${item.className}`}><img src={item.image} alt={item.title} /><div className="card-overlay"><span>{item.tag}</span><h3>{item.title}</h3><ArrowUpRight size={19} /></div></article>
}

export function GallerySection({ activeFilter, onFilterChange, items }) {
  return <section className="work-section container" id="work">
    <div className="work-heading"><div><p className="section-kicker">002 / The gallery</p><h2>SEE WHAT'S<br /><span>POSSIBLE.</span></h2></div><div className="filter-row">{galleryFilters.map(filter => <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => onFilterChange(filter)}>{filter}</button>)}</div></div>
    <div className="gallery-grid">{items.map(item => <GalleryCard item={item} key={item.title} />)}</div>
  </section>
}

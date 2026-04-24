"use client";
import useEmblaCarousel from "embla-carousel-react";

const shopItems = [
  {
    href: "https://flexxnow.com/collections/abc-fighters",
    image: "/maillots/maillot-domicile-abc.jpg",
    tags: ["Tenues officielles"],
    title: "Maillot Domicile ABC",
  },
  {
    href: "https://flexxnow.com/collections/abc-fighters",
    image: "/maillots/maillot-exterieur-abc.jpg",
    tags: ["Tenues officielles"],
    title: "Maillot Extérieur ABC",
  },
  {
    href: "https://flexxnow.com/collections/abc-fighters",
    image: "/maillots/maillot-third-abc.jpg",
    tags: ["Tenues officielles"],
    title: "Maillot Third ABC",
  },
];

export default function ShopSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", containScroll: "trimSnaps" });

  return (
    <section className="pbb-block offer-cards shop-cards alignwide flickity-enabled" style={{ position: "relative" }}>
      <div className="title-row">
        <div className="title">
          <h2>Boutique Officielle</h2>
        </div>
      </div>
      <div className="cards-slider embla" ref={emblaRef}>
        <div className="embla__container">
          {shopItems.map((item, i) => (
            <div key={i} className="embla__slide slide">
              <div className="shop-card">
                <a href={item.href}>
                  <div className="thumbnail">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt="" width={600} height={698} loading={i === 0 ? "eager" : "lazy"} />
                  </div>
                  <div className="hover">
                    <div className="tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="flickity-prev-next-button previous"
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Précédent"
        style={{ left: "auto", right: 100 }}
      />
      <button
        className="flickity-prev-next-button next"
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Suivant"
        style={{ left: "auto", right: 0 }}
      />
    </section>
  );
}

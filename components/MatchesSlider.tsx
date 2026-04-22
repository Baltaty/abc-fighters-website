"use client";
import useEmblaCarousel from "embla-carousel-react";

type Match = {
  _id: string;
  competition: string;
  date: string;
  domicile: string;
  exterieur: string;
  logoDomicileUrl?: string;
  logoExterieurUrl?: string;
  lieu?: string;
  lienBilletterie?: string;
  lienDiffusion?: { label: string; href: string };
};

export default function MatchesSlider({ matches }: { matches: Match[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const items = matches.length > 0 ? matches : [{
    _id: "placeholder",
    competition: "Championnat de Côte d'Ivoire",
    date: "",
    domicile: "Abidjan Basketball Club",
    exterieur: "Adversaire",
    lieu: "Salle de la Treichville",
    logoDomicileUrl: "/abc.svg",
  }];

  return (
    <section className="pbb-block matchs-upcoming alignwide flickity-enabled" id="schedule" style={{ position: "relative" }}>
      <div className="matchs-slider embla" ref={emblaRef}>
        <div className="embla__container">
          {items.map((match) => (
            <div key={match._id} className="embla__slide match-card center-align">
              <div className="competition-date">
                <strong>{match.competition}</strong>{" "}
                {match.date && new Date(match.date).toLocaleDateString("fr-FR", { weekday: "short", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}
              </div>
              <div className="logos">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={match.logoDomicileUrl || "/abc.svg"} alt={match.domicile} width={200} height={200} className="attachment-logo size-logo" />
                {" vs "}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={match.logoExterieurUrl || "/abc.svg"} alt={match.exterieur} width={200} height={200} className="attachment-logo size-logo" />
              </div>
              <div className="teams">
                <div className="home">{match.domicile}</div>
                <div className="road">{match.exterieur}</div>
              </div>
              {match.lieu && (
                <div className="stadium">
                  <span className="icon icon-location"></span>{match.lieu}
                </div>
              )}
              {match.lienDiffusion && (
                <div className="channel">
                  <span className="icon icon-tv"></span>{" "}
                  <a href={match.lienDiffusion.href} target="_blank" rel="noopener">{match.lienDiffusion.label}</a>
                </div>
              )}
              <div className="buttons">
                <div>
                  <a href={match.lienBilletterie || "#"} className="btn white arrow">Billetterie</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="flickity-prev-next-button previous" type="button" onClick={() => emblaApi?.scrollPrev()} aria-label="Précédent" style={{ left: "auto", right: 100 }} />
      <button className="flickity-prev-next-button next" type="button" onClick={() => emblaApi?.scrollNext()} aria-label="Suivant" style={{ left: "auto", right: 0 }} />
    </section>
  );
}

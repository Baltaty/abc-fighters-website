"use client";
import useEmblaCarousel from "embla-carousel-react";

const matches = [
  {
    competition: "Championnat de Côte d'Ivoire",
    date: "À venir",
    homeTeam: "Abidjan Basketball Club",
    roadTeam: "Adversaire",
    homeLogo: "/abc.svg",
    roadLogo: "/abc.svg",
    stadium: "Salle de la Treichville",
    channel: null,
    ticketLink: "#",
    previewLink: "#",
  },
];

export default function MatchesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  return (
    <section className="pbb-block matchs-upcoming alignwide flickity-enabled" id="schedule" style={{ position: "relative" }}>
      <div className="matchs-slider embla" ref={emblaRef}>
        <div className="embla__container">
          {matches.map((match, i) => (
            <div
              key={i}
              className="embla__slide match-card center-align"
            >
              <div className="competition-date">
                <strong>{match.competition}</strong> {match.date}
              </div>
              <div className="logos">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={match.homeLogo} alt={match.homeTeam} width={200} height={200} className="attachment-logo size-logo" />
                {" vs "}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={match.roadLogo} alt={match.roadTeam} width={200} height={200} className="attachment-logo size-logo" />
              </div>
              <div className="teams">
                <div className="home">{match.homeTeam}</div>
                <div className="road">{match.roadTeam}</div>
              </div>
              <div className="stadium">
                <span className="icon icon-location"></span>
                {match.stadium}
              </div>
              {match.channel && (
                <div className="channel">
                  <span className="icon icon-tv"></span>{" "}
                  <a href={match.channel.href} target="_blank" rel="noopener">
                    {match.channel.label}
                  </a>
                </div>
              )}
              <div className="buttons">
                <div>
                  <a href={match.ticketLink} className="btn white arrow">
                    Billetterie
                  </a>
                </div>
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

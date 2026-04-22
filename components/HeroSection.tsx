export default function HeroSection() {
  return (
    <section className="pbb-block home-header alignfull">
      <video autoPlay muted loop playsInline>
        <source src="/abc-video.mp4" type="video/mp4" />
      </video>
      <span className="overlay" style={{ opacity: 0.5 }}></span>
      <div className="valign-wrapper alignwide">
        <div>
          <h1>
            WE ARE <br />
            THE FIGHTERS
          </h1>
          <a href="#schedule" className="smooth-scroll hide-on-small-only">
            scroll<span className="line"></span>
            <span className="icon icon-angle-down"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

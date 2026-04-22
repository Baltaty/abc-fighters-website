"use client";
import { useState, useEffect } from "react";

const MATCH_TIMESTAMP = 1777739400000;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function NextGameCounter() {
  const [timeLeft, setTimeLeft] = useState({ j: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    function update() {
      const diff = MATCH_TIMESTAMP - Date.now();
      if (diff <= 0) {
        setTimeLeft({ j: 0, h: 0, m: 0, s: 0 });
        return;
      }
      const s = Math.floor(diff / 1000) % 60;
      const m = Math.floor(diff / 60000) % 60;
      const h = Math.floor(diff / 3600000) % 24;
      const j = Math.floor(diff / 86400000);
      setTimeLeft({ j, h, m, s });
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="pbb-block next-game-counter alignstretch">
      <div className="flex-columns medium-flex">
        <div className="title">
          <div className="competition">Championnat de Côte d&apos;Ivoire</div>
          <div className="date">Prochain match</div>
        </div>
        <div className="logos">
          <span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/abc.svg"
              alt="Abidjan Basketball Club"
              width={200}
              height={200}
              className="attachment-logo size-logo"
            />
          </span>
        </div>
        <div className="count">
          <div id="countdown" style={{ fontVariantNumeric: "tabular-nums" }}>
            {timeLeft.j} <em>j</em> {pad(timeLeft.h)} <em>h</em> {pad(timeLeft.m)} <em>m</em> {pad(timeLeft.s)} <em>s</em>
          </div>
        </div>
        <div className="link">
          <a href="#" aria-label="Billetterie">
            <span className="icon icon-arrow-right"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

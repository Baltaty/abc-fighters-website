"use client";
import { useState, useEffect } from "react";

type Match = {
  _id: string;
  competition: string;
  date: string;
  domicile: string;
  exterieur: string;
  logoDomicileUrl?: string;
  logoExterieurUrl?: string;
  lienBilletterie?: string;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function NextGameCounter({ matches }: { matches: Match[] }) {
  const nextMatch = matches[0] ?? null;
  const timestamp = nextMatch ? new Date(nextMatch.date).getTime() : null;

  const [timeLeft, setTimeLeft] = useState({ j: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    if (!timestamp) return;
    function update() {
      const diff = timestamp! - Date.now();
      if (diff <= 0) { setTimeLeft({ j: 0, h: 0, m: 0, s: 0 }); return; }
      setTimeLeft({
        j: Math.floor(diff / 86400000),
        h: Math.floor(diff / 3600000) % 24,
        m: Math.floor(diff / 60000) % 60,
        s: Math.floor(diff / 1000) % 60,
      });
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timestamp]);

  return (
    <section className="pbb-block next-game-counter alignstretch">
      <div className="flex-columns medium-flex">
        <div className="title">
          <div className="competition">{nextMatch?.competition ?? "Championnat de Côte d'Ivoire"}</div>
          <div className="date">
            {nextMatch?.date
              ? new Date(nextMatch.date).toLocaleDateString("fr-FR", { weekday: "long", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })
              : "Prochain match"}
          </div>
        </div>
        <div className="logos">
          <span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={nextMatch?.logoDomicileUrl || "/abc.svg"} alt={nextMatch?.domicile ?? "ABC"} width={200} height={200} className="attachment-logo size-logo" />
          </span>
          {nextMatch && <span style={{ margin: "0 10px" }}>vs</span>}
          {nextMatch && (
            <span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={nextMatch?.logoExterieurUrl || "/abc.svg"}  alt={nextMatch.exterieur} width={200} height={200} className="attachment-logo size-logo" />
            </span>
          )}
        </div>
        {timestamp && (
          <div className="count">
            <div id="countdown" style={{ fontVariantNumeric: "tabular-nums" }}>
              {timeLeft.j} <em>j</em> {pad(timeLeft.h)} <em>h</em> {pad(timeLeft.m)} <em>m</em> {pad(timeLeft.s)} <em>s</em>
            </div>
          </div>
        )}
        {/* <div className="link">
          <a href={nextMatch?.lienBilletterie ?? "#"} aria-label="Billetterie">
            <span className="icon icon-arrow-right"></span>
          </a>
        </div> */}
      </div>
    </section>
  );
}

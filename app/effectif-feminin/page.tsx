import Header from "@/components/Header";
import Footer from "@/components/Footer";

const players = [
  { number: 18, position: "—", name: "Stéphanie Lago",      img: "/players/feminine/18.png" },
  { number: 9,  position: "—", name: "Salimata Berthé",     img: "/players/feminine/9.png" },
  { number: 14, position: "—", name: "Adjidjata Traoré",    img: "/players/feminine/14.png" },
  { number: 8,  position: "—", name: "Coumba Diarrasouba",  img: "/players/feminine/8.png" },
  { number: 7,  position: "—", name: "Fadila Ouelgo",       img: "/players/feminine/7.png" },
  { number: 2,  position: "—", name: "Fatoumata Samaké",    img: "/players/feminine/2.png" },
  { number: 10, position: "—", name: "Ferima Coulibaly",    img: "/players/feminine/10.png" },
  { number: 17, position: "—", name: "Masandje Diaby",      img: "/players/feminine/17.png" },
  { number: 15, position: "—", name: "Ramatou Dissa",       img: "/players/feminine/15.png" },
  { number: 3,  position: "—", name: "Reine Esther Yao",    img: "/players/feminine/3.png" },
  { number: 4,  position: "—", name: "Safietou Kolga",      img: "/players/feminine/4.png" },
];

export default function EffectifFemininPage() {
  return (
    <>
      <Header />

      <main className="page">
        <section className="pbb-block team-staff alignwide">
          <h1 className="center-align shadow-title">
            <strong>Effectif</strong> Équipe Féminine
          </h1>
          <div className="team flex-columns medium-flex">
            {players.map((player, i) => (
              <div key={i} className="player player-card view">
                <div className="portrait">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={player.img}
                    alt={player.name}
                    width={990}
                    height={990}
                    className="player-img"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="number">{player.number}</div>
                <div className="data">
                  <div className="position">{player.position}</div>
                  <h2 className="name">{player.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

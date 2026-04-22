import Header from "@/components/Header";
import Footer from "@/components/Footer";

const players = [
  { number: 27, position: "—", name: "Yann Zebihi",          img: "/players/masculine/abc/27.png" },
  { number: 20, position: "—", name: "Tidiane Koné",          img: "/players/masculine/abc/20.png" },
  { number: 10, position: "—", name: "Siré Dieng",            img: "/players/masculine/abc/10-dieng.png" },
  { number: 14, position: "—", name: "Prince Doffou",         img: "/players/masculine/abc/14.png" },
  { number: 0,  position: "—", name: "Pierre Marie Bationo",  img: "/players/masculine/abc/0.png" },
  { number: 12, position: "—", name: "Moussa Koné",           img: "/players/masculine/abc/12.png" },
  { number: 6,  position: "—", name: "Marc Laurel Yao",       img: "/players/masculine/abc/6.png" },
  { number: 21, position: "—", name: "Malick Souaré",         img: "/players/masculine/abc/21.png" },
  { number: 8,  position: "—", name: "Ismael Diarra",         img: "/players/masculine/abc/8.png" },
  { number: 17, position: "—", name: "Hamadou Sylla",         img: "/players/masculine/abc/17.png" },
  { number: 10, position: "—", name: "Elias Disu",            img: "/players/masculine/abc/10-elias.png" },
  { number: 18, position: "—", name: "Christ Ariel Konan",    img: "/players/masculine/abc/18.png" },
  { number: 2,  position: "—", name: "Aboubakar Diene",       img: "/players/masculine/abc/2.png" },
];

export default function EffectifMasculinPage() {
  return (
    <>
      <Header />

      <main className="page">
        <section className="pbb-block team-staff alignwide">
          <h1 className="center-align shadow-title">
            Effectif <strong>Abidjan Basketball Club</strong>
          </h1>
          <div className="team flex-columns medium-flex">
            {players.map((player, i) => (
              <div key={i} className="player player-card">
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

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const players = [
  { number: 27, position: "—", name: "Yann Zebihi",          img: "/players/masculine/Nadir-990x990.png" },
  { number: 20, position: "—", name: "Tidiane Koné",          img: "/players/masculine/Leo-990x990.png" },
  { number: 10, position: "—", name: "Siré Dieng",            img: "/players/masculine/Justin-1-990x990.png" },
  { number: 14, position: "—", name: "Prince Doffou",         img: "/players/masculine/Seba-990x990.png" },
  { number: 0,  position: "—", name: "Pierre Marie Bationo",  img: "/players/masculine/Jared-1-990x990.png" },
  { number: 12, position: "—", name: "Moussa Koné",           img: "/players/masculine/Lamar-1-990x990.png" },
  { number: 6,  position: "—", name: "Marc Laurel Yao",       img: "https://parisbasketball.com/wp-content/uploads/2025/09/Ilia-990x990.png" },
  { number: 21, position: "—", name: "Malick Souaré",         img: "https://parisbasketball.com/wp-content/uploads/2025/09/Joel-990x990.png" },
  { number: 8,  position: "—", name: "Ismael Diarra",         img: "https://parisbasketball.com/wp-content/uploads/2025/09/Allan-1-990x990.png" },
  { number: 17, position: "—", name: "Hamadou Sylla",         img: "https://parisbasketball.com/wp-content/uploads/2025/09/Momo-1-990x990.png" },
  { number: 10, position: "—", name: "Elias Disu",            img: "https://parisbasketball.com/wp-content/uploads/2025/09/Enzo-1-990x990.png" },
  { number: 18, position: "—", name: "Christ Ariel Konan",    img: "https://parisbasketball.com/wp-content/uploads/2025/09/Jeremy-990x990.png" },
  { number: 2,  position: "—", name: "Aboubakar Diene",       img: "https://parisbasketball.com/wp-content/uploads/2025/09/Amathe-990x990.png" },
  { number: 0,  position: "—", name: "Ibrahim Magassa",       img: "https://parisbasketball.com/wp-content/uploads/2025/09/Yak-1-990x990.png" },
  { number: 0,  position: "—", name: "Ibrahim Sevede",        img: "https://parisbasketball.com/wp-content/uploads/2025/09/Derek-990x990.png" },
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

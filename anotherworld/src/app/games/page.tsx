import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, Users, Clock, Gamepad2, Shield } from "lucide-react";

const pveGames = [
  {
    title: "Tavern",
    type: "PVE",
    desc: "A magical adventure in a fantasy tavern. Serve drinks, cast spells, and explore a world full of quirky characters and hidden secrets.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjyHRQB-4IhNvKUasC9iAv8_krVwXJyCnjRYGHBEZxTR5yAwm5ckN9FTbxpyzFwc0Nfk2-oxMyjJJD4sslUsHpe8B7LHm-CekznQTGMvqdcCIKWCMb78zZPo2pqMPmcouUKXdGZ8YGiyK22It49ToqBlM-nr2QPv4R29SqSkdgvQPa1PsnjwxK-8DrLDAN009kEZlnxQ53VCuwpNNIaT2S5XZAJCJ4rE1N5TbTxJQL-GvhRpU-ioJT7UWA_4QN6S9KDzFEy4TGTw",
    players: "4–20", age: "6+", time: "60 min", genre: "Adventure",
  },
  {
    title: "Starbase: Expedition",
    type: "PVE",
    desc: "Explore the outer rim of the galaxy with your squad. Navigate alien terrain, complete objectives, and survive hostile encounters on a distant planet.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwdAdH6xVGFG-n3xkvDStzjT7qkBdm2FLdjALM2cYdfK7NUz1xkb0wXHHlwp1aUstXniL9hOfGKP1A1LPEKLiE-2FEgU_eeSY5ABsFr0HEHX_u3x9oU2_4cbBP-y0MQShSDyjug3eO-ZVzuyUbVnS9mW6akQEhFpLpkEQATaj5QbuZTKfDWTgPOQE06KGQMeOyN6BFwWnbSPQWEfQOD4sox9Y8KZk-qg87X1WbHS9RvT1I_T26ekGGZZxFFYF3b0zw0IpL4O6u7g",
    players: "2–4", age: "12+", time: "60 min", genre: "Sci-Fi",
  },
  {
    title: "Deadwood Mansion",
    type: "PVE",
    desc: "A 4D horror experience that will test your nerves. Navigate through a haunted mansion with physical effects — wind, vibrations, and surprises around every corner.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb_4B7dZnRsB-qTzi9cvGr7uQQ2Agv-YHeBIFUlfotTUGhLX5PRlWf4vRn2Z80jWV_BlBCMWezCmJEZhsk17iPnJLFMcfqKVtm2vetxymEEFA9WbettPfQQ5dbwQ_KAG6JbuAZIVKbOxKpzyVjIe3ASZsIHUGYVQIZ4z-yrYHLoqFK73EgzlhD8WH-hZf3sMPpnBHju8I6C_0Lpiu-ypmELI7SBmKn8QnGGtEIdIo8Zb-lysMImJE732B_T1HGv5DIk6GSrKn-yw",
    players: "2–8", age: "14+", time: "60 min", genre: "Horror",
  },
  {
    title: "Neon Pulse",
    type: "PVE",
    desc: "Sync your body to the rhythm in this visually stunning beat-action arena. Dodge, strike, and flow through neon landscapes as the music drives the gameplay.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnyakY8f0o673vk237-q71SzWrt7PsASgy91WhUM6lKKLqi3YHCjadwIxL_W1ns0H98qp6FbBo2VAjmDn3gaCeMocuLCXoQRbKFkbOxP-_EqRMCHoDT4btAdDGfxWrG6d_XF6-5nxPmW8eTxWAl1jujdBLgD9RjrjNah8Zgp5NRhczI5l35aYXLpVZGXQodyMKqPsGStS1OzqJv81r0qD-pZcGda9tjHzqbWGPGZq5ePk6k-DKTV9_y-MqXJAKhQxKmHb7yF4nNA",
    players: "2–10", age: "8+", time: "60 min", genre: "Rhythm",
  },
];

const pvpGames = [
  {
    title: "Starship Troopers",
    type: "PVP",
    desc: "Team vs team tactical combat in a futuristic battlefield. Coordinate with your squad, use cover, and eliminate the opposing team in intense free-roam firefights.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjeiRpXHviD50vUUtAVXn0ysejfqdEcx7MiJTg5gbh6EETNtYwEbM-ON2Pp3TS92LmSPRjs1ytSatsoU4FQIk9myMm3e6x57lEx2mfQiez05x_vii62AIRloeU_Pu0vNarLSFuHsPwsPoEQ4o2DhsZmBpB5hsgmwnBqH_0Xwtl7-AiZ8nqG2P-lIhDawlYrjwWlNKoshVxWsVkWaMbufDgLcHFXzHLHF39qrgq7JEhhwvcQk-b9nge6_JLOy1Zw02BS9lS5rnRjg",
    players: "4–20", age: "6+", time: "60 min", genre: "Shooter",
  },
  {
    title: "Arena: Space Battle",
    type: "PVP",
    desc: "Boundless space around, cold and distant stars, and battles continue on the space station. Alien invaders are trying to take over your station — fight back with your crew.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6bfr9dkFUlxjZ2KcRDEUbzDPKSVN6DZ0c08SvzxSJ-wazisqjOgf0DP24n6dtNbk_OpWNpjNzwRqOrc5kUPkK2iNxFM650OKe7M4EuJuJXfraHVHeGeu2sCmRdqJCyj4n0cydmQPBgK02dHU9YsfuWmznL3icFpscroIaR9fTK-GyXK2V9qfJuV8u8YbzmpQlFnegdFdezlqOKCK3sN9pHJ7VsqmcKVIpzIoevCujop1u0a8kURn74CYeCOZU-4EDgGYVBqEivQ",
    players: "4–20", age: "6+", time: "60 min", genre: "Shooter",
  },
];

function GameCard({ game }: { game: typeof pveGames[0] }) {
  return (
    <div className="rounded-2xl border border-glass-stroke bg-surface-container-low overflow-hidden group">
      {/* Image with play button + type tag */}
      <div className="relative">
        <span className={`absolute top-4 left-4 z-10 font-mono text-sm font-bold tracking-wider ${game.type === "PVP" ? "text-brand-red" : "text-brand-red"}`}>
          {game.type}
        </span>
        <div className="relative h-[260px] md:h-[300px] overflow-hidden bg-surface">
          <Image src={game.img} alt={game.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all cursor-pointer">
              <Play className="w-7 h-7 text-white fill-white ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="font-sora text-2xl md:text-[26px] font-bold text-white text-center mb-4">{game.title}</h3>
        <p className="text-on-surface-variant text-sm text-center leading-relaxed mb-6 font-mono">{game.desc}</p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="rounded-xl border border-glass-stroke bg-surface-container p-4">
            <p className="font-sora text-xl font-bold text-white">{game.players}</p>
            <p className="font-mono text-xs text-on-surface-variant">Players</p>
          </div>
          <div className="rounded-xl border border-glass-stroke bg-surface-container p-4">
            <p className="font-sora text-xl font-bold text-white">{game.age}</p>
            <p className="font-mono text-xs text-on-surface-variant">Age</p>
          </div>
          <div className="rounded-xl border border-glass-stroke bg-surface-container p-4">
            <p className="font-sora text-xl font-bold text-white">{game.time}</p>
            <p className="font-mono text-xs text-on-surface-variant">Session time</p>
          </div>
          <div className="rounded-xl border border-glass-stroke bg-surface-container p-4">
            <p className="font-sora text-xl font-bold text-white">{game.genre}</p>
            <p className="font-mono text-xs text-on-surface-variant">Genre</p>
          </div>
        </div>

        {/* More button */}
        <div className="text-center">
          <button className="font-mono text-sm text-on-surface-variant tracking-widest hover:text-brand-red transition-colors inline-flex items-center gap-2">
            MORE <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GamesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-6 px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
        <p className="text-on-surface-variant text-sm mb-8 font-mono">
          <Link href="/" className="hover:text-brand-red transition-colors">Main</Link>
          <span className="mx-2 text-on-surface-variant/40">&rarr;</span>
          <span>Our games</span>
        </p>
        <h1 className="font-sora text-4xl md:text-6xl font-extrabold text-white mb-6">Our VR games</h1>
        <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed font-mono">
          Exciting games for all ages that allow you to immerse yourself in the world of virtual reality and become a part of it.
        </p>
      </section>

      {/* PVE Games */}
      <section className="py-12 px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pveGames.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>
      </section>

      {/* PVP Games */}
      <section className="py-12 px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pvpGames.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container mx-auto glass-panel rounded-2xl p-10 md:p-16 text-center border border-brand-red/10">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-white mb-4">Ready to Play?</h2>
          <p className="text-on-surface-variant mb-8 max-w-md mx-auto leading-relaxed">
            Book your session now and experience these games in our massive free-roam arenas. $35 per player.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="bg-brand-red text-white px-10 py-4 rounded-lg font-bold hover:bg-brand-red/90 transition-all inline-flex items-center gap-2 shadow-lg shadow-brand-red/20">
              Book Session <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="border border-white/20 text-white px-10 py-4 rounded-lg font-bold hover:bg-white/5 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
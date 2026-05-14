import Navbar from "../components/navbar"

export default function Estadisticas() {
  const partidos = [
    { local: "Argentina", visitante: "Paraguay", pronostico: "3-0", resultado: "2-0", puntos: 2, bandera1: "🇦🇷", bandera2: "🇵🇾" },
    { local: "España", visitante: "Mexico", pronostico: "1-1", resultado: "1-1", puntos: 5, bandera1: "🇪🇸", bandera2: "🇲🇽" },
    { local: "Brasil", visitante: "Alemania", pronostico: "2-0", resultado: "0-1", puntos: 0, bandera1: "🇧🇷", bandera2: "🇩🇪" },
    { local: "Francia", visitante: "Uruguay", pronostico: "2-1", resultado: "2-1", puntos: 5, bandera1: "🇫🇷", bandera2: "🇺🇾" },
    { local: "Portugal", visitante: "USA", pronostico: "1-0", resultado: "2-0", puntos: 2, bandera1: "🇵🇹", bandera2: "🇺🇸" },
  ]

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-1">Mis estadisticas</h1>
        <p className="text-gray-400 text-sm mb-6">Tu rendimiento en el Mundial</p>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center">
            <div className="text-3xl font-semibold text-white">124</div>
            <div className="text-xs text-gray-400 mt-1">Puntos totales</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center">
            <div className="text-3xl font-semibold text-white">18</div>
            <div className="text-xs text-gray-400 mt-1">Pronosticos</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center">
            <div className="text-3xl font-semibold text-green-400">61%</div>
            <div className="text-xs text-gray-400 mt-1">Precision</div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold">Tu posicion</span>
            <span className="text-green-400 font-semibold">#4 de 89</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{width: "95%"}}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>Mejor que el 95% de jugadores</span>
            <span>Top 5%</span>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-4">Ultimos partidos</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          {partidos.map((p, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-4 border-b border-gray-800 last:border-0">
              <div className="flex items-center gap-2 flex-1">
                <span>{p.bandera1}</span>
                <span className="text-xs text-gray-400">vs</span>
                <span>{p.bandera2}</span>
                <div className="ml-2">
                  <div className="text-sm font-semibold">{p.local} vs {p.visitante}</div>
                  <div className="text-xs text-gray-400">Pronostico: {p.pronostico} · Real: {p.resultado}</div>
                </div>
              </div>
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${p.puntos === 5 ? 'bg-green-900 text-green-400' : p.puntos === 2 ? 'bg-blue-900 text-blue-400' : 'bg-gray-800 text-gray-400'}`}>
                {p.puntos === 0 ? '0 pts' : `+${p.puntos} pts`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
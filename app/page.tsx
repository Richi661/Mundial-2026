
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚽</span>
          <span className="font-semibold text-lg">PronosticosMundial</span>
          <span className="bg-green-500 text-black text-xs px-2 py-1 rounded-full font-semibold">2026</span>
        </div>
        <div className="flex gap-3">
          <button className="text-sm text-gray-400 hover:text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">Entrar</button>
          <button className="text-sm bg-green-500 hover:bg-green-400 text-black font-semibold px-4 py-2 rounded-lg transition">Registrarse</button>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-1">Partidos</h1>
        <p className="text-gray-400 text-sm mb-6">Fecha 1 — Grupo A</p>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-gray-400">11 jun · 17:00</span>
            <span className="text-xs bg-green-900 text-green-400 px-3 py-1 rounded-full">Abierto</span>
          </div>
          <div className="grid grid-cols-3 items-center gap-4 mb-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🇲🇽</span>
              <span className="text-sm font-medium">México</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input type="number" min="0" max="20" defaultValue="0" className="w-12 h-12 text-center text-xl font-semibold bg-gray-800 border border-gray-700 rounded-lg text-white" />
              <span className="text-gray-500 font-semibold">–</span>
              <input type="number" min="0" max="20" defaultValue="0" className="w-12 h-12 text-center text-xl font-semibold bg-gray-800 border border-gray-700 rounded-lg text-white" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🇺🇾</span>
              <span className="text-sm font-medium">Uruguay</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>México 45%</span>
              <span>Empate 25%</span>
              <span>Uruguay 30%</span>
            </div>
            <div className="flex h-1.5 rounded-full overflow-hidden">
              <div className="bg-green-500" style={{width: '45%'}}></div>
              <div className="bg-gray-500" style={{width: '25%'}}></div>
              <div className="bg-orange-500" style={{width: '30%'}}></div>
            </div>
          </div>
        </div>

        <button className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-xl transition">
          Guardar pronósticos
        </button>
      </div>
    </main>
  )
  
}
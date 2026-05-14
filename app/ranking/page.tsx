import Link from "next/link"

export default function Ranking() {
  const usuarios = [
    { pos: 1, nombre: "Ana Garcia", puntos: 178, aciertos: 12 },
    { pos: 2, nombre: "Carlos M.", puntos: 142, aciertos: 10 },
    { pos: 3, nombre: "Luis R.", puntos: 138, aciertos: 9 },
    { pos: 4, nombre: "Ricardo E.", puntos: 124, aciertos: 8 },
    { pos: 5, nombre: "Martin P.", puntos: 119, aciertos: 8 },
    { pos: 6, nombre: "Sofia R.", puntos: 105, aciertos: 7 },
    { pos: 7, nombre: "Diego F.", puntos: 98, aciertos: 6 },
    { pos: 8, nombre: "Laura M.", puntos: 87, aciertos: 6 },
  ]

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">&#9917;</span>
          <span className="font-semibold text-lg">PronosticosMundial</span>
          <span className="bg-green-500 text-black text-xs px-2 py-1 rounded-full font-semibold">2026</span>
        </div>
        <div className="flex gap-4 text-sm">
          <Link href="/" className="text-gray-400 hover:text-white transition">Partidos</Link>
          <Link href="/ranking" className="text-green-400 font-semibold">Ranking</Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-1">Ranking</h1>
        <p className="text-gray-400 text-sm mb-8">Tabla general de posiciones</p>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="rounded-2xl p-4 text-center border bg-gray-900 border-gray-800">
            <div className="text-3xl mb-2">&#129352;</div>
            <div className="text-sm font-semibold">Carlos</div>
            <div className="text-green-400 font-semibold mt-1">142 pts</div>
          </div>
          <div className="rounded-2xl p-4 text-center border bg-yellow-950 border-yellow-700">
            <div className="text-3xl mb-2">&#129351;</div>
            <div className="text-sm font-semibold">Ana</div>
            <div className="text-green-400 font-semibold mt-1">178 pts</div>
          </div>
          <div className="rounded-2xl p-4 text-center border bg-gray-900 border-gray-800">
            <div className="text-3xl mb-2">&#129353;</div>
            <div className="text-sm font-semibold">Luis</div>
            <div className="text-green-400 font-semibold mt-1">138 pts</div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          {usuarios.map((u) => (
            <div key={u.pos} className={`flex items-center gap-4 px-5 py-4 border-b border-gray-800 last:border-0 ${u.nombre === "Ricardo E." ? "bg-green-950" : ""}`}>
              <span className="text-gray-400 text-sm w-5 text-center">{u.pos}</span>
              <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold text-white">
                {u.nombre.split(" ").map((n: string) => n[0]).join("")}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">
                  {u.nombre} {u.nombre === "Ricardo E." && <span className="text-xs text-gray-400">(tu)</span>}
                </div>
                <div className="text-xs text-gray-400">{u.aciertos} aciertos</div>
              </div>
              <span className="text-green-400 font-semibold text-sm">{u.puntos} pts</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
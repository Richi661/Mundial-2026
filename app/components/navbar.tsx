import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <span className="text-2xl">⚽</span>
        <span className="font-semibold text-lg text-white">PronosticosMundial</span>
        <span className="bg-green-500 text-black text-xs px-2 py-1 rounded-full font-semibold">2026</span>
      </Link>
      <div className="flex items-center gap-4 text-sm">
        <Link href="/" className="text-gray-400 hover:text-white transition">Partidos</Link>
        <Link href="/ranking" className="text-gray-400 hover:text-white transition">Ranking</Link>
        <Link href="/estadisticas" className="text-gray-400 hover:text-white transition">Mis stats</Link>
        <Link href="/login" className="text-gray-400 hover:text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">Entrar</Link>
        <Link href="/registro" className="bg-green-500 hover:bg-green-400 text-black font-semibold px-4 py-2 rounded-lg transition">Registrarse</Link>
      </div>
    </nav>
  )
}
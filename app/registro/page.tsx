export default function Registro() {
  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-5xl">⚽</span>
          <h1 className="text-2xl font-semibold text-white mt-3">PronosticosMundial</h1>
          <p className="text-gray-400 text-sm mt-1">2026</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-white mb-6">Crear cuenta</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500 transition"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500 transition"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Contraseña</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500 transition"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Confirmar contraseña</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500 transition"
              />
            </div>
            <button className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-xl transition mt-2">
              Crear cuenta
            </button>
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            ¿Ya tenés cuenta?{" "}
            <a href="/login" className="text-green-400 hover:text-green-300 transition">
              Iniciar sesión
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
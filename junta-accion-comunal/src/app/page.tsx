export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-900">
      <img src="/logo-placeholder.png" alt="Logo de la Junta" className="mb-4" />
      <h1 className="text-4xl font-bold text-white mb-4">¡Bienvenido a la Junta de Acción Comunal!</h1>
      <p className="text-gray-300 mb-8">Este es un sitio web para nuestra comunidad.</p>
      <a href="/cartelera/page" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
        Ingresar al Sitio
      </a>
    </div>
  );
}

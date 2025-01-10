export default function Cartelera() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-900">
      <h1 className="text-4xl font-bold text-white mb-4">Cartelera de Eventos</h1>
      <p className="text-gray-300 mb-8">Aquí encontrarás información detallada sobre los eventos y actividades programadas.</p>
      <a href="/reuniones/page" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
        Ver Reuniones y Asambleas
      </a>
      {/* Aquí puedes agregar más contenido sobre la cartelera */}
    </div>
  );
}

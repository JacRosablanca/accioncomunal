'use client';

import { useState } from 'react';

export default function Reuniones() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-900">
      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li><a href="#asamblea" onClick={() => setActiveSection('asamblea')} className="text-blue-500 hover:underline">Asamblea General de Afiliados</a></li>
          <li><a href="#mesa" onClick={() => setActiveSection('mesa')} className="text-blue-500 hover:underline">Reunión de Mesa Directiva</a></li>
          <li><a href="#convivencia" onClick={() => setActiveSection('convivencia')} className="text-blue-500 hover:underline">Reunión de Convivencia y Conciliación</a></li>
          <li><a href="#comision" onClick={() => setActiveSection('comision')} className="text-blue-500 hover:underline">Reunión de Comisión de Trabajo</a></li>
        </ul>
      </nav>
      <h1 className="text-4xl font-bold text-white mb-4">Reuniones y Asambleas</h1>
      <p className="text-gray-300 mb-8">Aquí podrás encontrar información sobre las próximas reuniones y asambleas de la Junta de Acción Comunal.</p>

      {activeSection === 'asamblea' && (
        <div>
          <h2 id="asamblea" className="text-2xl font-bold text-white mb-2">Asamblea General de Afiliados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Citacion a Asamblea N. 018</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 28 de enero</p>
              <p><span className="font-bold">Hora:</span> 5:00 PM</p>
              <p><span className="font-bold">Sitio:</span> Calle 32 con Carrera 9 esquina</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> Creación de la empresa comunal: Mercado Comunitario Rosa Blanca</p>
            </div>
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Citacion a Asamblea N. 019</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 30 de marzo</p>
              <p><span className="font-bold">Hora:</span> 5:00 PM</p>
              <p><span className="font-bold">Sitio:</span> Calle 32 con Carrera 9 esquina</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> A definir</p>
            </div>
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Citacion a Asamblea N. 020</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 25 de mayo</p>
              <p><span className="font-bold">Hora:</span> 5:00 PM</p>
              <p><span className="font-bold">Sitio:</span> Calle 32 con Carrera 9 esquina</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> A definir</p>
            </div>
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Citacion a Asamblea N. 021</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 27 de julio</p>
              <p><span className="font-bold">Hora:</span> 5:00 PM</p>
              <p><span className="font-bold">Sitio:</span> Calle 32 con Carrera 9 esquina</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> A definir</p>
            </div>
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Citacion a Asamblea N. 022</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 28 de septiembre</p>
              <p><span className="font-bold">Hora:</span> 5:00 PM</p>
              <p><span className="font-bold">Sitio:</span> Calle 32 con Carrera 9 esquina</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> A definir</p>
            </div>
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Citacion a Asamblea N. 023</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 30 de noviembre</p>
              <p><span className="font-bold">Hora:</span> 5:00 PM</p>
              <p><span className="font-bold">Sitio:</span> Calle 32 con Carrera 9 esquina</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> A definir</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'mesa' && (
        <div>
          <h2 id="mesa" className="text-2xl font-bold text-white mb-2">Reunión de Mesa Directiva</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Reunión de Mesa Directiva 1</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 15 de febrero</p>
              <p><span className="font-bold">Hora:</span> 3:00 PM</p>
              <p><span className="font-bold">Sitio:</span> Salón Principal</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> Informe de actividades</p>
              <a href="/data/mesa.pdf" className="mt-2 inline-block btn">Ver Citación</a>
            </div>
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Reunión de Mesa Directiva 2</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 20 de marzo</p>
              <p><span className="font-bold">Hora:</span> 3:00 PM</p>
              <p><span className="font-bold">Sitio:</span> Salón Principal</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> Informe de actividades</p>
              <a href="/data/mesa2.pdf" className="mt-2 inline-block btn">Ver Citación</a>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'convivencia' && (
        <div>
          <h2 id="convivencia" className="text-2xl font-bold text-white mb-2">Reunión de Convivencia y Conciliación</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Reunión de Convivencia y Conciliación 1</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 20 de marzo</p>
              <p><span className="font-bold">Hora:</span> 4:00 PM</p>
              <p><span className="font-bold">Sitio:</span> En línea</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> Resolución de conflictos</p>
            </div>
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Reunión de Convivencia y Conciliación 2</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 25 de abril</p>
              <p><span className="font-bold">Hora:</span> 4:00 PM</p>
              <p><span className="font-bold">Sitio:</span> En línea</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> Resolución de conflictos</p>
            </div>
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Reunión de Convivencia y Conciliación 3</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 30 de mayo</p>
              <p><span className="font-bold">Hora:</span> 4:00 PM</p>
              <p><span className="font-bold">Sitio:</span> En línea</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> Resolución de conflictos</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'comision' && (
        <div>
          <h2 id="comision" className="text-2xl font-bold text-white mb-2">Reunión de Comisión de Trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Reunión de Comisión de Trabajo 1</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 10 de abril</p>
              <p><span className="font-bold">Hora:</span> 2:00 PM</p>
              <p><span className="font-bold">Sitio:</span> Salón de Conferencias</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> Proyectos en curso</p>
            </div>
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Reunión de Comisión de Trabajo 2</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 15 de mayo</p>
              <p><span className="font-bold">Hora:</span> 2:00 PM</p>
              <p><span className="font-bold">Sitio:</span> Salón de Conferencias</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> Proyectos en curso</p>
            </div>
            <div className="assembly-card bg-gray-800 p-4 rounded">
              <h3 className="font-bold">Reunión de Comisión de Trabajo 3</h3>
              <p><span className="font-bold">Modalidad:</span> Presencial</p>
              <p><span className="font-bold">Fecha:</span> 20 de junio</p>
              <p><span className="font-bold">Hora:</span> 2:00 PM</p>
              <p><span className="font-bold">Sitio:</span> Salón de Conferencias</p>
              <p><span className="font-bold">Convoca:</span> Presidente</p>
              <p><span className="font-bold">Publica:</span> Secretaria</p>
              <p><span className="font-bold">Temas a tratar:</span> Proyectos en curso</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

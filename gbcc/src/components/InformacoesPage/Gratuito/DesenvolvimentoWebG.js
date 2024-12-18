import React, { useState } from 'react';

function DesenvolvimentoWebG() {
  // Lista de cursos
  const cursos = [
    { titulo: 'Desenvolvimento com Angular', duracao: '2 meses', professor: 'Loyane', instituicao: 'Udemy' },
    { titulo: 'Desenvolvimento com React', duracao: '2 meses', professor: 'Guanabara', instituicao: 'Udemy' },
    { titulo: 'Desenvolvimento com Vue.js', duracao: '1 mês', professor: 'Silva', instituicao: 'Alura' },
    { titulo: 'Desenvolvimento com Svelte', duracao: '1 mês', professor: 'Roberta', instituicao: 'Rocketseat' },
    { titulo: 'Desenvolvimento com Node.js', duracao: '2 meses', professor: 'Carlos', instituicao: 'Trybe' },
  ];

  // Estado para controle da página
  const [paginaAtual, setPaginaAtual] = useState(1);

  // Cursos por página
  const cursosPorPagina = 3;
  const indexUltimoCurso = paginaAtual * cursosPorPagina;
  const indexPrimeiroCurso = indexUltimoCurso - cursosPorPagina;
  const cursosExibidos = cursos.slice(indexPrimeiroCurso, indexUltimoCurso);

  // Número total de páginas
  const totalPaginas = Math.ceil(cursos.length / cursosPorPagina);

  return (
    <div className="space-y-6"> {/* Espaçamento entre as divs */}

      {/* Renderização dos cursos da página atual */}
      {cursosExibidos.map((curso, index) => (
        <div key={index} className="border border-white rounded-md p-6 text-white w-full max-w-md mx-auto">
          {/* Título do Curso */}
          <h3 className="text-2xl font-bold mb-4">Curso: {curso.titulo}</h3>

          {/* Duração */}
          <p className="text-lg mb-2">Duração: {curso.duracao}</p>

          {/* Professor / Instituição */}
          <p className="text-lg">Professor: {curso.professor} | Instituição: {curso.instituicao}</p>
        </div>
      ))}

      {/* Paginação */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          className={`px-4 py-2 border ${paginaAtual === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-white border-white'} rounded-md`}
          onClick={() => setPaginaAtual(paginaAtual - 1)}
          disabled={paginaAtual === 1}
        >
          Anterior
        </button>
        <button
          className={`px-4 py-2 border ${paginaAtual === totalPaginas ? 'text-gray-500 cursor-not-allowed' : 'text-white border-white'} rounded-md`}
          onClick={() => setPaginaAtual(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default DesenvolvimentoWebG;

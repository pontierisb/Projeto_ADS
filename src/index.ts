const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = []; 
const avaliacao: number[] = []; //0 se não foi lido, 1-5 se foi lido

//Aqui vou adicionar os livros, autores, anos, páginas, se foi lido ou não e a avaliação.
titulos.push(
  'O Hobbit',
  'Clean Code',
  '1984',
  'Dom Casmurro',
  'O Nome do Vento',
);
autores.push(
  'J.R.R. Tolkien',
  'Robert C. Martin',
  'George Orwell',
  'Machado de Assis',
  'Patrick Rothfuss',
);

anos.push(1937, 2008, 1949, 1899, 2007);
paginas.push(310, 464, 328, 256, 662);
lido.push(true, true, false, true, false);
avaliacao.push(5, 4, 0, 5, 0);

//Agora vou fazer a função de exibir a biblioteca
function exibirBiblioteca(): void {
    console.log('=== Biblioteca do Willian===');
    titulos.forEach((titulo, indice ) => {
        const status = lido[indice] ? `Lido - Avaliação: ${avaliacao[indice]}/5` : 'Não lido';
        console.log(`${titulo}, ${autores[indice]} (${anos[indice]}, ${paginas[indice]} páginas) - ${status}`);
  });
}
exibirBiblioteca();

//Adicionar função de adicionar livros na biblioteca
function adicionarLivro(
  titulo: string,
  autor: string,
  ano: number,
  paginaslivro: number,
): void {
  if (titulo.trim() === ""){
    console.log ("Erro: Coloque o título do livro");
    return;
  }
  if (autor.trim() === ""){
    console.log ("Erro: Coloque o autor do livro");
    return;
  }
  if (ano <= 0){
    console.log ("Erro: Coloque um ano válido");
    return;
  }
  if (paginaslivro <= 0){
    console.log ("Erro: Coloque um número de páginas válido");
    return;
  }
  titulos.push(titulo);
  autores.push(autor);
  anos.push(ano);
  paginas.push(paginaslivro);
  lido.push(false);
  avaliacao.push(0);
  console.log(`Livro "${titulo}" adicionado com sucesso!`);
}

//Adiciona função de remover os livros da biblioteca
function removerLivro(indice: number): void {
  if (indice < 0) {
    console.log("Erro: Índice inválido");
    return;
  }
  const tituloremovido = titulos[indice];
  titulos.splice(indice, 1);
  autores.splice(indice, 1);
  anos.splice(indice, 1);
  paginas.splice(indice,1 );
  lido.splice(indice, 1);
  avaliacao.splice(indice, 1);

  console.log(`Livro "${tituloremovido}" removido com sucesso!`);
}
//função de busca e filtro
function buscarLivro (termo: string): number[]{
  const indices: number[] = [];
  const termoDeBusca = termo.toLowerCase();

  titulos.forEach((titulo, indice) => {
    if (titulo.toLowerCase().includes(termoDeBusca)) {
      indices.push(indice);
    }
  });

  return indices;
}
//função de busca por autor
function buscarAutor(autor: string): string[]{
  const livrodoautor = autor.toLowerCase();
  const livrosEncontrados: string[] = [];

  autores.forEach((autorLivro, indice) => {
    if (autorLivro.toLowerCase().includes(livrodoautor))
    {
      const tituloLivro = titulos[indice];
      if (tituloLivro !== undefined) {
        livrosEncontrados.push(tituloLivro);
      }
    }
  });

  return livrosEncontrados;
}
//função de marcar como lido
function marcarComoLido(indice: number, avaliacaoLivro: number): void {
  if (indice < 0 || indice >= titulos.length) {
    console.log("Erro: Índice inválido");
    return;
  }
//verificar se a avaliação é válida
switch (true) {
  case avaliacaoLivro < 1:
    case avaliacaoLivro > 5:
    console.log("Erro: Avaliação deve ser entre 1 e 5");
    return;
}

//marcar como lido e adicionar avaliação
lido[indice] = true;
avaliacao[indice] = avaliacaoLivro;
const tituloLivro = titulos[indice];
console.log(`Livro "${tituloLivro}" marcado como lido com avaliação ${avaliacaoLivro}/5!`);
}

//função para listar os livros lidos
function listarLivrosLidos(): string[] {
  const livrosLidos: string[] = [];

  titulos.forEach((titulo, indice) => {
    if (lido[indice]) {
      const tituloLivro = titulos[indice];
      if (tituloLivro !== undefined) {
        livrosLidos.push(tituloLivro);
      }
    }
  });
  return livrosLidos;
}
//Lista os titulos não lidos
function listarLivrosNaoLidos(): string[] {
  const livrosNaoLidos: string[] = [];

  titulos.forEach((titulo, indice) => {
    if (!lido[indice]) {
      const tituloLivro = titulos[indice];
      if (tituloLivro !== undefined) {
        livrosNaoLidos.push(tituloLivro);
      }
    }
  });
  return livrosNaoLidos;
}

//Estatisticas da biblioteca
//Total de livros
function totalLivros(): number {
  return titulos.length;
}
//Total de livros lidos
function totalLivrosLidos(): number {
  return titulos.filter(foiLido => foiLido).length;
}

//Percentual de livros lidos
function percentualLivrosLidos(): number {
  const total = totalLivros();
  if (total === 0) {
    return 0;
  }
  const lidos = totalLivrosLidos();
  return (lidos / total) * 100;
}

//media de avaliação dos livros lidos
function mediaAvaliacaoLivrosLidos(): number {
  const avaliacoes = avaliacao.filter((_, indice) => {
    const livroLido = lido[indice];
    return livroLido !== undefined && livroLido;
  });

  if (avaliacoes.length === 0) return 0;
  const soma = avaliacoes.reduce((acumulador, avaliacao) => acumulador + avaliacao, 0);
  return soma / avaliacoes.length;
}

//Titulo com maior avaliação
function tituloMaiorAvaliacao(): string {
 if (titulos.length === 0) {
  return "Nenhum livro na biblioteca";
 }
 const indiceMaiorAvaliacao = avaliacao.reduce((indiceMaior, avaliacaoAtual, indice) => {
  const avaliacaoMaior = avaliacao[indiceMaior];
  if (avaliacaoAtual === undefined) {
    return indiceMaior;
  }
  return avaliacaoAtual > avaliacaoMaior ? indice : indiceMaior;
}, 0);
 const tituloLivro = titulos[indiceMaiorAvaliacao];
return tituloLivro || 'Título não encontrado';
}
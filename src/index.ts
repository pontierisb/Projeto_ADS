const titulo: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = []; 
const avaliacao: number[] = []; //0 se não foi lido, 1-5 se foi lido

//Aqui vou adicionar os livros, autores, anos, páginas, se foi lido ou não e a avaliação.
titulo.push(
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
    titulo.forEach((titulo, i ) => {
        const status = lido[i] ? `Lido - Avaliação: ${avaliacao[i]}/5` : 'Não lido';
        console.log(`${titulo}, ${autores[i]} (${anos[i]}, ${paginas[i]} páginas) - ${status}`);
  });
}
exibirBiblioteca();
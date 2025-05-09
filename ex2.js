const livro = {
    titulo: "The Maze runner:",
    autor: "James Dashner",
    ano: "2009",
    resumo: function(){
        return 'Titulo ${The Maze Runner.titulo}, Autor: ${James Dashner.autor}, Ano: ${2009.ano}';
    }
};
console.log(livro.resumo());
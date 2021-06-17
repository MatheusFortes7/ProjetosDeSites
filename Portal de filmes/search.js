const API_KEY = '1d67b3bbb1493eacc10d061ff172b9ee';
const SearchInput = 'https://api.themoviedb.org/3/search/movie?api_key=1d67b3bbb1493eacc10d061ff172b9ee&language=pt-BR';
const ImagePath = 'https://image.tmdb.org/t/p/w500/${filme.poster_path}';

function exibeFilmes(){
    let divTela = document.getElementById('tela');
    let texto = '';

    //Montar texto HTML dos Filmes
    let dados = JSON.parse(this.responseText);
    for (i=0; i< dados.results.length; i++){
        let filme = dados.results[i];
        let media = filme.media_type 
        const Poster = filme.poster_path
        const Overview = filme.overview;
        if(media === "tv" || "movie"){
        if (Overview && Poster) { 
        
        texto = texto + `
        <div class="boxFilmes">
            <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="">
            <span class="tituloFilme">${filme.original_title}</span>
                <br><br>
            <div class="divSinopse">
            <span class="Sinopse">Sinopse: ${filme.overview}</span>
            </div>    
            <br>
            <span class="NotaFilme">Nota: ${filme.vote_average} estrelas</span>
                <br>
            <a href="https://www.themoviedb.org/${filme.media_type}/${filme.id}" target="_blank" style="text-decoration: none; color: #ef233c;">Saber mais....</a>
        </div>        
        `;}
    }
        
    };
        


    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto
}

function executaPesquisa(){
    let query = document.getElementById('search').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeFilmes;
    xhr.open('GET', `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=pt-BR&query=${query}&page=1`);
    xhr.send();
    
}

document.getElementById('btnPesquisa').addEventListener ('click', executaPesquisa);


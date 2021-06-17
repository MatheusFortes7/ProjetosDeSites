async function adicionaPoster(){
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=1d67b3bbb1493eacc10d061ff172b9ee&language=pt-BR`);
    const data = await response.json();
    const tela = document.querySelector('#filmesApi');
    

    tela.innerHTML = data?.results.map(filme => `
    <section class= "destaques">
          <div style="width: 400px;">
            <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                  <a href="https://www.themoviedb.org/movie/${filme.id}" target="blank" rel="noopener noreferrer"><img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt= filme-em-destaque ></a> 
                  </div>
                  <div class="flip-card-back">
                    <h1>${filme.title}</h1>
                    <p> Nota: ${filme.vote_average}</p>
                    <p>${filme.release_date}</p>
                    <a href="https://www.themoviedb.org/movie/${filme.id}" target="blank" rel="noopener noreferrer">Saber mais...</a>          
                  </div>
                </div>
              </div>
          </div>

    </section> 
    `).join('\n');
}






adicionaPoster();

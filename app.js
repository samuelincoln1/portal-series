const API_KEY = 'f1c54bec75b7904282b86747b216bc11';

function exibeCartaz() {

    let divCartaz = document.getElementById('IDcartaz');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    for (i=0; i<4; i++) {
        let filme = dados.results[i];
        texto = texto + `
            
        <div>
            <h3>${filme.title}</h3>
        </div>
        <div>
            <strong>Sinopse:</strong> ${filme.overview}
        </div>  
        <div>
        <strong>Data de lançamento:</strong> ${filme.release_date}
        </div>
        <br>
        `
    }

    divCartaz.innerHTML = texto;
}

function executaPesquisa() {

    let divCartaz = document.getElementById('IDcartaz');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    for (i=0; i<4; i++) {
        let filme = dados.results[i];
        texto = texto + `
            
        <div>
            <h3>${filme.title}</h3>
        </div>
        <div>
            <strong>Sinopse:</strong> ${filme.overview}
        </div>  
        <div>
        <strong>Data de lançamento:</strong> ${filme.release_date}
        </div>
        <div>
        <strong>Avaliação:</strong> ${filme.vote_average}
        </div>
        <br>
        `
    }

    divCartaz.innerHTML = texto;
}


onload = () => {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeCartaz;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1`);
    xhr.send();
    document.getElementById('btnPesquisa').addEventListener('click', pesquisa);
}       

function pesquisa() {
    let query = document.getElementById('txtPesquisa').value; 
    let search = new XMLHttpRequest();
    search.onload = executaPesquisa;
    search.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&page=1&include_adult=false&query=${query}`);
    search.send();
}       


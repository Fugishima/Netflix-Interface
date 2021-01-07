const API_KEY = 'dd651e5788855bd1f9df0b2ba048c76c';
const API_URL = 'https://api.themoviedb.org/3';

// Furção que forma a url para requisiçãode de dados para API e retorna o resultaddo em JSON.
const urlFecth = async (endpoint) =>{
    const req = await fetch(`${API_URL}${endpoint}`)
    const json = req.json()
    return json
}

const TMDb = {
    getList: async () =>{
        return [
            {
                slug: 'serie',
                title : "Série",
                items : await urlFecth(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title : "Recomendados para Você",
                items : await urlFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title : "Em Alta",
                items : await urlFecth(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title : "Ação",
                items : await urlFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title : "Comédia",
                items : await urlFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title : "Terror",
                items : await urlFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title : "Romance",
                items : await urlFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title : "Documentário",
                items : await urlFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },

    getInfo: async (id, type) =>{
        let info = {}
        if(id) {
            switch(type){
                case 'movie':
                    info = await urlFecth(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`)
                    break
                case 'tv':
                    info = await urlFecth(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`)
                    break
                default:
                    info = null
                    break
            }
        }

        return info
    }
}

export default TMDb
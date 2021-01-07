import React from 'react'
import './style.css'

const Spotlight = ({item}) => {
    // Variável que armazena a data de lançamento.
    let releaseDate = new Date(item.first_air_date)
    // Variável que armazena a sinopse.
    let overview = item.overview
    if(overview.length > 200) {
        overview = overview.substring(0,200) + '...'
    }
    // Variável que armazena a lista de gêneros do item em destaque.
    let genres = []
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return (
        <section className="spotlight" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}`
        }}>
            <div className="vertical">
                <div className="horizontal">
                    <div className="name">
                        {item.name}
                    </div>

                    <div className="info">
                        <div className="points">
                            {item.vote_average} pontos
                        </div>
                        <div className="year_release">
                            {releaseDate.getFullYear()}
                        </div>
                        <div className="seasons">
                            {item.number_of_seasons} temporada{item.number_of_season !== 1 ? 's' : ''}
                        </div>
                    </div>

                    <div className="overview">
                        {overview}
                    </div>

                    <div className="buttons">
                        <a href={`/watch/${item.id}`} className="watch_btn">
                            ▶ Assistir
                        </a>
                        <a href={`/list/add/${item.id}`} className="add_btn">
                            + Minha Lista
                        </a>

                        <div className="genres">
                            Gêneros: <strong>{genres.join(', ')}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Spotlight
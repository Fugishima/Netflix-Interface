import React, { useEffect, useState } from 'react'
import './style.css'

import TMDb from '../../connection/TMDb'

import Spotlight from '../Spotlight/index'
import Row from '../Row/index'

const App = () => {
    // Função que carrega as listas de séries e filmes.
    const [ genreList, setGenreList ] = useState([])
    useEffect(() => {
        const loadItems = async () => {
            let list = await TMDb.getList()
            setGenreList(list)
        }

        loadItems()
    }, [])

    // Função que define e carrega o item em destaque.
    const [ spotlightData, setSpotlightData ] = useState(null)
    useEffect(() => {
        const loadSpotlight = async () => {
            let list = await TMDb.getList()
            let series = list.filter(i => i.slug === 'serie')
            let randomizer = Math.floor(Math.random() * (series[0].items.results.length - 1))
            let chosen = series[0].items.results[randomizer]
            let chosenInfo = await TMDb.getInfo(chosen.id, 'tv')

            setSpotlightData(chosenInfo)
        }

        loadSpotlight()
    }, [])

    return (
        <div>
            {spotlightData &&
            <Spotlight item={spotlightData}/>
            }

            <section className="lists">
                {genreList.map((item, key) => (
                    <Row key={key} title={item.title} items={item.items}/>
                ))}
            </section>
        </div>
    )
}

export default App
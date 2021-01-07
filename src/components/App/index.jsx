import React, { useEffect, useState } from 'react'
import './style.css'

import TMDb from '../../connection/TMDb'

import Header from '../Header/index'
import Spotlight from '../Spotlight/index'
import Row from '../Row/index'
import Footer from '../Footer/index'
import Loading from '../Loading/index'

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

    // Função que define a opacidade do Header.
    const [ blackHeader, setBlackHeader ] = useState(false)
    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true)
            } else {
                setBlackHeader(false)
            }
        }

        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    return (
        <div>
            <Header isBlack={blackHeader}/>

            {spotlightData &&
            <Spotlight item={spotlightData}/>
            }

            <section className="lists">
                {genreList.map((item, key) => (
                    <Row key={key} title={item.title} items={item.items}/>
                ))}
            </section>

            <Footer/>

            {genreList.length <= 0 &&
                <Loading/>
            }

        </div>
    )
}

export default App
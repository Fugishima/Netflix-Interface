import React, { useEffect, useState } from 'react'
import './style.css'

import TMDb from '../../connection/TMDb'

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

    return (
        <div>
            <section className="lists">
                {genreList.map((item, key) => (
                    <Row key={key} title={item.title} items={item.items}/>
                ))}
            </section>
        </div>
    )
}

export default App
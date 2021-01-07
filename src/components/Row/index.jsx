import React, { useState } from 'react'
import './style.css'

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Row = ({title, items}) => {
    // Funções reponsáveis em movimentar as listas para direita e esquerda.
    const [ scrollX,setScrollX ] = useState(0)
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0) {
            x = 0
        }
        setScrollX(x)
    }
    const handleRighttArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listWidth = items.results.length * 150
        if(window.innerWidth - listWidth > x) {
            x = window.innerWidth - listWidth - 60
        }

        setScrollX(x)
    }

    return (
        <div className="row">
            <h2>
                {title}
            </h2>

            <div className="left_arrow" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="right_arrow" onClick={handleRighttArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className="list_area">
                <div className="list" style={{marginLeft: scrollX, width: items.results.length * 150}}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Row
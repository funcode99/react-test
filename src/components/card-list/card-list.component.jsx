import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.component'

export const CardList = (props) => 
    (
        <div className='card-list'>
            {props.monsters.map(monster => (    
            <Card key={monster.id} monster={monster} />    
        ))}  
        </div>
    )


    // monster di component 'Card' bakal dikirim ke fil card.component.jsx
    // jadi cardlist adalah parent dari card.component.jsx
    // props.monsters bisa diubah jadi props.fairytail, jadi CardList BISA DI REUSABLE
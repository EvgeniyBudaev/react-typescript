import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()

    return <>
        <h1>Страница информации</h1>
        <p>
            Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата
            Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке,
            обнаружение сходства атрибутируется Ричарду МакКлинток
        </p>
        <button
            className="btn"
            onClick={() => history.push('/')}
        >
            Обратно к списку дел
        </button>
    </>
}

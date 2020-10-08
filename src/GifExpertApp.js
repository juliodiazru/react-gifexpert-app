import React, { useState } from 'react'
import { AgregarCategorias } from './components/AgregarCategorias';
import GrillaGif from './components/GrillaGif';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AgregarCategorias setCategorias={setCategorias} />
            <hr />
            <ol>
                {
                    categorias.map(categoria => {
                        return <GrillaGif key={categoria} categoria={categoria} />;
                    })
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp

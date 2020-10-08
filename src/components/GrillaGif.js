import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { ItemGrillaGif } from './ItemGrillaGif';

const GrillaGif = ({ categoria }) => {

    const { loading, data: imagenes } = useFetchGifs(categoria);

    return (
        <>
            <h3>{categoria}</h3>
            { loading && <p>Cargando...</p>}
            { <div className="card-grid">
                {
                    imagenes.map(imagen => {
                        return <ItemGrillaGif key={imagen.id} {...imagen} />
                    })
                }
            </div>}
        </>
    )
}

GrillaGif.propTypes = {
    categoria: PropTypes.string.isRequired
}

export default GrillaGif;
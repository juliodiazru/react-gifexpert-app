import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AgregarCategorias = ({ setCategorias }) => {

    const [nombreCategoria, setNombreCategoria] = useState('');

    const manejarChangeNombreCategoria = (e) => setNombreCategoria(e.target.value);

    const manejadorSubmit = (e) => {
        e.preventDefault();
        agregarCategoria();
    }

    const agregarCategoria = () => {
        if (nombreCategoria.trim().length < 3) {
            console.warn('El nombre debe contener al menos 3 caracteres');
        } else {
            setCategorias(categoria => [nombreCategoria, ...categoria]);
            setNombreCategoria('');
        }
    };

    return (
        <form onSubmit={manejadorSubmit}>
            <input type="text" value={nombreCategoria} onChange={manejarChangeNombreCategoria}></input>
        </form>
    )

}

AgregarCategorias.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

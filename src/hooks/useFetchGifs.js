import { useEffect, useState } from "react"
import { obtenerGifs } from '../helpers/obtenerGifs';

export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        loading: true,
        data: []
    })

    useEffect(() => {
        obtenerGifs(categoria)
            .then((imagenes) => {
                setState({
                    loading: false,
                    data: imagenes
                })
            })
            .catch(e => console.warn(`Capturado ${e}`));
    }, [categoria])

    return state;
}
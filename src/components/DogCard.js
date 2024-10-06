import React from 'react';
import { ListaArrumada, DivdaDiv } from '../Styles/StyledComponents';

function DogCard({ dog , onClick }) {
    return(
        // card listado de cada cão quando a pagina é iniciada
        <ListaArrumada onClick={onClick} style={{ cursor: 'pointer'}}>
            {dog.image && <img src={dog.image.url} alt={dog.name} style={{width: '200px'}} />}
            <DivdaDiv>
                <h3>{dog.name}</h3>
            </DivdaDiv>
        </ListaArrumada>
    );
}

export default DogCard;

//componente para exibição de cada doguin

//Modal para exibir um popup das informações dos doguin
import React from "react";
import { ModalWrapper, ModalContent, ModalHeader, ModalCloseButton } from '../Styles/StyledComponents';

function Modal({dog, onClose}) {
    console.log(dog); // Verifique os dados do cachorro
    return (
        <ModalWrapper>
            <ModalContent>
                <ModalHeader>
                    <h2>{dog.name}</h2>
                    <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
                </ModalHeader>
                <img src={dog.image?.url || 'https://via.placeholder.com/300'} alt={dog.name}/>
                <p> <b> Temperamento: </b> {dog.temperament}</p>
                <p> <b> Peso: </b> {dog.weight.metric} Kg</p>
                <p> <b> Expectativa de Vida: </b> {dog.life_span}</p>
            </ModalContent>
        </ModalWrapper>
    );
}

export default Modal;
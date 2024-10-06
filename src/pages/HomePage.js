import React, { useEffect, useState } from "react";
import axios from "axios";
import DogCard from "../components/DogCard";
import { Header, Link, ImgTitulo, Tituloh1, DivCentralizadaNaTela, InputStyled } from "../Styles/StyledComponents";
import Modal from "../components/Modal";

function HomePage(){
    const [dogs, setDogs] = useState([]);
    const [erro, setErro] = useState(null);
    const [searchItem, setSearchItem] = useState('');
    const [filteredDogs, setFilteredDogs] = useState([]);
    const [selectedDog, setSelectedDog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const apiKey = 'live_j6w1t5GBZvDzPBSBMxV3jRJEOX15twB0C6te7t9NFVOeXBmTROpzJ6ongo23KKUY';

    const getDogs = () => {
        axios.get('https://api.thedogapi.com/v1/breeds', {
         headers: {
           'x-api-key': apiKey
         }
       })
       .then(res => {
         setDogs(res.data);
         setFilteredDogs(res.data); 
       })
       .catch(err => {
         setErro('Erro ao carregar dados dos cães'); 
       });
     }

    useEffect(() => {
        getDogs();
      }, []);
    
    const inputControlado = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchItem(searchValue);
    
        const filtered = dogs.filter(dog => dog.name.toLowerCase().includes(searchValue));
        setFilteredDogs(filtered);
    };

    const openModal = (dog) => {
        setSelectedDog(dog);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDog(null);
    };
    
    if (erro) {
        return <p>{erro}</p>;
    }

    return(
        <div className="App">
        <Header>
          <Link href="https://www.fbamicrochip.org.br/?gad_source=1&gclid=CjwKCAjwx4O4BhAnEiwA42SbVM-AQjIhWjMze0Ppbyx3c0Wbi5G32JsJ4FgINLXKA5irAjntSdFG6hoCkKQQAvD_BwE">
            <ImgTitulo src="https://static.vecteezy.com/system/resources/previews/016/761/892/non_2x/happy-smile-dog-images-png.png"/>
          </Link>
          <Tituloh1>CURIOSIDADES SOBRE DOGUINHOS</Tituloh1>
        </Header>

        <DivCentralizadaNaTela>
            <InputStyled
                type="text"
                placeholder="Insira a Raça do Cão"
                value={searchItem}
                onChange={inputControlado}
            />
        </DivCentralizadaNaTela>

        {filteredDogs.length > 0 ? (
            <ul>
                {filteredDogs.map((dog, index) => (
                    <DogCard key={index} dog={dog} onClick={() => openModal(dog)}/>
                ))}
            </ul>
        ) : (
            <p>O doguinho não foi achado</p>
          )}

          {isModalOpen && selectedDog && (
            <Modal dog={selectedDog} onClose={closeModal} />
          )}

        </div>
    );
}

export default HomePage;
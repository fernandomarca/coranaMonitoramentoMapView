import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import api from '../../services/api';
import axios from 'axios';
import { LeafletMouseEvent } from 'leaflet';
import Dropzone from '../../componets/Dropzone';

import './styles.css';


import logo from '../../assets/logo.png';


//para array ou objeto: manualmente informar o tipo de variavel 
//que será armazenada lá dentro 
interface Item {
    id: number,
    title: string,
    image_url: string,
}

interface IBGEUFResponse {
    sigla: string;
}

interface IBGEUFCityResponse {
    nome: string;
}


const CreatePoint = () => {

    //Declaração de Stados
    const [items, setItems] = useState<Item[]>([]);
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    // valores de stado dos campo do formulario    
    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);

    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: ''
    })

    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const history = useHistory();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            //console.log(position.coords);
            const { latitude, longitude } = position.coords;


            if ([latitude, longitude] != [0, 0]) {
                //     setSelectedPosition([latitude, longitude]);
                setInitialPosition([latitude, longitude]);
                setSelectedPosition([latitude, longitude]);
                //console.log('aqui if')
            } else {
                setInitialPosition([latitude, longitude]);
                setSelectedPosition(selectedPosition);
                //console.log('aqui else')
            }

            // if (coords2) {
            //     //setSelectedPosition(initialPosition);
            //     console.log('aqui if', coords2)
            //     //console.log(typeof (selectedPosition))
            // } else {
            //     //setInitialPosition([latitude, longitude]);
            //     console.log('aqui else');
            // }
        })
    }, [initialPosition])
    //imagem itens de coleta
    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data.serializedItems);
            //console.log(response)
        })
    }, []);
    //serviço IBGE api
    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufInitials = response.data.map(uf => uf.sigla);
            setUfs(ufInitials);
        });
    }, []);

    useEffect(() => {

        if (selectedUf === '0') {
            return;
        }
        axios.get<IBGEUFCityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
            .then(response => {
                const cityNames = response.data.map(cyte => cyte.nome);
                setCities(cityNames);
            });
    }, [selectedUf])

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;

        setSelectedUf(uf);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;

        setSelectedCity(city);
    }

    function handleMapClick(event: LeafletMouseEvent) {
        //console.log(event.latlng)
        setSelectedPosition([
            event.latlng.lat,
            event.latlng.lng,
        ])
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        //console.log(event.target, event.target.value);
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
        //console.log(formData);
    }

    function handleSelectItem(id: number) {
        //console.log(`${id}:'testes'`);
        setSelectedItems([id]);

        //const alreadySelected = selectedItems.findIndex(item => item === id);

        // if (alreadySelected >= 0) {
        //     const filteredItems = selectedItems.filter(item => item !== id);
        //     setSelectedItems(filteredItems);
        // } else {
        //     setSelectedItems([...selectedItems, id]);
        // }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        //console.log(selectedFile);

        const { name, email, whatsapp } = formData;
        const uf = selectedUf;
        const city = selectedCity;
        const [latitude, longitude] = selectedPosition;
        const items = selectedItems;

        const data = new FormData();

        data.append('name', name);
        data.append('email', email);
        data.append('whatsapp', whatsapp);
        data.append('uf', uf);
        data.append('city', city);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('items', items.join(','));

        if (selectedFile) {
            data.append('image', selectedFile)
        }

        //console.log(data);

        await api.post('points', data);

        alert('Ponto de coleta criado!');

        history.push('/');
    }

    const [selectedFile, setSelectedFile] = useState<File>();

    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />

                <Link to="/">
                    <FiArrowLeft size={24}></FiArrowLeft>
                    Voltar para home
                </Link>
            </header>

            <form onSubmit={handleSubmit}>
                <h1>Cadastro do Caso</h1>

                <Dropzone onFileUploaded={setSelectedFile} />

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="name">Nome completo</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleInputChange}
                        />

                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="whatsapp">Whatsapp</label>
                                <input
                                    type="text"
                                    name="whatsapp"
                                    id="whatsapp"
                                    placeholder="+5545999999999"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o Endereço no mapa</span>
                    </legend>

                    <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={selectedPosition} />
                    </Map>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select
                                name="uf"
                                id="uf"
                                value={selectedUf}
                                onChange={handleSelectUf}
                            >
                                <option value="0">Selecione um UF</option>
                                {ufs.map(uf => (
                                    <option key={uf} value={uf}>{uf}</option>
                                ))}
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="city">cidade</label>
                            <select
                                name="city"
                                id="city"
                                value={selectedCity}
                                onChange={handleSelectCity}
                            >
                                <option value="0">Selecione uma cidade</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>

                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Estado de saúde</h2>
                        <span>Selecione a condição abaixo</span>
                    </legend>

                    <ul className="items-grid">
                        {items.map(item => (
                            <li
                                key={item.id}
                                onClick={() => handleSelectItem(item.id)}
                                className={selectedItems.includes(item.id) ? 'selected' : ""}
                            >
                                <img src={item.image_url} alt={item.title} />
                                <span>{item.title}</span>
                            </li>))}
                    </ul>
                </fieldset>

                <button type="submit">
                    Cadastrar o Caso
                </button>
            </form>
        </div>
    );
}

export default CreatePoint;
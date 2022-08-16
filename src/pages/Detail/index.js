import React, { useEffect, useState } from 'react'
import Navbar from '../../components/base/Navbar'
import imagedefault from '../../../src/assets/images/imgdflt.png'
// import style from './detail.module.css'
import Button from '../../components/base/Button'
import Card from '../../components/base/Card'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState()

    async function fetchData() {
        try {
            const result = await axios({
                method: "GET",
                baseURL: "https://test.dengansenangteknologi.com/api/v1",
                url: `/pokemons/${id}`,
            });

            setPokemon(result.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(pokemon);

    return (
        <div className='h-100%'>
            <Navbar page="detail"></Navbar>
            <div className='addProduct container mb-5'>
                <div className="row">
                    <div className="col-4 text-center">
                        <div className="mt-5">
                            <img src={pokemon ? pokemon.avatar : imagedefault} alt="" />
                        </div>
                        <p className='mt-5' style={{ color: 'red' }}>Update Image</p>
                    </div>
                    <div className="col-8">
                        <Card className="mt-5">
                            <h4 className=''>Informasi Umum</h4>
                            <li className="list-group-item">
                                <label htmlFor="nomor" className="col-sm-2 col-form-label">
                                    <span className="fw-light">Nomor</span>
                                </label>
                                <p className='fw-bold'>{pokemon?.number}</p>
                            </li>
                            <li className="list-group-item">
                                <label htmlFor="types" className="col-sm-2 col-form-label">
                                    <span className="fw-light">Nama</span>
                                </label>
                                <p className='fw-bold'>{pokemon?.name}</p>
                            </li>
                            <li className="list-group-item">
                                <label htmlFor="classification" className="col-sm-2 col-form-label">
                                    <span className="fw-light">Types</span>
                                </label>
                                <div className='d-flex'>
                                    {pokemon?.types.map((type) => (
                                        <Button className="ms-3 p-1" borderRadius="5px" border="none" color="white" backgroundColor="#8BC34A">{type.name}</Button>
                                    ))}
                                </div>
                            </li>
                            <li className="list-group-item">
                                <label htmlFor="resisten" className="col-sm-2 col-form-label">
                                    <span className="fw-light">Resisten</span>
                                </label>
                                <div className='d-flex'>
                                    {pokemon?.resistances.map((resis) => (
                                        <Button className="ms-3 p-1" borderRadius="5px" border="none" color="white" backgroundColor="#453E3E">{resis.name}</Button>
                                    ))}
                                </div>
                            </li>
                        </Card>
                        <Card className='mt-4'>
                            <h4 style={{ color: "red" }}>Evolution</h4>
                            {pokemon?.evolutions.map((evo) => (
                                <div className='row'>
                                    <div className="col-6">
                                        <img className='img-fluid' src={evo.avatar && evo.avatar} alt="" />
                                    </div>
                                    <div className='col-6'>
                                    <p>{evo.number}</p>
                                    <p>{evo.name}</p>
                                    {evo.types.map((type) => (
                                        <Button className="ms-3 p-1" borderRadius="5px" border="none" color="white" backgroundColor="#8BC34A">{type.name}</Button>
                                    ))}
                                    </div>
                                </div>
                            ))}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
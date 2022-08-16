import React from 'react'
import Navbar from '../../components/base/Navbar'
import imagedefault from '../../../src/assets/images/imgdflt.png'
// import style from './addp.module.css'
import Button from '../../components/base/Button'
import Card from '../../components/base/Card'

const AddPokemon = () => {
    return (
        <div className='h-100%'>
            <Navbar></Navbar>
            <div className='addProduct container mb-5'>
                <div className="row">
                    <div className="col-4 text-center">
                        <div className="mt-5">
                            <img src={imagedefault} alt="" />
                        </div>
                        <p className='mt-5' style={{ color: 'red' }}>Tambah Image</p>
                    </div>
                    <div className="col-8">
                        <Card className="mt-5">
                            <h4 className=''>Informasi Umum</h4>
                            <li className="list-group-item">
                                <label htmlFor="nomor" className="col-sm-2 col-form-label">
                                    <span className="fw-light">Nomor</span>
                                </label>
                                <div className="col">
                                    <input type="text" className="form-control" name="nomor" id="nomor" />
                                </div>
                            </li>
                            <li className="list-group-item">
                                <label htmlFor="types" className="col-sm-2 col-form-label">
                                    <span className="fw-light">Types</span>
                                </label>
                                <div className="col">
                                    <input type="text" className="form-control" name="types" id="types" />
                                </div>
                            </li>
                            <li className="list-group-item">
                                <label htmlFor="classification" className="col-sm-2 col-form-label">
                                    <span className="fw-light">Classification</span>
                                </label>
                                <div className="col">
                                    <input type="text" className="form-control" name="classification" id="classification" />
                                </div>
                            </li>
                            <li className="list-group-item">
                                <label htmlFor="resisten" className="col-sm-2 col-form-label">
                                    <span className="fw-light">Resisten</span>
                                </label>
                                <div className="col">
                                    <input type="text" className="form-control" name="resisten" id="resisten" />
                                </div>
                            </li>
                        </Card>
                        <Card className='mt-4'>
                            <h4 style={{ color: "red" }}>Evolution</h4>
                            <Button width="60%" height="30px" color="white" backgroundColor="red" border="none">Tambah</Button>
                        </Card>
                        <div className='row mt-5'>
                            <div className='col text-end'>
                                <Button className="p-2" borderRadius="5px" border="1px solid red" color='red'>Batal</Button>
                            </div>
                            <div className="col text">
                                <Button className="p-2" backgroundColor="gray" borderRadius="5px" border="none" color='white'>Tambah</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPokemon
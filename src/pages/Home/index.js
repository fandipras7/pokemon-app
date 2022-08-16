import { React, useEffect } from 'react'
import Navbar from '../../components/base/Navbar'
import Card from '../../components/base/Card'
import defaultImage from '../../assets/images/default.png'
import style from './home.module.css'
import { getPokemon } from '../../config/redux/actions/listPokemon'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/base/Button'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const { pokemon } = useSelector((state) => state.listPokemon);
  const dispatch = useDispatch()
  function moveToDetailPokemon(id) {
    navigate(`/Detail/${id}`);
  }

  useEffect(() => {
    dispatch(getPokemon())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='fluid-container'>
      <Navbar page="home"></Navbar>
      <div className="container">
        <div className='col'>
          <div className="row justify-content-center row row-cols-5">
            {pokemon.map((item) => (
              <div className="col mt-5">
                <Card className={style.card_product} height="300px" key="1">
                  <p className='mt-3 ms-2'>{item.number}</p>
                  <div className="text-center">
                    <img style={{ height: "136px" }} src={item.avatar} class="img-fluid" alt="produk" />
                    <p style={{ color: "#E51C23" }} className='mt-2'>{item.name}</p>
                  </div>
                  <div className='d-flex justify-content-center'>
                  {item.types.map((type)=>(
                    <Button onClick={()=>{moveToDetailPokemon(item.uuid)}} className="ms-3 p-1" borderRadius="5px" border="none" color="white" backgroundColor="#8BC34A">{type.name}</Button>
                  ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
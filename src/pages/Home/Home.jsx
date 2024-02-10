import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, getCategory, getProductById, getProducts } from '../../api/Home/home';
import '../../App.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

function Home() {

  const dispatch = useDispatch()
  const category = useSelector((store) => store.Home.categories)
  const products = useSelector((store) => store.Home.products)

  useEffect(() => {
    dispatch(getCategory())
    dispatch(getProducts())
  }, [dispatch])



  return (
    <>

      <main className='px-[180px]'>
        <section>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='bg-[black] h-[400px] rounded-[8px]'
          >
            <SwiperSlide>
              <div className='bg1 px-[80px] py-[50px] pb-[90px] pl-[120px] pr-[600px] flex flex-col items-start gap-[80px]'>
                <div>
                  <h1 className='text-[36px] text-[#464646] font-[700]'>Лучшие стиральные машины</h1>
                  <p className='text-[22px] text-[#3b3b3bd3]'>Купите стиральную машину</p>
                </div>
                <Button
                  onClick={() => setOpenModal(true)}
                  sx={{
                    background: '#48a067', borderRadius: '10px', color: '#fff', display: "flex", gap: "5px", paddingY: '10px', fontSize: '16px', paddingX: '50px', textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#48a0678b",
                      color: "white",
                    },
                  }}
                >
                  Купить
                </Button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='bg2 px-[80px] py-[50px] pb-[90px] pl-[120px] pr-[600px] flex flex-col items-start gap-[80px]'>
                <div>
                  <h1 className='text-[36px] text-[#ffffff] font-[700]'>Избавьтесь <br /> от лишнего шума</h1>
                  <p className='text-[22px] text-[#ffffff]'>Купите</p>
                </div>
                <Button
                  onClick={() => setOpenModal(true)}
                  sx={{
                    background: '#48a067', borderRadius: '10px', color: '#fff', display: "flex", gap: "5px", paddingY: '10px', fontSize: '16px', paddingX: '50px', textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#48a0678b",
                      color: "white",
                    },
                  }}
                >
                  Купить
                </Button>
              </div>
            </SwiperSlide>

          </Swiper>

        </section>

        {/*  */}
        <section className='flex flex-col gap-[40px] py-[60px]'>
          <h1 className='text-[28px] font-[700]'>Популярные категории</h1>
          <div className='flex flex-wrap items-start gap-[50px] cursor-pointer'>
            {category.map((e) => {
              // console.log(e);
              if (e.categoryImage != null && e.categoryImage != '') {
                return (
                  <>
                    <div key={e.id} className='flex flex-col items-center w-[250px] gap-[10px] hover:text-[#48a067]'>
                      <div className='bg-[#d0e4dc55] w-[150px] overflow-hidden flex items-center justify-center h-[150px] rounded-[50%]'>
                        <img src={`${import.meta.env.VITE_APP_FILES_URL}${e.categoryImage}`} />
                      </div>
                      <h1 className='text-center'>{e.categoryName}</h1>
                    </div>
                  </>
                )
              }
            })}
          </div>
        </section>


        {/*  */}
        <section className='flex flex-col gap-[40px] py-[60px]'>
          <div className='flex items-center gap-[20px]'>
            <h1 className='text-[28px] font-[700]'>Самые горячие скидки 🔥</h1>
            <Link>
              <p className='text-[#48a067] tracking-[0.5px]'>Смотреть все</p>
            </Link>
          </div>
          <div className='flex flex-wrap items-start gap-[50px] cursor-pointer'>

            <div className='flex items-center gap-[100px]'>
              {products?.products?.map((el) => {
                return (
                  <>
                    <div key={el.id} className="w-[300px] flex flex-col items-start gap-[10px]">
                      <Link to={'/userId'} onClick={() => dispatch(getProductById(el.id))}>
                        <img src={`${import.meta.env.VITE_APP_FILES_URL}${el.image}`} />
                      </Link>
                      <div className='flex items-start gap-[5px] pt-[20px]'>
                        <h1 className='font-[700] tracking-[0.5px]'>{el.price} c.</h1>
                        <p className='text-[14px] text-[#80808083] tracking-[1px]' style={{ textDecoration: 'line-through' }}>{el.discountPrice} c.</p>
                      </div>
                      <Link to={'/userId'} onClick={() => dispatch(getProductById(el.id))}>
                        <h1 className='hover:text-[#48a067]'>{el.productName.slice(0, 34)}</h1>
                      </Link>
                      <Button
                        sx={{
                          background: '#48a067', borderRadius: '8px', color: '#fff', display: "flex", gap: "10px", paddingY: '5px', fontSize: '16px', paddingX: '20px', textTransform: "none",
                          "&:hover": {
                            backgroundColor: "#48a0678b",
                            color: "white",
                          },
                        }}
                        onClick={() => dispatch(addCart(el.id))}
                      >
                        <LocalGroceryStoreOutlinedIcon /> В корзину
                      </Button>
                    </div>
                  </>
                )
              })}
            </div>

          </div>
        </section>

      </main>
    </>
  )
}

export default Home
import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart, deleteCart, getCart, putMinus, putPlus } from '../../api/Home/home'

function Carzina() {

    const dispatch = useDispatch()
    const cart = useSelector((store) => store.Home.cart)
    console.log(cart);

    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    return (

        <>

            <div className='px-[200px] flex flex-col gap-[50px]'>
                {cart?.length > 0 ? (
                    <>
                        <button className='bg-[#48a067] w-[100px] rounded-[5px] text-white py-[5px]' onClick={() => {
                            dispatch(clearCart())
                        }}>Clear all</button>

                        {cart?.map((e) => {
                            console.log(e);
                            return (
                                <>
                                    <div className='flex items-center gap-[50px]' key={e.id}>
                                        <div className='w-[30%]'>
                                            <img src={`${import.meta.env.VITE_APP_FILES_URL}${e.product.image}`} alt="" />
                                        </div>
                                        <div className='flex flex-col items-start gap-[20px]'>
                                            <h1 className='text-[22px]'>{e.product.productName.slice(0, 39)}</h1>
                                            <div className='flex items-start gap-[5px]'>
                                                <h1 className='font-[700] tracking-[0.5px]'>{e.product.price} c.</h1>
                                                <p className='text-[14px] text-[#80808083] tracking-[1px]' style={{ textDecoration: 'line-through' }}>{e.product.discountPrice} c.</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <button className='bg-[#a0b0a5] hover:bg-[#48a067] w-[25px] rounded-[50%] text-white' onClick={() => dispatch(putMinus(e.id))}>-</button >
                                                <p>{e.quantity}</p>
                                                <button className='bg-[#a0b0a5] hover:bg-[#48a067] w-[25px] rounded-[50%] text-white' onClick={() => dispatch(putPlus(e.id))}>+</button>
                                            </div>
                                            <button
                                                className="bg-[red] text-white rounded-[8px] px-[30px] py-[5px] cursor-pointer"
                                                onClick={() => dispatch(deleteCart(e.id))}
                                            >Delete</button>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                    </>
                ) : (
                    <>
                        <div>
                            <h1 className='font-[700] text-[38px]'>Корзина</h1>
                            <div className='flex flex-col items-center gap-[15px] py-[60px]'>
                                <img src="src/assets/img/steel-shopping-trolley-90-liters-for-supermarkets.jpg" className="w-[200px]" />
                                <h1 className='font-[700] text-[32px]'>Внутри пока нет товаров</h1>
                                <p>Перейти в раздел с товарами, чтобы оставить заявку</p>
                                <Link to={'/catalogtvr'}>
                                    <Button
                                        onClick={() => setOpenModal(true)}
                                        sx={{
                                            background: '#48a067', borderRadius: '10px', color: '#fff', display: "flex", gap: "5px", paddingY: '15px', fontSize: '16px', paddingX: '30px', textTransform: "none",
                                            "&:hover": {
                                                backgroundColor: "#48a0678b",
                                                color: "white",
                                            },
                                        }}
                                    >
                                        Перейти в раздел
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div >

        </>
    )
}

export default Carzina
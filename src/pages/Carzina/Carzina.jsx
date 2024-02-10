import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart, deleteCart, putMinus, putPlus } from '../../api/Home/home'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


function Carzina() {

    const dispatch = useDispatch()
    const cart = useSelector((store) => store.Home.cart)
    const amount = useSelector((store) => store.Home.amount)
    console.log(amount);

    return (

        <>

            <div className='px-[200px] flex flex-col gap-[50px]'>
                {cart?.length > 0 ? (
                    <>
                        <button className='bg-[#48a067] w-[100px] rounded-[5px] text-white py-[5px]' onClick={() => {
                            dispatch(clearCart())
                        }}>Clear all</button>

                        <div className='w-[400px] p-[20px] bg-[#F7F8F9] rounded-[10px] self-end flex flex-col gap-[20px]'>
                            <div className='flex items-end gap-[10px] text-[14px] text-[#73787D]'>
                                <h1 className='flex'>Товары <span>({amount.totalProducts})</span></h1>
                                <div class="border-gray-300 border border-dashed w-full"></div>
                                <h1>{amount.totalPrice}</h1>
                            </div>
                            <div className='flex items-end gap-[10px] text-[14px] text-[#73787D]'>
                                <h1>Скидка</h1>
                                <div class="border-gray-300 border border-dashed w-full"></div>
                                <h1>{amount.totalDiscountPrice}</h1>
                            </div>

                            <div className='flex items-end gap-[10px]'>
                                <h1 className='text-[24px] font-[600]'>Итог</h1>
                                <div class="border-gray-300 border border-dashed w-full"></div>
                                <h1 className='text-[24px] font-[600]'>{amount.totalPrice}</h1>
                            </div>
                        </div>


                        {cart?.map((e) => {
                            console.log(e)
                            // x     qdispatch(setCnt(e.product.price))
                            return (

                                <section className='flex justify-between pb-[80px] '>
                                    <div className='flex items-center gap-[50px]' key={e.id}>
                                        <div className='w-[30%]'>
                                            <img src={`${import.meta.env.VITE_APP_FILES_URL}${e.product.image}`} alt="" />
                                        </div>
                                        <div className='flex flex-col items-start gap-[20px]'>
                                            <Link to={'/userId'}>
                                                <h1 className='text-[20px]'>{e.product.productName.slice(0, 39)}</h1>
                                            </Link>
                                            <div className='flex items-start gap-[5px]'>
                                                <h1 className='font-[700] tracking-[0.5px]'>{e.product.price} c.</h1>
                                                <p className='text-[14px] text-[#80808083] tracking-[1px]' style={{ textDecoration: 'line-through' }}>{e.product.discountPrice} c.</p>
                                            </div>
                                            <div className='flex items-center gap-[14px]'>
                                                <div className='flex items-center gap-[8px] border-[1px] rounded-[5px]'>
                                                    <button className='bg-[#dbe1dd] hover:bg-[#48a067] px-[10px] rounded-l-[4px] text-white'
                                                        onClick={() => dispatch(putMinus(e.id))}>-</button >
                                                    <p>{e.quantity}</p>
                                                    <button className='bg-[#dbe1dd] hover:bg-[#48a067] px-[10px] rounded-r-[4px] text-white'
                                                        onClick={() => dispatch(putPlus(e.id))}>+</button>
                                                </div>
                                                <button
                                                    onClick={() => dispatch(deleteCart(e.id))}
                                                ><DeleteOutlineOutlinedIcon className='text-[red]' /></button>
                                            </div>
                                        </div>
                                    </div >

                                    {/* amount */}

                                </section>
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
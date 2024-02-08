import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function UserById() {

    const productId = useSelector((store) => store.Home.productId)
    console.log(productId);


    return (
        <div className='px-[180px]'>

            <div className='flex items-center gap-[20px]'>
                <Link to={'/catalogtvr'}>
                    <h1 className='text-[#3E75A8] text-[14px]  hover:text-[#48a067]'>Каталог товаров</h1>
                </Link>
                <button className='text-[12px] font-[600] px-[6px]  rounded-[8px] py-[4px] text-[#009F64] bg-[#F1FFED]'>Бесплатная доставка</button>
            </div>

            <section className='py-[60px] flex gap-[50px]'>
                <aside>
                    <img src={`${import.meta.env.VITE_APP_FILES_URL} ${productId?.images}`} className="w-[500px]" />
                </aside>
                <aside className='flex flex-col gap-[20px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[5px]'>
                            <h1 className='text-[32px]'>{productId.productName.slice(0, 38)}</h1>
                            <p className='text-[gray]'>Код товара: {productId.code}</p>
                        </div>
                        <div className='flex items-start gap-[10px]'>
                            <h1 className='text-[32px] font-[600]'>{productId.price}</h1>
                            <p className='text-[20px] text-[gray]' style={{ textDecoration: ' line-through' }}>{productId.discountPrice}</p>
                        </div>
                        <p>{productId.description}</p>
                        <hr />
                        <h1><span className=' text-[gray] font-[600] pr-[20px]'>Бренд </span>{productId.brand}</h1>
                        <h1><span className=' text-[gray] font-[600] pr-[20px]'>Размер </span>{productId.size}</h1>
                        <h1><span className=' text-[gray] font-[600] pr-[20px]'>Размер </span>{productId.weight}</h1>
                    </div>

                </aside>
            </section>
        </div>
    )
}

export default UserById
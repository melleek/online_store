import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory, getCotegoryById } from '../../api/Home/home'


function ModalCat() {

    const dispatch = useDispatch()
    const category = useSelector((store) => store.Home.categories)
    const categoryId = useSelector((store) => store.Home.subCategory)
    console.log(categoryId);

    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])


    return (
        <>
            <Box sx={{ width: '100%', background: "#fff" }}>
                <section className='flex pb-[90px] items-start'>
                    <div className='bg-[#f5f4f4] py-[30px]'>
                        <div className='pl-[190px] flex flex-col items-start ' style={{ overflowY: 'scroll', maxHeight: '415px' }}>
                            {category?.map((e) => {
                                return (
                                    <>
                                        <div key={e.id}>
                                            <button className='hover:bg-[white] hover:text-[#48a067] rounded-l-[5px] text-[15px] text-start pl-[15px] py-[10px] w-[260px]' onMouseOver={() => dispatch(getCotegoryById(e.id))}>{e.categoryName}</button>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>

                    <div className='flex flex-wrap pl-[40px] py-[36px] items-start gap-[50px]'>
                        {categoryId?.subCategories?.map((e) => {
                            console.log(e);
                            return (
                                <div key={e.id} className='w-[200px] font-[600] hover:text-[#48a067]'>
                                    <h1>{e.subCategoryName}</h1>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </Box>
        </>
    )
}

export default ModalCat


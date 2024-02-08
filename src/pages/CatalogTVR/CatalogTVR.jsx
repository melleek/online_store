import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, getCotegoryById } from '../../api/Home/home';

function CatalogTVR() {

  const dispatch = useDispatch()
  const category = useSelector((store) => store.Home.categories)
  const categoryId = useSelector((store) => store.Home.subCategory)
  console.log(categoryId);

  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])


  return (
    <div className='px-[180px]'>
      <h1 className='font-[700] text-[38px]'>Каталог товаров</h1>
      <section className='flex flex-col gap-[40px] py-[60px]'>
        <div className='flex flex-wrap items-start gap-[50px] cursor-pointer'>
          {category.map((e) => {
            if (e.categoryImage != null && e.categoryImage != '') {
              return (
                <>
                  <div key={e.id} className='flex flex-col items-start w-[250px] gap-[10px]'>
                    <div className='bg-[#d0e4dc20] w-[150px] overflow-hidden flex items-center justify-center h-[150px] rounded-[50%]'>
                      <img src={`${import.meta.env.VITE_APP_FILES_URL}${e.categoryImage}`} />
                    </div>
                    <h1 className='text-start hover:text-[#48a067]'>{e.categoryName}</h1>
                    {categoryId?.subCategories?.map((el) => {
                      return <h1 className='text-[14px] text-[#73787D] hover:text-[#48a067]'>{el.subCategoryName}</h1>
                    })
                    }
                  </div>
                </>
              )
            }
          })}
        </div>
      </section>
    </div>
  )
}

export default CatalogTVR
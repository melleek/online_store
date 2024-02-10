import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

//mui modal tabs
import { Button, Modal, TextField, Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import ModalCat from '../components/ModalCat/ModalCat';
import { axiosRequest } from '../utils/axiosRequest';
import { saveToken } from '../utils/token';
import { useDispatch, useSelector } from 'react-redux';
import { getAmount, getCart } from '../api/Home/home';

function Layout() {
  const dispatch = useDispatch()

  //Category
  const [openModal, setOpenModal] = useState(false)

  const close = () => {
    setOpenModal(false)
  }

  //modal for Choose city
  const [cityModal, setCityModal] = useState(false)

  const openCityModal = () => {
    setCityModal(true)
  }

  const closeCityModal = () => {
    setCityModal(false)
  }

  //signUp 
  const [signUp, setSignUp] = useState(false)

  const openSignUp = () => {
    setSignUp(true)
  }

  const closeSignUp = () => {
    setSignUp(false)
  }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    let newUser = {
      userName: e.target['name'].value,
      password: e.target['password'].value
    }

    try {
      const { data } = await axiosRequest.post('Account/login', newUser, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      console.log(data);
      saveToken(data.data)
      navigate('/')
    } catch (error) {
      console.log(error);
    }

  }

  const cart = useSelector((store) => store.Home.cart)


  useEffect(() => {
    dispatch(getCart())
    dispatch(getAmount())
  }, [dispatch])

  return (
    <div className='w-[1519px] m-[auto]'>

      {/* header */}
      <header className='px-[180px] py-[20px] sticky bg-[white] z-20  top-0 shadow-sm'>
        <div className='flex justify-between'>
          <Link to={"/"}>
            <div className='flex items-center'>
              <img src="src/assets/icons/medium_334e082bf0c51bd70e1903d77c39fcc9.png" className="w-[60px]" />
              <h1 className='text-[20px]'><span className='font-[700]'>alif</span> shop</h1>
            </div>
          </Link>

          {/*  */}
          <div className='flex items-center gap-[20px]'>
            <Button
              onClick={() => setOpenModal(true)}
              sx={{
                background: '#48a067', color: '#fff', display: "flex", gap: "5px", paddingY: '10px', paddingX: '20px', textTransform: "none",
                "&:hover": {
                  backgroundColor: "#48a067",
                  color: "white",
                },
              }}
            >
              <FormatListBulletedIcon className='text-white' /> Каталог товаров
            </Button>

            <div className='flex items-center'>
              <div className='border-[2px] w-[500px] py-[5px] px-[10px] rounded-l-[5px] flex justify-between hover:border-[#48a067]'>
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true
                  }}
                  fullWidth
                  placeholder="название товара или артикул"
                  type='search'
                />
              </div>
              <button className='bg-[#48a067] py-[10px] px-[15px] rounded-r-[5px] ml-[-2px] hover:bg-[#48a0678b]'><SearchIcon className='text-white' /></button>
            </div>
          </div>

          {/*  */}
          <div className='flex items-center gap-[25px]'>
            <div className='flex flex-col items-center' onClick={openCityModal}>
              <button><PlaceOutlinedIcon /></button>
              <button className='hover:text-[#48a067] text-[14px] text-[#6f6f6f]'>Душанбе</button>
            </div>

            <div className='flex flex-col items-center' onClick={openSignUp}>
              <button><PersonOutlineOutlinedIcon /></button>
              <button className='hover:text-[#48a067] text-[14px] text-[#6f6f6f]'>Войти</button>
            </div>

            <Link to={'/carzina'}>
              <div className='flex items-start'>
                <div className='flex flex-col items-center justify-center'>
                  <LocalGroceryStoreOutlinedIcon />
                  <button className='hover:text-[#48a067] text-[14px] text-[#6f6f6f]'>Корзина</button>
                </div>
                <button className={cart?.length > 0 ? `bg-[red] rounded-[50%] mt-[-6px] p-[5px] text-white ml-[-21px] w-[15px] h-[15px] flex items-center justify-center text-[12px]` : `hidden`}>{cart?.length}</button>
              </div>
            </Link>

          </div>


        </div>
      </header>


      {/* main */}
      <main className='py-[20px]'>
        <Outlet />
      </main>


      {/* footer */}
      <footer className='bg-[black] px-[180px] pt-[60px] pb-[20px] text-white'>

        <div className='flex justify-between items-start border-b-[1px] border-[#363636] pb-[40px]'>

          {/*  */}
          <ul className='flex flex-col gap-[20px] text-[16px] font-[700]'>
            <li className='text-[14px] text-[#d2d2d2]'>Телефоны справочной службы</li>
            <li className='hover:text-[#48a067]'><button onClick={() => alert('Ooo 🥴,  вы до сих пор тут ?')}>900</button></li>
            <li className='hover:text-[#48a067]'><button onClick={() => alert('Почему вы хотите позвонить ? 🤨')}>+992 48-888-111</button></li>
            <Link to={'/'}>
              <li className='hover:text-[#48a067]'><button>@alifshop_tj</button></li>
            </Link>
          </ul>

          {/*  */}
          <ul className='flex flex-col gap-[20px] text-[16px]'>
            <Link to={'/catalogtvr'}>
              <li className='hover:text-[#48a067]'><button>Каталог товаров</button></li>
            </Link>

            <Link to={'/catalogtvr'}>
              <li className='hover:text-[#48a067]'><button>Смартфоны</button></li>
            </Link>

            <Link to={'/catalogtvr'}>
              <li className='hover:text-[#48a067]'><button>Телевизоры</button></li>
            </Link>
          </ul>

          {/*  */}
          <ul className='flex flex-col gap-[20px] text-[16px]'>

            <Link to={'/catalogtvr'}>
              <li className='hover:text-[#48a067]'><button>Стиральные машины</button></li>
            </Link>
            <Link to={'/catalogtvr'}>
              <li className='hover:text-[#48a067]'><button>Кондиционеры</button></li>
            </Link>
          </ul>


          {/*  */}
          <ul className='flex flex-col gap-[20px] text-[16px]'>
            <li className='text-[14px] text-[#d2d2d2]'>Мы в соцмедиа</li>
            <div>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </ul>
        </div>

        <div className='flex justify-between items-center py-[40px]'>
          <h2 className='text-[14px] text-[#d2d2d2]'>© 2024 ОАО «Алиф Банк». г. Душанбе, 101 мкр-н, ул. Багаутдинова, 9</h2>
          <h1 className='hover:text-[#48a067]'><button>support@alif.tj</button></h1>
        </div>

      </footer>



      {/*  */}
      <Modal
        open={openModal}
        onClose={close}
      >

        <main>
          <header className='px-[180px] py-[20px] sticky bg-[white] z-20  top-0'>
            <div className='flex justify-between'>
              <Link to={"/"} onClick={() => close()}>
                <div className='flex items-center'>
                  <img src="src/assets/icons/medium_334e082bf0c51bd70e1903d77c39fcc9.png" className="w-[60px]" />
                  <h1 className='text-[20px]'><span className='font-[700]'>alif</span> shop</h1>
                </div>
              </Link>

              {/*  */}
              <div className='flex items-center gap-[20px]'>
                <Button
                  onClick={() => setOpenModal(false)}
                  sx={{
                    background: '#48a067', color: '#fff', display: "flex", gap: "5px", paddingY: '10px', paddingX: '20px', textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#48a067",
                      color: "white",
                    },
                  }}
                >
                  <CloseIcon className='text-white' /> Каталог товаров
                </Button>

                <div className='flex items-center'>
                  <div className='border-[2px] w-[500px] py-[5px] px-[10px] rounded-l-[5px] flex justify-between hover:border-[#48a067]'>
                    <TextField
                      variant="standard"
                      InputProps={{
                        disableUnderline: true
                      }}
                      fullWidth
                      placeholder="название товара или артикул"
                      type='search'
                    />
                  </div>
                  <button className='bg-[#48a067] py-[10px] px-[15px] rounded-r-[5px] ml-[-2px] hover:bg-[#48a0678b]'><SearchIcon className='text-white' /></button>
                </div>
              </div>

              {/*  */}
              <div className='flex items-center gap-[25px]'>
                <div className='flex flex-col items-center' onClick={openCityModal}>
                  <button><PlaceOutlinedIcon /></button>
                  <button className='hover:text-[#48a067] text-[14px] text-[#6f6f6f]'>Душанбе</button>
                </div>

                <div className='flex flex-col items-center' onClick={openSignUp}>
                  <button><PersonOutlineOutlinedIcon /></button>
                  <button className='hover:text-[#48a067] text-[14px] text-[#6f6f6f]'>Войти</button>
                </div>

                <Link to={'/carzina'} onClick={close}>
                  <div className='flex flex-col items-center hover:text-[#48a067] '>
                    <button><LocalGroceryStoreOutlinedIcon /></button>
                    <button className='text-[14px] text-[#6f6f6f]'>
                      Корзина
                    </button>
                  </div>
                </Link>
              </div>


            </div>
          </header>


          <ModalCat />
        </main>

      </Modal>


      {/* cityModal */}
      <Dialog
        open={cityModal}
        onClose={closeCityModal}
      >
        <div className='py-[20px] px-[30px] w-[500px]'>
          <div className='flex flex-col items-end'>
            <button>
              <CloseIcon onClick={closeCityModal} className='hover:text-[#48a067]' />
            </button>
          </div>

          <div className='flex flex-col gap-[20px] py-[20px]'>
            <h1 className='font-[500] text-[18px]'>Выберите ваш город</h1>
            <div className='flex flex-wrap gap-[20px]'>
              <button className='w-[210px] py-[16px] bg-[#F3F4F5] hover:bg-[#ebebf0] rounded-[8px]'>Душанбе</button>
              <button className='w-[210px] py-[16px] bg-[#F3F4F5] hover:bg-[#ebebf0] rounded-[8px]'>Худжанд</button>
              <button className='w-[210px] py-[16px] bg-[#F3F4F5] hover:bg-[#ebebf0] rounded-[8px]'>Вахдат</button>
              <button className='w-[210px] py-[16px] bg-[#F3F4F5] hover:bg-[#ebebf0] rounded-[8px]'>Турсунзаде</button>
              <button className='w-[210px] py-[16px] bg-[#F3F4F5] hover:bg-[#ebebf0] rounded-[8px]'>Гиссар</button>
              <button className='w-[210px] py-[16px] bg-[#F3F4F5] hover:bg-[#ebebf0] rounded-[8px]'>Бохтар</button>
              <button className='w-[210px] py-[16px] bg-[#F3F4F5] hover:bg-[#ebebf0] rounded-[8px]'>Куляб</button>
              <button className='w-[210px] py-[16px] bg-[#F3F4F5] hover:bg-[#ebebf0] rounded-[8px]'>Истарафшан</button>
              <button className='w-[210px] py-[16px] bg-[#F3F4F5] hover:bg-[#ebebf0] rounded-[8px]'>Исфара</button>
              <button className='w-[210px] py-[16px] bg-[#F3F4F5] hover:bg-[#ebebf0] rounded-[8px]'>Канибадам</button>
              <button className='w-[210px] py-[16px] bg-[#F3F4F5] hover:bg-[#ebebf0] rounded-[8px]'>Пенджикент</button>
            </div>
          </div>
        </div>
      </Dialog>

      {/* signUpModal */}
      <Dialog
        open={signUp}
        onClose={closeSignUp}
      >
        <div className='px-[20px] py-[20px] w-[350px]'>
          <div className='flex items-centr justify-between'>
            <h1 className='font-[700]'>Вxoд</h1>
            <CloseIcon onClick={closeSignUp} className='hover:text-[#48a067]' />
          </div>

          <div className='flex flex-col items-center py-[20px] pt-[40px]'>
            <div className='w-[240px] tracking-[0.5px] flex flex-col items-center  gap-[10px]'>
              <h1 className='text-center font-[700]'>Введите имя и пароль</h1>
            </div>
          </div>
          <form action="" onSubmit={handleSubmit} className='flex flex-col gap-[20px]'>
            <TextField
              placeholder='Name'
              type='text'
              label='Name*'
              id='name'
              name='name'
              autoFocus
              autoComplete='name'
            />
            <TextField
              placeholder='Password'
              type='password'
              label='Password*'
              id='password'
              name='password'
              autoFocus
              autoComplete='password'
            />
            <button className='py-[16px] bg-[#F3F4F5] hover:bg-[#48a067] hover:text-white rounded-[8px] font-[700]' onClick={closeSignUp} type='submit'>Войти</button>
          </form>
        </div>
      </Dialog>

    </div>
  )
}

export default Layout
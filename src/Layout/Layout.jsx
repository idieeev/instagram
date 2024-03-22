import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  faHouse,
  faMagnifyingGlass,
  faBars,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import navMessages from "../assets/icons/nav-messages.svg";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Avatar, TextField } from "@mui/material";
import navProfile from "../assets/images/polzovatel.jpg";
import Switcher from "../components/switcher/Switcher";
import ClearIcon from "@mui/icons-material/Clear";
import video from '/src/assets/video/i.mp4'

// import search from "../pages/search/search";

import AOS from "aos";
import "aos/dist/aos.css";
import HomeIcon from "../icons/Layout/HomeIcon";
import ReelsIcon from "../icons/Layout/ReelsIcon";
import MessageIcon from "../icons/Layout/MessageIcon";
import { destroyToken, getToken } from "../utils/token";
import { Link, NavLink, Outlet, useLocation, useNavigate, useNavigation } from "react-router-dom";
import instagram from "/src/assets/images/Instagram_logo.svg.png";
import empty from "/src/assets/images/empty.png";
import { axiosRequest } from "../utils/axiosRequest";
import axios from "axios";
import "../App.css";
import MySearch from "../components/switcher/search/MySearch";
import SettingsIcon from '@mui/icons-material/Settings';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useFormik } from "formik";
import Natification from "../pages/natification/Natification";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const Layout = () => {
  // Функция для модального окна "Еще"


  const location = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate()
  let [followingState, setFollowingState] = useState(false);

  
  const [searchMod, setSearchMod] = useState(false);
  const [notMod , setNotMod] = useState(false)


  const [addModal , setAddModal] = useState(false)
  const [modal , setModal] = useState(false)
  const [img , setImg] = useState('')
  const [img2 , setImg2] = useState('')
  const [data , setData] = useState([])
  const [files , setFiles] = useState([])
  const [moreModal , setMoreModal] = useState(false)
  const [settingModal , setSettingModal] = useState(false)

  const [title , setTitle] = useState("")
  const [content , setContent] = useState("")

  window.addEventListener("contextmenu" , (e) =>
  {
    e.preventDefault()
    setMoreModal(false)
  })

  const instagramImage = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSv12zsR0f_vwY04_loHy2jXobpZqGriqQh_5OW8YBEg0lsOVkj'
  const imgVideo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMRvzkZRjUK9m5MdeLSNPePkbddT-kBUiGQ&usqp=CAU"

  // const myId = getToken().sid;

  function reader(e)
  {

    for(let i = 0 ; i <= e.target.files.length ; i++)
    {
      const file = e.target.files[i];
      // setFiles(e.target.files[0])
      setFiles(e => [...e , file])

      if (file)
      {
        const reader = new FileReader();
        
        reader.readAsDataURL(file);
        reader.onload = (e) =>
        {
          const base64 = e.target.result;
          // setImg(base64);
          setData(prevData => [...prevData, base64]);
       
          // setData([...data , base64])
          // console.log(base64);
        };
        
        setAddModal(false)
        setModal(true)
      }
      
    }
  }
  async function post()
  {
    let form = new FormData()
    form.append("Title" , title)
    form.append("Content" , content)
    // form.append("Images" , files)
    for(let i = 0 ; i < files.length - 1 ; i++)
    {
      form.append("Images" , files[i])
      console.log(files[i]);
    }

    try
    {
        let {data} = await axiosRequest.post(`Post/add-post` , form , 
        {
          "Content-Type":"Multipart/form-data"
        })
        console.log(data.statusCode , title , content);
        setModal(false)
        setData(e => [...e , imgVideo])
        setSettingModal(false)
    }
    catch(error)
    {
        console.log(error);
    }
  }
  function Logout()
  {
    destroyToken("access_token")
    navigation("/")
  }
  

  useEffect(() => {
    AOS.init();
    setImg(empty)
  }, []);

  return (
    // Главный контейнер
    <main className="flex justify-between dark:bg-black dark:text-white ">
      {/* Флекс контейнер */}
      {/* Navbar */}
      <aside
        className={`left ${
          location.pathname === "/basic/message" ||
          location.pathname === "/basic/message/newMessage" ||
          searchMod === true ||
          notMod === true
            ? "w-[6%]"
            : "w-[19%]"
        }`}
      >
        {/* Панель навигации */}
        <div
          className={`${
            location.pathname === "/basic/message" ||
            location.pathname === "/basic/message/newMessage" ||
            searchMod === true ||
            notMod === true
              ? "w-[6%]"
              : "w-[19%]"
          } panel-navigation fixed py-[34px] px-[15px] h-[100vh]  border-r-[1px] border-[#d8d8d8]`}
        >
          <ul
            className={`${
              "modalSearch" ? "items-start gap-[16.5px]" : "items-stretch"
            } flex flex-col gap-[2.3vh_0] ml-[5px]`}
          >
            {/* Logo */}
            <Link to="/basic">
              <li
                className={` ml-[5px]  mb-[3vh] ${
                  location.pathname === "/basic/message" ||
                  location.pathname === "/basic/message/newMessage" ||
                  searchMod === true ||
                  notMod === true
                    ? "hidden"
                    : "block"
                }`}
              >
                <img
                  src={instagram}
                  alt="adasd"
                  className={` w-[54%] ${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage" ||
                    searchMod === true ||
                    notMod === true
                      ? "hidden"
                      : "block"
                  }`}
                />
              </li>

              {/* instagram icon */}
              <li  className={`px-[7px]  mb-[5.4vh] ${
                  location.pathname === "/basic/message" ||
                  location.pathname === "/basic/message/newMessage" ||
                  searchMod === true ||
                  notMod === true
                    ? "block"
                    : "hidden"
                }`} onClick={() => setSearchMod(false)}>
                <InstagramIcon sx={{ fontSize: "30px" }} />
              </li>
            </Link>


            <NavLink to="/basic" onClick={() => setSearchMod(false)}>
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                {/* <img src={navHome} alt="" /> */}
                <HomeIcon />
                {/* <FontAwesomeIcon icon={faHouse} className="text-[25px]" /> */}
                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage" ||
                    searchMod === true||
                    notMod === true
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Главная
                </p>
              </li>
            </NavLink>

            {/* <search/> */}
            {searchMod ? (
              <li
                onClick={() => {setSearchMod(false) , setNotMod(false)}}
                className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-[22px]"
                />

                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage" ||
                    searchMod === true||
                    notMod === true
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Поисковой запрос
                </p>
              </li>
            ) : (
              <li
                onClick={() => {setSearchMod(true) , setNotMod(false)}}
                className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-[22px]"
                />

                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage" ||
                    searchMod === true||
                    notMod === true
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Поисковой запрос
                </p>
              </li>
            )}

            <Link to="explore" onClick={() => setSearchMod(false)}>
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <ExploreOutlinedIcon sx={{ fontSize: "25px" }} />
                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage" ||
                    searchMod === true||
                    notMod === true
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Интересное
                </p>
              </li>
            </Link>

            <NavLink to="reels" onClick={() => setSearchMod(false)}>
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                {/* <img src={navReels} alt="" className="w-[25px]" /> */}
                <ReelsIcon />
                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage" ||
                    searchMod === true ||
                    notMod === true
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Reels
                </p>
              </li>
            </NavLink>

            <NavLink to="message" onClick={() => setSearchMod(false)}>
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                {/* <img src={navMessages} alt="" className="w-[25px]" /> */}
                <MessageIcon />
                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage" ||
                    searchMod === true||
                    notMod === true
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Сообщения
                </p>
              </li>
            </NavLink>

            {
              notMod ?
              <li onClick={() => {setNotMod(false) , setSearchMod(false)}} className="flex cursor-pointer items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <FontAwesomeIcon icon={faHeart} className="text-[25px]" />
                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage" ||
                    searchMod === true||
                    notMod === true
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Уведомления
                </p>
              </li> : 
              <li onClick={() => {setNotMod(true) , setSearchMod(false)}} className="flex cursor-pointer items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <FontAwesomeIcon icon={faHeart} className="text-[25px]" />
                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage" ||
                    searchMod === true||
                    notMod === true
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Уведомления
                </p>
              </li>
              
            }

            {/* create  */}
            <li
              onClick={() => {
                setSearchMod(false)
                setAddModal(true);
              }}
              className="flex items-center cursor-pointer gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300"
            >
              <AddBoxOutlinedIcon />
              <p
                className={`${
                  location.pathname === "/basic/message" ||
                  location.pathname === "/basic/message/newMessage" ||
                  searchMod === true||
                  notMod === true
                    ? "hidden"
                    : "block"
                }`}
              >
                Создать
              </p>
            </li>

            <NavLink to="profile">
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <Avatar
                  src={navProfile}
                  sx={{ width: "25px", height: "25px" }}
                />
                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage" ||
                    searchMod === true||
                    notMod === true
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Профиль
                </p>
              </li>
            </NavLink>

            <li onClick={() => setMoreModal(!moreModal)} className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] px-[14px] transition-all duration-300 cursor-pointer">
              <FontAwesomeIcon icon={faBars} className="text-[20px]" />
              <p
                className={`${
                  location.pathname === "/basic/message" ||
                  location.pathname === "/basic/message/newMessage" ||
                  searchMod === true||
                  notMod === true
                    ? "hidden"
                    : "block"
                }`}
              >
                Ещё
              </p>
            </li>
          </ul>
        </div>
      </aside>
      {/* searchmodal  */}
      {searchMod ? (
        <MySearch state={setSearchMod} />
      ) : 
      null}
      {notMod ? (
        // <div className="absolute w-[100%] h-[100vh]">
        <Natification />
      ) : // </div>
      null}

      <div></div>

      {/* Контентная часть */}






      <aside 
      // className="right w-[94%]"
        className={`${
          location.pathname === "/basic/message" ||
          location.pathname === "/basic/message/newMessage" ||
          searchMod === true
            ? "w-[94%]"
            : "w-[81%]"
        }`}
      >




        <Outlet />
        {/* Футер */}

        {/* <footer  className="py-[10px]">
  
          <ul className="flex flex-wrap items-center justify-center gap-x-[10px] mx-auto w-[55%]">
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Meta
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Информация
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Блог
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Вакансии
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Помощь
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                API
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Конфиденциальность
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Условия
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Места
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Instagram Lite

              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Threads
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Загрузка контактов и лица, не являющиеся пользователями
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Meta Verified
              </a>
            </li>
          </ul>
          <div className="product-info flex justify-center gap-[10px] mx-auto mt-[20px]">
       
            <div className="localization flex gap-[10px]">
              <a href="" className="text-[12px] text-[#8D8D86]">
                Русский
              </a>
            </div>
            <p className="text-[12px] text-[#8D8D86]">
              © 2023 Instagram from Meta
            </p>
          </div>
        </footer> */}
      </aside>
      {
        addModal ?
        (
          <div className="z-20 fixed w-[100%] h-[100%] top-0 right-0 bg-[#0000008F] p-[20px]" onClick={() => {setAddModal(false) , setFiles([]) , setData([])}}>
            <p className="text-[30px] cursor-pointer text-end text-gray-400" onClick={() => {setAddModal(false) , setFiles(e => []) , setData(e => []) , setAddModal(false) , setModal(false) , setSettingModal(false)}}>X</p>
          </div>
        ) : null
      }
      {
        modal ?
        (
          <div onClick={() => {setModal(false) , setFiles([]) , setData([])}} className="z-20 fixed w-[100%] h-[100%] top-0 right-0 bg-[#0000008F] text-gray-400 p-[20px]">
            <p className="text-[30px] text-end cursor-pointer" onClick={() => {setModal(false) , setFiles([]) , setData([]) , setModal(false) , setAddModal(false) , setSettingModal(false)}}>X</p>
          </div>
        ) : null
      }
      {
        settingModal ?
        (
          <div onClick={() => {setModal(false) ,setSettingModal(false) , setFiles([]) , setData([])}} className="z-20 fixed w-[100%] h-[100%] top-0 right-0 bg-[#0000008F] text-gray-400 p-[20px]">
            <p className="text-[30px] text-end cursor-pointer" onClick={() => {setModal(false) , setFiles([]) , setData([]) , setModal(false) , setAddModal(false) , setSettingModal(false)}}>X</p>
          </div>
        ) : null
      }
      {
        addModal ?
        (
          <div className="overflow-hidden bg-[white] fixed top-[10%] w-[36%] right-[32%] rounded-xl z-50">
            <div className="flex items-center p-[10px] border-b-[#d5d1d1] border-b-[1px] justify-center">
              <p className="text-[20px] font-[500]">Create new post</p>
              {/* <p className="text-[30px] cursor-pointer" onClick={() => setAddModal(false)}>X</p> */}
            </div>
            <div className="flex flex-col items-center gap-3 py-[180px]">
              <img src={instagramImage} className="w-[110px] h-[100px]" alt="Picture" />
              <p className="text-[20px] ">Drag photos and videos here</p>
              {/* <button className="bg-[#3B82F6] text-[white] text-[20px] rounded-xl p-[10px_50px]">Select from computer</button> */}
              <label htmlFor="img" className="bg-[#3b9ff6] hover:bg-[#3262ff] text-[white] text-[18px] rounded-md p-[5px_20px] cursor-pointer">Select from computer</label>
            </div>
            <input multiple onChange={(e) => reader(e)} type="file" id="img" className="hidden" />
          </div>
        ) : null
      }
      {
        modal ?
        (
          <div className="overflow-hidden bg-[white] fixed top-[10%] w-[36%]  right-[32%] rounded-xl z-50 ">
            <div className="flex items-center p-[10px] justify-between border border-[gray]">
              {/* <p className="text-[30px] font-[600] cursor-pointer" onClick={() => setModal(false)}>X</p> */}
              <p>hello</p>
              <p className="text-[20px] font-[500]">Trim</p>
              <p className="text-[18px] text-[#3B82F6] hover:text-black cursor-pointer" onClick={() => {setSettingModal(true) , setModal(false) ,setAddModal(false)}}>Next</p>
            </div>
            <Swiper className="mySwiper p-[0] m-0">
              {
                data.length > 0 && data?.map((el , i)=>
                {
                  let split = files[i]?.name.split(".")
                    if(split && split.length > 0)
                    {
                      let last = split[split.length - 1]?.toLowerCase()
                      let vidoeFiles = ['mp4', 'avi', 'mov', 'wmv', 'flv']
                      if(vidoeFiles.includes(last))
                      {
                        return(
  
                        <SwiperSlide key={i} className="m-0 h-[70svh]">
                          <video autoPlay loop className="w-[100%] h-[100%] bg-black">
                            <source type="video/mp4" className="w-[100%] h-[100%]"  src={`${URL.createObjectURL(files[i])}`} onError={(error) => console.log(error)} />
                          </video> 
                        </SwiperSlide>
                        )
                      }
                      else
                      {
                        return(
                          <SwiperSlide key={i} className="m-0 h-[70svh]">
                            <img src={el} className="w-[100%] h-[100%] " alt="Picture" />
                          </SwiperSlide>
                        )
                      }
                    }
                    // let imageFiles = ['jpg', 'jpeg', 'png', 'gif', 'bmp']
                  
                })
              }
            </Swiper>

            
            {/* <img src={img} className="w-[100%] h-[61.4svh]" alt="Picture" /> */}
          </div>
        ) : null
      }
      {
        settingModal ?
        (
          <div className="overflow-hidden bg-[white] fixed top-[10%] w-[60%]  right-[20%] rounded-xl z-50 ">
            <div className="flex items-center p-[10px] justify-between border border-[gray]">
              {/* <p className="text-[30px] font-[600] cursor-pointer" onClick={() => setModal(false)}>X</p> */}
              <p>hello</p>
              <p className="text-[20px] font-[500]">Trim</p>
              <p className="text-[18px] text-[#3B82F6] hover:text-black cursor-pointer" onClick={() => post()}>Post</p>
            </div>
            <div className="flex">
              <Swiper style={{width:"63%" , padding:"0"}} className="mySwiper">
                {
                  data.length > 0 && data?.map((el , i)=>
                  {
                    let split = files[i]?.name.split(".")
                    if(split && split.length > 0)
                    {
                      let last = split[split.length - 1]?.toLowerCase()
                      let vidoeFiles = ['mp4', 'avi', 'mov', 'wmv', 'flv']
                      if(vidoeFiles.includes(last))
                      {
                        return(
  
                        <SwiperSlide key={i} className="m-0 h-[70svh]">
                          <video autoPlay loop className="w-[100%] h-[100%] bg-black">
                            <source type="video/mp4" className="w-[100%] h-[100%]"  src={`${URL.createObjectURL(files[i])}`} onError={(error) => console.log(error)} />
                          </video> 
                        </SwiperSlide>
                        )
                      }
                      else
                      {
                        return(
                          <SwiperSlide key={i} className="m-0 h-[70svh]">
                            <img src={el} className="w-[100%] h-[100%] " alt="Picture" />
                          </SwiperSlide>
                        )
                      }
                    }
                    // let imageFiles = ['jpg', 'jpeg', 'png', 'gif', 'bmp']
                    
                  })
                }
              </Swiper>
              <div className="w-[37%]  flex flex-col">
                <div className="border-y border-y-[gray]">
                  <div onInput={(e) => setTitle(e.target.innerHTML)} aria-label="Enter your name" contentEditable="true" role="textbox" className="w-[100%] h-[30svh]  break-words outline-none text-[20px]"></div>
                  <div className=" p-[10px] h-[5svh]  flex justify-between items-center">
                    <SentimentSatisfiedAltIcon  style={{color:"#ccc"}} />
                    <p className="text-[#ccc]">0/2 000</p>
                  </div>
                </div>
                <div className="h-auto">
                  <div className="flex border-y boder-y-[#ccc] items-center">
                    <input className=" w-[90%] h-[6svh] px-[4%] text-[20px] outline-none text-gray-500" type="text" placeholder="Add location" />
                    <LocationOnOutlinedIcon style={{color:"gray"}}/>
                  </div>
                  <input value={title} onChange={(e) => setTitle(e.target.value)} className=" w-[100%] h-[6svh] px-[4%] text-[20px] outline-none border-y-[1px] border-y-[#ccc] text-gray-500" type="text" placeholder="Enter title" />
                  <input className=" w-[100%] h-[6svh] px-[4%] text-[20px] outline-none border-y-[1px] border-y-[#ccc] text-gray-500" type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter your comment" />
                </div>
              </div>
            </div>

            
            {/* <img src={img} className="w-[100%] h-[61.4svh]" alt="Picture" /> */}
          </div>
        ) : null
      }
      {
        moreModal ?
        (

          <div className="bg-white shadow-2xl p-[20px] rounded-[20px] w-[22%] fixed bottom-[170px] left-[20px] flex flex-col gap-3 items-start">
            <button className=" flex px-[5%] w-[100%] rounded-md bg-[#f2f2f2] hover:bg-[#ccc] text-[20px]  py-[10px] gap-[20px] item-center" onClick={() => {navigation("profile/account/settings") , setMoreModal(false)}}> <SettingsIcon/> Setting</button>

            <button className=" flex px-[5%] w-[100%] rounded-md bg-[#f2f2f2] hover:bg-[#ccc] text-[20px]  py-[10px] gap-[20px] item-center">  Your Actions</button>
            <button className=" flex px-[5%] w-[100%] rounded-md bg-[#f2f2f2] hover:bg-[#ccc] text-[20px]  py-[10px] gap-[20px] item-center">  Saved</button>
            <button className=" flex px-[5%] w-[100%] rounded-md bg-[#f2f2f2] hover:bg-[#ccc] text-[20px]  py-[10px] gap-[20px] item-center"> <Switcher/> </button>
            <button className=" flex px-[5%] w-[100%] rounded-md bg-[#f2f2f2] hover:bg-[#ccc] text-[20px]  py-[10px] gap-[20px] item-center">  Change theme</button>
            <button className=" flex px-[5%] w-[100%] rounded-md bg-[#f2f2f2] hover:bg-[#ccc] text-[18px]  py-[10px] gap-[10px] item-center" onClick={() => {navigation("/basic/security") , setMoreModal(false)}}><ShieldOutlinedIcon/> password and security</button>
            <hr className="border border-[gray] my-[-10px]" />
            <button className="flex px-[5%] w-[100%] rounded-md bg-[#f2f2f2] hover:bg-[#ccc] text-[20px] text-[red] py-[10px]" onClick={() => Logout()}>Log out</button>
          </div>
        ) : null
      }
    </main>
  );
};

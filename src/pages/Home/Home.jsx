import React, { useEffect,useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addCommentFromUser, getAllUser, getFollow, getHistory, getLike, getSav, getTodosByPost12, getUserAbout } from '../../api/home/home'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';


// import required modules
import { Navigation } from 'swiper/modules';

import imgMore from "/src/assets/imgHome/More.svg"
import playVideoImg from "/src/assets/imgHome/Vector.svg"
import volumeMute from "/src/assets/imgHome/volume_off.svg"
import volumeNotMute from "/src/assets/imgHome/volume_up.svg"
import heart from "/src/assets/imgHome/8666647_heart_icon.png"
import heartActive from "/src/assets/imgHome/heartAcive.png"
import chat1 from "/src/assets/imgHome/chat2.svg"
import send from "/src/assets/imgHome/send.svg"
import sav from "/src/assets/imgHome/turned_in_not.svg"
import savActive from "/src/assets/imgHome/577-5771640_bookmark-icon-png-transparent-png.png"
import notFoundUser from '/src/assets/imgHome/notFoundUser.jpg'
import endOfpost from "/src/assets/imgHome/image 75.svg"
import { Button } from '@mui/material';
import HistoryHome from '../../components/historyHome/historyHome';
import ReactPlayer from 'react-player';
import { falseTrueModal } from '../../reducers/Home/Home';
import { getToken } from '../../utils/token';
import { getFollowers } from '../../api/profile/profile';
import { unFollowingByID } from '../../api/followUnfollow/followUnfollow';
import { Link } from 'react-router-dom';
const Home = () => {
  const [allUserOpen,setAllUserOpen]=useState(false)
  const [statet,setStatet]=useState(false)
  const [viewComment,setViewComment]=useState('')
  const [viewCom,setViewCom]=useState(false)
  const [addComment,setAddComment]=useState('')
  const urlImg = import.meta.env.VITE_APP_FILES_URL
 const dispatch = useDispatch()
 const data = useSelector((store)=>store.homeJs.data)
 const dataUsers = useSelector((store)=>store.homeJs.dataUsers)
 const dataHistory = useSelector((store)=>store.homeJs.dataHistory)
 ////////
 const followersUser = useSelector((store) => store.profile.followersUser);
 const [foled,setFoled]=useState(false)
 ////////
 useEffect(()=>{
  // dispatch(getUserAbout())
dispatch(getTodosByPost12())
dispatch(getAllUser())
dispatch(getHistory())
dispatch(getFollowers(getToken().sid));
 },[])
//  console.log(followersUser);
function followOpr(id){
  console.log(id);
for(let i = 0;i<followersUser.length;i++){
  if(followersUser[i].userShortInfo.userId==id){
    console.log(followersUser[i].id);
    dispatch(unFollowingByID(followersUser[i].id))
  }
}
}
///////////
  return (
    <>
     <HistoryHome state1={statet} />
   
    <div className="ml-[100px] flex ">
      {/* history and posts */}
     <div className='w-[60%] '>

      {/* /////history */}
      <div className="ml-[-50px] flex gap-3 mt-[-50px] " >
      <Swiper navigation={true} slidesPerView={7} height={"100px"} modules={[Navigation]} className="mySwiper">
      {
          dataHistory?.map((elem)=>{
            return(
              <>
                <SwiperSlide onClick={()=>{
                  dispatch(falseTrueModal())
                }}>  
              <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col ">
            <div className="   w-[60px] h-[60px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] ">
          <img className='w-[53px] h-[53px] border-[4px] border-white rounded-[50%] object-cover' src={elem.userPhoto==""?notFoundUser:`${urlImg}/${elem.userPhoto}`} alt="" />
            </div>
           
        </div >
        <div className="flex flex-col gap-[5px]">
          <p className='text-[12px] font-[600]'>{elem.fullname.slice(0,3)}...</p>
          {/* <p className='font-[500] text-[#64748B] text-[16px]'>{elem.userName.slice(0,3)}...</p> */}
        </div>
        </div>
    
       
    </div>
    </SwiperSlide>
              </>
            )
          })
        }
      
      
      
    
        </Swiper>
      </div>
      {/* ///// */}

{/* //////user/// */}
<div className="flex flex-col gap-[30px]">
    
    
    
{
      data?.map((el,index)=>{
        // console.log(data);
        // console.log(el.images[0].length);
        // console.log(el.images[0].slice(el.images[0].length-3));
        // el.images[0].slice(el.images[0].length-3)
        return (
          <div className="">
      <div className=" w-[90%] border-t-[3px] pt-[10px]">
<div className="">
  {/* ////rows */}
  <div className="flex items-center justify-between ">
    <div className="flex items-center gap-3">
    <div className="flex flex-col ">
            <div className="w-[60px] h-[60px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] " onClick={()=>{
                  dispatch(falseTrueModal())
                }}>
          <img className='w-[53px] h-[53px] border-[4px] border-white rounded-[50%] object-cover' src={el.images[0].slice(el.images[0].length-3)=="mp4"||el.images.length==0?notFoundUser:`${urlImg}/${el.images[0]}`} alt="" />
            </div>
           
        </div>
        <div className="flex flex-col gap-[5px]">
        <Link to={`users/${el.userId}`}> <p className='text-[16px] font-[600]'>{el.title!=null?el.title:"Not Have Name"}</p></Link>
          <p className='font-[500] text-[#64748B] text-[16px]'>Profile: {el.datePublished.slice(0,10)} {el.datePublished.slice(11,19)}</p>
          
        </div>
    </div>
    <div className="">
      <img className='w-[40px]' src={imgMore} alt="" />
    </div>
  </div>
  {/* //////// */}


{/* posts */}
  <div className="mt-[10px]">
    {
     
      el.images[0].slice(el.images[0].length-3)=="mp4"|| el.images[0].slice(el.images[0].length-3)=="avi"|| el.images[0].slice(el.images[0].length-3)=="mov"||el.images[0].slice(el.images[0].length-3)=="wmv"|| el.images[0].slice(el.images[0].length-3)=="flv"?
      <ReactPlayer width='100%' height='614px' url={`${urlImg}/${el.images[0]}`} controls onClick={(e)=>console.log(e.target.playing='true')}  className="bg-[black]"/>:el.images.length==0?notFoundUser: el.images[0].slice(el.images[0].length-3)=="jpg"|| el.images[0].slice(el.images[0].length-3)=="jpeg"|| el.images[0].slice(el.images[0].length-3)=="png"||el.images[0].slice(el.images[0].length-3)=="gif"|| el.images[0].slice(el.images[0].length-3)=="bmp"? <img className=' rounded-[15px] w-[100%] h-[614px] object-cover border-4 'src={`${urlImg}/${el.images[0]}`}/>:null
    }
    {/* <img className=' rounded-[15px] w-[100%] h-[614px] object-cover border-4 'src={el.images[0].slice(el.images[0].length-3)=="mp4"||el.images.length==0?notFoundUser:`${urlImg}/${el.images[0]}`} alt="" /> */}
  {/* <button className='absolute mt-[-620px] w-[30px]  ml-[10px]'><img src={playVideoImg} className='' alt="" /></button>
  <button className='absolute mt-[-35px] ml-[580px] w-[30px]  '><img src={volumeMute} className='invert' alt="" /></button> */}
  </div>
{/* //// */}


{/* action */}

<div className="w-[100%] h-[60px] flex items-center px-[10px] justify-between">
  <div className="flex gap-[10px]">
      <button className='w-[30px]'>
    <img className='w-[30px]' src={el.postLike?heartActive:heart} onClick={(e)=>{

      dispatch(getLike(el.postId))

      dispatch(getTodosByPost12())
      
    }} alt="" />
  </button>
  <button className='w-[30px]'>
    <img className='w-[30px]' src={chat1} alt="" />
  </button>
  <button className='w-[30px]'>
    <img className='w-[30px]' src={send} alt="" />
  </button>
  </div>
  <div className="">
  <button className='w-[30x]'>
    <img className='w-[30px] ' src={el.postFavorite?savActive:sav} onClick={()=>{
dispatch(getSav({
  "postId": el.postId
}))
dispatch(getTodosByPost12())
    }} alt="" />
  </button>
  </div>

</div>

{/* ///// */}



{/* ////LIKE and comment */}
<div className="px-[10px]">
 <div className=" flex items-center gap-3">
  <img className='w-[30px] h-[30px] object-cover rounded-[50%]' src={el?.images[0]?.slice(el?.images[0]?.length-3)=="mp4"||el.images.length==0?notFoundUser:`${urlImg}/${el.images[0]}`} alt="" />
 <p className='font-[500] text-[17px]' ><span>{el.postLikeCount}</span> Likes</p>
 </div>


 <div className="flex flex-col">

 <p className='font-[500] text-[15px] mt-[10px]' ><span className='font-[600]'>{el.content?el.content:el.content==""?`User${Math.floor((Math.random() * 1000) + 1)}`:`User${Math.floor((Math.random() * 100) + 1)}`}</span> kklk in sit rhoncus, eleifend tellus augue lectus potenti pellentesque ...</p>
<button className='text-[#94A3B8] text-left text-[16px]' onClick={()=>{

  setViewComment(el.postId)
  if(viewCom){
setViewCom(false)
  }
  else{
setViewCom(true)
  }
  
}}>View {el.commentCount} comments</button>

<div className="">


{
  viewComment==el.postId&&el.comments.length!=0&&viewCom==true?<div>{
    el.comments?.map((ele,indexx)=>{
      return(
        <>
        <div className="">
        <p className='font-[500] text-[15px] mt-[10px]' ><span className='font-[600] px-[5px]'>{`User${Math.floor((Math.random() * 1000) + 1)}`}</span>{ele.comment}</p>

        </div>
        </>
      )
    })
    }</div>:<div></div>
}
</div>
<p className='font-[500] text-[15px] mt-[10px]' ><span className='font-[600]'>{el.title?`User${Math.floor((Math.random() * 100) + 1)}`:el.title==""?`User${Math.floor((Math.random() * 1000) + 1)}`:`User${Math.floor((Math.random() * 100) + 1)}`}</span> Very impressive! 🔥🔥</p>
<p className='text-[#94A3B8] text-left text-[16px]'>1 hour ago</p>

 </div>

 <div className="flex border-b-[2px] mb-[10px]">
  <input type="text" placeholder='Add a comment...' value={addComment} onChange={(e)=>setAddComment(e.target.value)} className='h-[50px] w-[100%]' />
  <button className='text-[40px]' onClick={()=>{
    
   dispatch(getTodosByPost12())
    dispatch(addCommentFromUser(
    {
      "comment": addComment,
      "postId": el.postId
    }
  ))
  setAddComment('')
  }}>+</button>
 </div>
</div>

{/* ///// */}
</div>



      </div>

          </div>
        )
      })
    }
    </div>  
      {/* ///// */}


      
    </div>
    {/* ////// */}


    <div className="w-[35%] mx-auto mt-[40px]">

      <div className="flex justify-between items-center text-[#64748B] text-[18px] font-[500]" >
        <p>Suggested for you</p>
        <button style={{display:allUserOpen?"none":"block"}} onClick={()=>{dispatch(getAllUser(1000));setAllUserOpen(true)}}>See all</button>
        <button  style={{display:allUserOpen?"block":"none"}}  className='text-[30px]' onClick={()=>{dispatch(getAllUser(10));setAllUserOpen(false)}}>Х</button>
      </div>
      <div className="mt-[30px] flex flex-col gap-5">
        <div className="flex flex-col gap-5">
           {
          dataUsers?.map((elem)=>{
            return(
              
              <>
              <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex flex-col ">
            <div className="w-[60px] h-[60px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] " onClick={()=>{
                  dispatch(falseTrueModal())
                }}>
          <img className='w-[53px] h-[53px] border-[4px] border-white rounded-[50%] object-cover' src={elem.avatar!=""?`${urlImg}/${elem.avatar}`:notFoundUser} alt="" />
            </div>
           
        </div >
        <div className="flex flex-col gap-[5px]">
          <p className='text-[16px] font-[600]'>{elem.fullName}</p>
          <p className='font-[500] text-[#64748B] text-[16px]'>{elem.userName}</p>
        </div>
        </div>
    
        <div className="">
          {
            elem.subscriptions?<button className=' text-[grey] text-[20px]' onClick={()=>{followOpr(elem.id);dispatch(getAllUser())}}>UnFollow</button>:<button style={elem.subscriptions==true?{color:'grey',display:"none"}:{display:'block'}} className='text-[#3B82F6] text-[20px]' onClick={()=>{dispatch(getFollow(elem.id));dispatch(getAllUser())}}>{elem.subscriptions?"Unfollow":"Follow"}</button>


          }
       
        </div>
    </div>
              </>
            )
          })
        }
        </div>
       
      
    

  
      </div>
    </div>
    </div>
    <div className="w-[65%] mt-[70px]">
<div className="flex justify-center flex-col text-center">

  <img src={endOfpost} className='w-[150px] mx-auto' alt="" />
  <p className='font-[600] text-[26px]'>You're all caught up</p>
  <p className='text-[17px]'>You've seen all new posts from the past 3 days.</p>
   <Button className='' sx={{fontSize:"20px"}} onClick={()=>{
    const middleOfPage = document.documentElement.scrollHeight / 2;
      window.scrollTo({
        top:500,
        // behavior: 'smooth' // Optional, smooth scrolling behavior
      });
      dispatch(getTodosByPost12())
   }}>View older posts</Button>
</div>
    

    </div>



   <div className="w-[100%] " onClick={()=>{
    setStatet(true)
   }}>
   
   </div>
    </>
   
  )
}

export default Home

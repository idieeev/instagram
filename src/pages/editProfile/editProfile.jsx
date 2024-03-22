import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { putProfile,putProfileImage } from '../../api/profile/profile';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const userProfile = useSelector((store) => store.profile.userProfile);
  const dispatch = useDispatch();
  console.log(userProfile);
  const [editUserName, setEditUserName] = useState(userProfile.userName);
  const [editFullName, setEditFullName] = useState(userProfile.fullName);
  const [editAbout, setEditAbout] = useState(userProfile.about);
  const [editImage, setEditImage] = useState(userProfile.image);
  const navigate = useNavigate()
  console.log(editFullName);

  const handleClick = function () {
    console.log(32);
    dispatch(
      putProfile({
        fullName: editFullName,
        dob: "2024/03/25",
        about: editAbout,
        gender: 1,
        phoneNumber: "928347",
        email: "user@example.com",
      })
    );
    navigate("/basic/profile")
  }

  useEffect(() => {
  },[dispatch])

 

  return (
    <div className="pl-[200px] pr-[200px] pt-[50px] pb-[50px]">
      
        <div>
          <div className="flex gap-5 items-center">
            <h1 className="text-[30px] font-[600] text-[blue]">Profile</h1>
            <h1 className="text-[30px] font-[600] ">Edit profile</h1>
          </div>
          <div className="p-[20px] rounded-xl mt-[10px] bg-[whitesmoke] flex justify-between items-center">
            <div className="flex w-[40%] items-center">
              <div className="w-[50%] h-[100px]">
                <img
                  className="w-[70%] rounded-full  h-[12.5vh] object-cover"
                  src={
                    userProfile.image !== 0
                      ? `${import.meta.env.VITE_APP_FILES_URL}/${
                          userProfile.image
                        }`
                      : "https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=220"
                  }
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-[20px] font-[600]">
                  {userProfile.userName}
                </h1>
                <h1 className="text-[18px] text-[gray] font-[400]">
                  {userProfile.fullName}
                </h1>
              </div>
            </div>
            <div>
              <input onChange={(e)=>setEditImage(e.target.value)}  className="w-[300px] h-[40px]" type="file" />
            </div>
          </div>
        </div>
        <div className="mt-[20px] rounded-xl border-[2px] p-[10px]">
          <h1 className="text-[18px] text-[gray] pl-[10px]">Name</h1>
          <input
            onChange={(e) => setEditUserName(e.target.value)}
            value={editUserName}
            name='change'
            className="w-[100%] h-[50px] outline-none  pl-[10px] text-[20px] text-[gray]"
            type="text"
          />
        </div>
        <div className="mt-[20px] rounded-xl border-[2px] p-[10px]">
          <h1 className="text-[18px] text-[gray] pl-[10px]">User name</h1>
          <input
            onChange={(e) => setEditFullName(e.target.value)}
            value={editFullName}
            name='change2'
            className="w-[100%] h-[50px] outline-none  pl-[10px] text-[20px] text-[gray]"
            type="text"
          />
        </div>
        <div className="p-[20px] rounded-xl border-[2px] mt-[20px]">
          <textarea
            onChange={(e)=>setEditAbout(e.target.value)}
            value={editAbout}
            className="p-[10px] w-[100%] h-[15vh] outline-none text-[20px] text-[gray]"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="p-[20px] rounded-xl border-[2px] mt-[20px]">
          <select
            className="w-[100%] text-[20px] text-[gray] outline-none h-[100%]"
            name=""
            id=""
          >
            <option value="">{userProfile.gender}</option>
          </select>
        </div>
        <div>
          <h1 className="text-[20px] font-[500] text-[gray] pt-[10px] pb-[10px] pl-[5px]">
            This won’t be part of your public profile.
          </h1>
        </div>
        <div>
          <button
            onClick={()=>handleClick()}
            className="w-[220px] hover:bg-[#d8d7d7] hover:duration-500 h-[60px] bg-[whitesmoke] rounded-2xl text-[20px] font-[500] text-[gray] cursor-pointer mt-[10px]"
          >
            Submit
          </button>
        </div>
     
    </div>
  );
}

export default EditProfile
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";

import BookmarkIcon from "@mui/icons-material/Bookmark";


import Logo from "../../assets/icons/logo.svg"

import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Carousel from "../../assets/icons/Carousel.png"

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../App.css"

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import { setComment } from "../../reducers/explore/Explore";

const style = {
  position: "absolute",
  top: "33%",
  left: "70%",
  transform: "translate(-50%, -50%)",
  width: 340,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  outline:"none",
  p: 4,
};
const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 340,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const styleFollower = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const styleFollowing = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const styleImageEditProfile = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const stylePost = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";

import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";

import {
  getProfileById,
  GetPostByUser,
  getFollowings,
  getFollowers,
  putProfileImage
} from "../../api/profile/profile";
import {
  getPostById,
  postComment,
  postLike,
} from "../../api/ExploreApi/ExploreApi";
import { useDispatch, useSelector } from "react-redux";

import { destroyToken, getToken } from "../../utils/token";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Profile = () => {
  const [value, setValue] = useState("1");

  const Byid = useSelector((state) => state.explore.ById);
  let comments = useSelector((store) => store.explore.Comments);
  const imgUrl = import.meta.env.VITE_APP_FILES_URL;

   const handleBookmarkClick = () => {
     setSaved((prevSaved) => !prevSaved);
   };
  
  const [isSaved, setSaved] = useState(false);
  

  const [imageEdit, setImageEdit] = useState("");

  const [search, setSearch] = useState("");

  const [idx, setIdx] = useState();


  const [followerProfile, setFollowerProfile] = useState(false);
  const handleOpenFollowerProfile = () => setFollowerProfile(true);
  const handleCloseFollowerProfile = () => setFollowerProfile(false);

  const [menuProfile, setMenuProfile] = useState(false);
  const handleOpenProfile = () => setMenuProfile(true);
  const handleCloseProfile = () => setMenuProfile(false);

  const [editImageProfile, setEditImageProfile] = useState(false);
  const handleOpenEditImageProfile = () => setEditImageProfile(true);
  const handleCloseEditImageProfile = () => setEditImageProfile(false);

  const [openPost,setOpenPost] = useState(false)

  const [postImage, setPostImage] = useState();

  const [imgPost, setImgPost] = useState();
  
  const handleOpenPost = () => {
    setOpenPost(true);
  };
  const handleClosePost = () => setOpenPost(false);
  
  const [isFollowing, setFollowing] = useState(false);

  const handleButtonClick = () => {
    // Toggle the value of isFollowing
    setFollowing((prevFollowing) => !prevFollowing);
  };

  const [followingProfile, setFollowingProfile] = useState(false);
  const handleOpenFollowingProfile = () => setFollowingProfile(true);
  const handleCloseFollowingProfile = () => setFollowingProfile(false);

  const [imageProfile, setImageProfile] = useState([]);

  const [modalProfile, setModalProfile] = useState(false);
  const handleOpenModalProfile = (elem) => (
    setImageProfile(elem),
    setModalProfile(true)
  )
  const handleCloseModalProfile = () => setModalProfile(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector((store) => store.profile.userProfile);
  const postUser = useSelector((store) => store.profile.postUser);
  const followingsUser = useSelector((store) => store.profile.followingsUser);
  const followersUser = useSelector((store) => store.profile.followersUser);
  

  const handleClick = function () {
    dispatch(
      putProfileImage(
      {
        image:imageEdit
      }
    ))
  }

  const formatDate = (datePublished) => {
    const date = new Date(datePublished);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const formattedDate = formatDate(Byid?.datePublished);


  function logOut() {
    navigate("/");
    destroyToken("access_token");
  }

  console.log(userProfile.userName);
  console.log(postUser)
  console.log(followingsUser);
  console.log(userProfile.image);

  console.log(getToken());
  useEffect(() => {
    dispatch(getProfileById(getToken().sid));
    dispatch(GetPostByUser(getToken().sid));
    dispatch(getFollowings(getToken().sid));
    dispatch(getFollowers(getToken().sid));
  }, [dispatch],getProfileById());

  return (
    <div className="p-[60px] pr-[200px] ">
      <div className="flex justify-between items-center">
        <div className="w-[30%]">
          <img
            onClick={() => handleOpenEditImageProfile()}
            className="w-[81%] rounded-full cursor-pointer  h-[27vh] object-cover"
            src={
              userProfile.image !== 0
                ? `${import.meta.env.VITE_APP_FILES_URL}/${userProfile.image}`
                : "https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=220"
            }
            alt=""
          />
        </div>
        <div className="w-[70%]">
          <div className="flex flex-wrap w-[98%]  items-center gap-[60px]">
            <div>
              <h1 className="text-[22px] font-[700]">{userProfile?.userName}</h1>
            </div>
            <div className="flex items-center gap-[20px]  h-[50px] ">
              <NavLink to="/basic/profile/editProfile">
                <button
                  onClick={() => {
                    getProfileById(getToken().sid);
                  }}
                  className="w-[120px]  text-[18px] h-[45px] bg-[whitesmoke] rounded-xl"
                >
                  Edit profile
                </button>
              </NavLink>

              <button className="w-[120px] text-[18px] h-[45px] bg-[whitesmoke] rounded-xl ">
                View archive
              </button>
              <IconButton onClick={() => handleOpenProfile()}>
                <MenuIcon sx={{ width: "40px", height: "40px" }} />
              </IconButton>
            </div>
          </div>
          <div className="flex justify-between w-[70%] p-[0px] items-center mt-[20px] mb-[15px]">
            <div className="flex w-[32%]  hover:bg-[whitesmoke] hover:duration-700 cursor-pointer  text-center p-[5px] rounded-xl">
              <h1 className="text-[20px] text-[gray] text-center">
                <span className="text-[20px] font-[700] text-[black] pr-[5px] pl-[10px]">
                  {userProfile.postCount}
                </span>
                posts
              </h1>
            </div>
            <div
              onClick={() => handleOpenFollowerProfile()}
              className="w-[32%] flex  hover:bg-[whitesmoke] hover:duration-700 cursor-pointer  text-center p-[5px] rounded-xl pl-[10px]"
            >
              <h1 className="text-[20px] text-[gray] text-center ">
                <span className="text-[20px] font-[700] text-[black] pr-[5px]">
                  {userProfile.subscribersCount}
                </span>
                follower
              </h1>
            </div>
            <div
              onClick={() => handleOpenFollowingProfile()}
              className="w-[32%] flex  hover:bg-[whitesmoke] hover:duration-700 cursor-pointer   text-center p-[5px] rounded-xl pl-[10px]"
            >
              <h1 className="text-[20px] text-[gray]">
                <span className="text-[20px] font-[700] text-[black] pr-[5px]">
                  {userProfile.subscriptionsCount}
                </span>
                following
              </h1>
            </div>
          </div>
          <div className="w-[70%] mt-[20px] mb-[15px]">
            <h1 className="text-[30px] font-[500] text-[#323131]">
              {userProfile.fullName}
            </h1>
          </div>
        </div>
      </div>
      <div className="p-[10px] flex gap-10 mt-[20px] mb-[30px] border-b-[3px]">
        <div className="w-[7.5%]">
          <div className="w-[70px] h-[70px] bg-[whitesmoke] text-center rounded-full">
            <AddIcon
              sx={{
                width: "40px",
                height: "40px",
                marginTop: "15px",
                color: "gray",
              }}
            />
          </div>
          <h1 className="text-center text-[18px]">New</h1>
        </div>
      </div>
      <div className="m-[auto] w-[100%]">
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 0,
              borderColor: "divider",
              width: "100%",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                icon={<ArticleIcon sx={{ width: "40px", height: "40px" }} />}
                sx={{
                  marginLeft: "250px",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
                label="posts"
                value="1"
              />
              <Tab
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginLeft: "30px",
                }}
                icon={
                  <BookmarkBorderIcon
                    sx={{
                      width: "37px",
                      height: "37px",
                    }}
                  />
                }
                label="Saved"
                value="2"
              />
              <Tab
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginLeft: "30px",
                }}
                icon={
                  <PersonIcon
                    sx={{
                      width: "37px",
                      height: "37px",
                    }}
                  />
                }
                label="Tagged"
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel sx={{ width: "100%" }} value="1">
            <div className="flex gap-[0.6%] items-center flex-wrap">
              {postUser?.map((elem) => {
                return (
                  <div
                    onClick={() => { handleOpenPost(elem), setIdx(el.postId),dispatch(getPostById(elem.postId)  ) }}
                    className="w-[32.8%] mt-[10px] h-[35vh] cursor-pointer bg-[whitesmoke] rounded-lg   "
                  >
                    {elem.images.map((image, index) => (
                      <img
                        className="w-[100%] h-[100%] rounded-md object-cover"
                        src={`${import.meta.env.VITE_APP_FILES_URL}/${
                          elem.images[0]
                        }`}
                        alt=""
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </TabPanel>
          <TabPanel sx={{ width: "100%" }} value="2">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-[20px] font-[500] text-[#3b3b3b]">
                  Only you can see what you've saved
                </h1>
                <Button sx={{ fontSize: "18px" }} variant="text">
                  <span className="text-[22px]">+</span> New collection
                </Button>
              </div>
              <div
                onClick={() => handleOpenPost()}
                className="flex gap-[0.6%] flex-wrap w-[600px] h-[500px] mt-[10px] overflow-auto"
              >
                {postUser?.map((elem) => {
                  return elem.postFavourite ? (
                    <div
                      onClick={() => handleOpenPost()}
                      className="w-[32.6%] mt-[0px] h-[23vh] rounded-md"
                    >
                      {elem.images.map((image, index) => (
                        <img
                          className="w-[100%] h-[100%] rounded-md object-cover"
                          src={`${import.meta.env.VITE_APP_FILES_URL}/${
                            elem.images[0]
                          }`}
                          alt=""
                        />
                      ))}
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </TabPanel>
          <TabPanel sx={{ width: "100%" }} value="3">
            <div className="flex gap-[0.6%] items-center flex-wrap">
              {postUser?.map((elem) => {
                return (
                  <div
                    onClick={() => handleOpenModalProfile(elem)}
                    className="w-[32.8%] h-[35vh] mt-[10px] bg-[whitesmoke] rounded-md  "
                  >
                    {elem.images.map((image, index) => (
                      <img
                        className="w-[100%] h-[100%] rounded-md object-cover"
                        src={`${import.meta.env.VITE_APP_FILES_URL}/${
                          elem.images[0]
                        }`}
                        alt=""
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </TabPanel>
        </TabContext>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={menuProfile}
          onClose={handleCloseProfile}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={menuProfile}>
            <Box sx={style}>
              <div>
                <h1 className="p-[15px] font-[500] text-[19px] bg-[whitesmoke] hover:text-[white] mt-[10px] rounded-xl hover:bg-[#b1b0b0] hover:duration-500">
                  QR code
                </h1>
                <h1 className="p-[15px] font-[500] text-[19px] rounded-xl mt-[10px] hover:text-[white] bg-[whitesmoke] hover:bg-[#b1b0b0] hover:duration-500">
                  Notification
                </h1>
                <h1 className="p-[15px] font-[500] text-[19px] rounded-xl hover:text-[white] mt-[10px] bg-[whitesmoke] hover:bg-[#b1b0b0] hover:duration-500">
                  Settings and privacy
                </h1>
                <h1
                  onClick={() => logOut()}
                  className="p-[15px] font-[500] text-[19px] rounded-xl mt-[10px] bg-[whitesmoke] hover:bg-[#b1b0b0] hover:duration-500 text-red-500"
                >
                  Log out
                </h1>
              </div>
            </Box>
          </Fade>
        </Modal>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={followerProfile}
          onClose={handleCloseFollowerProfile}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={followerProfile}>
            <Box sx={styleFollower}>
              <div className="p-[0px]">
                <div className="flex justify-between items-center">
                  <h1 className="text-[19px] font-[500] text-[#424141]">
                    Followers
                  </h1>
                  <IconButton onClick={() => handleCloseFollowerProfile()}>
                    <CloseIcon />
                  </IconButton>
                </div>
                <div className="mt-[10px]">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder="search..."
                    className="w-[100%] text-[gray] text-[20px] bg-[whitesmoke] h-[50px] rounded-xl outline-none pl-[10px]"
                    type="search"
                  />
                </div>
                <div>
                  <div>
                    {followingsUser
                      .filter((e) => {
                        return e.userShortInfo.userName
                          .toLowerCase()
                          .trim()
                          .includes(search);
                      })
                      .map((e) => {
                        console.log(e);
                        return (
                          <div className="flex p-[5px] rounded-xl mt-[5px] justify-between items-center bg-[whitesmoke]">
                            <div className="flex p-[5px] gap-[10px] items-center">
                              <img
                                className="w-[45px] h-[45px] rounded-full"
                                src={
                                  e.userShortInfo.userPhoto.length !== 0
                                    ? `${import.meta.env.VITE_APP_FILES_URL}/${
                                        e.userShortInfo.userPhoto
                                      }`
                                    : "https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=220"
                                }
                                alt=""
                              />
                              <div>
                                <h1 className="font-[600] text-[18px]">
                                  {e.userShortInfo.userName}
                                </h1>
                                <h1 className="font-[500] text-[16px] text-[#4a4848]">
                                  {e.userShortInfo.fullname}
                                </h1>
                              </div>
                            </div>
                            <div className="ml-[0px] mr-[10px]">
                              <button className="text-[18px] hover:bg-[#00d9ff] hover:text-[white] p-[5px] rounded-lg hover:duration-500 text-[blue]">
                                Follow
                              </button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={followingProfile}
          onClose={handleCloseFollowingProfile}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={followingProfile}>
            <Box sx={styleFollowing}>
              <div>
                <div className="p-[0px]">
                  <div className="flex justify-between items-center">
                    <h1 className="text-[19px] font-[500] text-[#424141]">
                      Following
                    </h1>
                    <IconButton onClick={() => handleCloseFollowingProfile()}>
                      <CloseIcon />
                    </IconButton>
                  </div>
                  <div className="mt-[10px]">
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      value={search}
                      placeholder="search..."
                      className="w-[100%] text-[gray] text-[20px] bg-[whitesmoke] h-[50px] rounded-xl outline-none pl-[10px]"
                      type="search"
                    />
                  </div>
                  <div>
                    <div>
                      {followersUser
                        .filter((e) => {
                          return e.userShortInfo.userName
                            .toLowerCase()
                            .trim()
                            .includes(search);
                        })
                        .map((e) => {
                          console.log(e);
                          return (
                            <div className="flex p-[5px] rounded-xl mt-[5px] justify-between items-center bg-[whitesmoke]">
                              <div className="flex p-[5px] gap-[10px] items-center">
                                <img
                                  className="w-[45px] h-[45px] rounded-full"
                                  src={
                                    e.userShortInfo.userPhoto.length !== 0
                                      ? `${
                                          import.meta.env.VITE_APP_FILES_URL
                                        }/${e.userShortInfo.userPhoto}`
                                      : "https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=220"
                                  }
                                  alt=""
                                />
                                <div>
                                  <h1 className="font-[600] text-[18px]">
                                    {e.userShortInfo.userName}
                                  </h1>
                                  <h1 className="font-[500] text-[16px] text-[#4a4848]">
                                    {e.userShortInfo.fullname}
                                  </h1>
                                </div>
                              </div>
                              <div className="ml-[0px] mr-[10px]">
                                <button className="text-[18px] hover:bg-[#00d9ff] hover:text-[white] p-[5px] rounded-lg hover:duration-500 text-[blue]">
                                  Follow
                                </button>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={editImageProfile}
          onClose={handleCloseEditImageProfile}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={editImageProfile}>
            <Box sx={styleImageEditProfile}>
              <div className="p-[10px]">
                <div className="w-[70%] m-[auto]">
                  <img className="w-[100%]" src={Logo} alt="" />
                </div>
                <div className="mt-[10px]">
                  <input
                    className="outline-none"
                    onChange={(e) => setImageEdit(e.target.value)}
                    type="file"
                  />
                </div>
                <div className=" h-[30vh] mt-[10px] rounded-md">
                  <img className="rounded-md" src={imageEdit} alt="" />
                </div>
                <button
                  onClick={() => handleClick()}
                  className="w-[150px] h-[50px] bg-[whitesmoke] rounded-xl"
                >
                  Submit
                </button>
              </div>
            </Box>
          </Fade>
        </Modal>

        <Modal
          open={openPost}
          onClose={handleClosePost}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={stylePost}>
            <div className="flex">
              <div className="w-[600px] h-[600px] border-solid border-[1px]  border-gray-200 bg-black ">
                {Byid?.images?.map((el) => {
                  return (
                    <img
                      className="h-[100%] w-[100%] text-center object-cover"
                      src={`${imgUrl}${el}`}
                      alt=""
                    />
                  );
                })}
              </div>
              <div>
                <nav className="flex justify-between  h-[60px] w-[450px] border-solid border-[1px] border-gray-200 items-center px-[2%]">
                  <div className="flex items-center gap-[5px]">
                    <div>
                      <img
                        className="w-[40px] h-[40px]"
                        src={
                          length == 0
                            ? "https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=220"
                            : Byid?.images
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-[1px]">
                      <div className="flex items-center gap-[5px]">
                        <h1 className="text-[15px] font-[600] text-[#262626] hover:opacity-50 cursor-pointer">
                          {Byid?.title}
                        </h1>
                        <h1>•</h1>
                        <h1
                          onClick={handleButtonClick}
                          className="text-[#0095f6] cursor-pointer text-[15px] hover:text-[#1f4158]"
                        >
                          {isFollowing ? "Unfollow" : "Follow"}
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-[#000000] font-[200] text-[13px]">
                          {/* {Byid?.content} */}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <MoreHorizIcon
                    className="hover:opacity-50 cursor-pointer"
                    onClick={() => handleClickOpenDialog()}
                  />
                </nav>
                <div className="h-[380px] flex flex-col gap-[20px] overflow-auto p-[3%]">
                  {Byid?.comments?.map((el) => {
                    return (
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-[10px]">
                          <img
                            className="w-[30px] h-[30px]"
                            src={
                              length == 0
                                ? "https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=220"
                                : Byid?.images
                            }
                            alt=""
                          />
                          <div>
                            <div className="flex gap-[5px]">
                              <h1 className="font-[600] text-[15px] hover:opacity-50">
                                {Byid?.title}
                              </h1>
                              <h1 className="w-[200px] font-[300]">
                                {el?.comment}
                              </h1>
                            </div>
                            <div>
                              <MoreHorizIcon
                                sx={{ fontSize: "15px" }}
                                className="hover:opacity-50 cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          {/* <FavoriteIcon
                          color="error"
                          sx={{ fontSize: "15px" }}
                        ></FavoriteIcon> */}
                          <FavoriteBorderIcon
                            className="hover:opacity-50"
                            sx={{ cursor: "pointer", fontSize: "15px" }}
                          ></FavoriteBorderIcon>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <footer className="border-t-[1px]">
                  <div className="flex mt-[10px] justify-between items-center">
                    <div className="flex items-center pl-[16px] gap-[10px]">
                      {Byid?.postLike ? (
                        <FavoriteIcon
                          className="hover:opacity-50"
                          color="error"
                          sx={{ cursor: "pointer" }}
                          onClick={() => {
                            dispatch(postLike(Byid?.postId));
                          }}
                        ></FavoriteIcon>
                      ) : (
                        <FavoriteBorderIcon
                          className="hover:opacity-50"
                          sx={{ cursor: "pointer" }}
                          onClick={() => dispatch(postLike(Byid?.postId))}
                        ></FavoriteBorderIcon>
                      )}
                      <svg
                        className="hover:opacity-50 cursor-pointer"
                        aria-label="Комментировать"
                        class="x1lliihq x1n2onr6 x5n08af"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Комментировать</title>
                        <path
                          d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <svg
                        className="hover:opacity-50 cursor-pointer"
                        aria-label="Поделиться публикацией"
                        class="x1lliihq x1n2onr6 x5n08af"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Поделиться публикацией</title>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="22"
                          x2="9.218"
                          y1="3"
                          y2="10.083"
                        ></line>
                        <polygon
                          fill="none"
                          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                      </svg>
                    </div>
                    <div className="pr-[16px]">
                      {/* {isSaved ? (
                      <BookmarkIcon
                        className="hover:opacity-50"
                        onClick={() => handleBookmarkClick()}
                        style={{
                          cursor: "pointer",
                          color: "black",
                        }}
                      />
                    ) : (
                      <BookmarkBorderIcon
                        className="hover:opacity-50"
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    )} */}
                      <BookmarkIcon
                        onClick={handleBookmarkClick}
                        style={{
                          cursor: "pointer",
                          color: isSaved ? "black" : "blue",
                        }}
                      />
                    </div>
                  </div>
                  <div className="py-[10px]">
                    <h1 className="pl-[16px] text-[#000000] font-[700] text-[17px]">
                      {Byid?.postLikeCount} <span>likes</span>
                    </h1>
                    <h1 className="pl-[16px] text-[#737373] font-[300] text-[12px]">
                      {formattedDate}
                    </h1>
                    <p></p>
                  </div>
                  <div className="flex gap-2 py-[10px] items-center border-t pl-[16px]">
                    <SentimentSatisfiedAltIcon className="hover:opacity-50" />
                    <input
                      onChange={(e) => dispatch(setComment(e.target.value))}
                      className="w-[330px] outline-none h-[40px]"
                      type="text"
                      value={comments}
                      placeholder="Add Comments..."
                    />
                    <button
                      onClick={() => {
                        dispatch(
                          postComment({
                            comment: comments,
                            postId: Byid?.postId,
                          })
                        );
                        dispatch(setComment(""));
                      }}
                      className="text-blue-600 text-[17px] font-[700]"
                    >
                      Post
                    </button>
                  </div>
                </footer>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
export default Profile;
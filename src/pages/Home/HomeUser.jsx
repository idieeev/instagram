import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { getUsersId } from './search';
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
} from "../../api/profile/profile";
import {  useSelector } from "react-redux";

import { destroyToken, getToken } from "../../utils/token";
import { Link, NavLink, useNavigate } from "react-router-dom";
const HomeUser = ({state}) => {
    const {id} = useParams()
    // console.log(id);
    
    const dataUserId = useSelector((state) => state.searchUsers.dataUserId);
  const [value, setValue] = useState("1");

  const [imageEdit, setImageEdit] = useState("");

  const [search, setSearch] = useState("");

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
  
  const handleOpenPost = (elem) => {
    setOpenPost(true);
    setPostImage(elem);   
  };
  const handleClosePost = () => setOpenPost(false);

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


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function logOut() {
    navigate("/");
    destroyToken("access_token");
  }

  console.log(userProfile.userName);
  // console.log(postProfile)
  console.log(followingsUser);
  console.log(userProfile.image);

//   console.log(getToken());
  useEffect(() => {
    dispatch(getProfileById(id));
    dispatch(GetPostByUser(id));
    dispatch(getFollowings(id));
    dispatch(getFollowers(id));
  }, [dispatch],getProfileById());

  return (
    <div className="p-[60px] pr-[200px] ">
      <div className="flex justify-between items-center">
        <div className="w-[30%]">
          <img
            onClick={()=>handleOpenEditImageProfile()}
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
              <h1 className="text-[22px] font-[700]">{userProfile.userName}</h1>
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
                    onClick={() => handleOpenPost(elem)}
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
                      onClick={() => handleOpenModalProfile(elem)}
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
                        console.log(followingsUser);
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
                  <input className="outline-none" onChange={(e)=>setImageEdit(e.target.value)} type="file" />
                </div>
                <div className=" h-[30vh] mt-[10px] rounded-md">
                    <img className="rounded-md" src={imageEdit} alt="" />
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};
export default HomeUser;
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostId, getUsersId } from "./search";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import gal from "../../assets/images/galochka.png";
import pos from "../../assets/images/posts.png";
import real from "../../assets/images/reals.png";
import tag from "../../assets/images/taged.png";
import img from "../../assets/images/polzovatel.jpg";
import Keybo from "@mui/icons-material/KeyboardArrowDown";
import LinkIcon from "@mui/icons-material/Link";
import { getToken } from "../../utils/token";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AppsIcon from "@mui/icons-material/Apps";
import { hover } from "reactcss";
import Favorit from '@mui/icons-material/FavoriteOutlined';
import Map from "@mui/icons-material/MapsUgcSharp";

const Users = () => {
  const { id } = useParams();
  // console.log(id);

  const dataUserId = useSelector((state) => state.searchUsers.dataUserId);
  const postId = useSelector((state) => state.searchUsers.postId);
  const dispatch = useDispatch();
  // console.log(postId);

  useEffect(() => {
    dispatch(getUsersId(id));
    dispatch(getPostId(getToken().sid));
  }, [id]);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="flex justify-between items-start px-[10%] py-[7vh] ">
        <div className="w-[31%] mt-[5px]">
          <img
            id="ibo"
            className="rounded-full cursor-pointer  h-[31vh] object-cover"
            src={img}
            alt=""
          />
        </div>
        <div className="w-[70%]">
          <div className="flex flex-wrap w-[98%]  items-center gap-[30px]">
            <div className="flex justify-between items-center gap-[10px]">
              <h1 className="text-[20px]">{dataUserId.userName}</h1>
              <img src={gal} alt="" className="w-[30px]" />
            </div>
            <div>
              <div className="flex items-center gap-[10px]  h-[50px] ">
                <button className="px-[21px] py-[5px] text-[18px] bg-[whitesmoke] rounded-[8px] ">
                  Following <Keybo />
                </button>
                <button className="px-[25px] py-[5px] text-[18px] bg-[whitesmoke] rounded-[8px] ">
                  Mesage
                </button>
                <button onClick={() => handleOpenProfile()}>
                  <MoreHorizIcon
                    sx={{ width: "30px", height: "30px", color: "black" }}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between w-[70%] p-[0px] items-center mt-[20px]">
            <h1 className="text-[19px] text-[#3b3b3b] text-center">
              <span className="text-[20px] font-[700] text-[black] pr-[7px]">
                {dataUserId.postCount}
              </span>
              posts
            </h1>
            <button onClick={() => handleOpenFollowerProfile()}>
              <h1 className="text-[19px] text-[#3b3b3b] text-center ">
                <span className="text-[20px] font-[700] text-[black] pr-[7px]">
                  {dataUserId.subscribersCount}
                </span>
                follower
              </h1>
            </button>
            <button onClick={() => handleOpenFollowingProfile()}>
              <h1 className="text-[19px] text-[#3b3b3b]">
                <span className="text-[20px] font-[700] text-[black] pr-[7px]">
                  {dataUserId.subscriptionsCount}
                </span>
                following
              </h1>
            </button>
          </div>
          <div className="w-[70%] mt-[20px]">
            <h1 className="text-[18px] font-[600] text-[#323131]">
              {dataUserId.fullName}
            </h1>
          </div>
          <div>
            <h1 className="text-[16px] text-[#3b3b3b]">{dataUserId.about}</h1>
            <h1 className="text-[18px] text-blue-900">
              <LinkIcon /> ter.li/CR7-ForeverZone
            </h1>
            <h1 className="text-[13px] text-[#3b3b3b] mt-[15px]">
              Followed by willsmith, parviz_tv, _asr.06_ + 15 more
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-[10px_0] px-[4%] py-[5vh]">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label={`POSTS`} value="1" />
                <Tab label="REELS" value="2" />
                <Tab label="TAGGED" value="3" />
              </TabList>
            </Box>
            <TabPanel
              sx={{
                marginLeft: "-2%",
                marginRight: "-2%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "20px_0",
              }}
              value="1"
            >
              {postId.map((e, i) => {
                return (
                  <div
                    key={e.postId}
                    className="w-[33%] h-[55vh] text-center"
                  >
                    <div className="w-[24.5%] flex flex-col items-center justify-center text-[#00000000] hover:text-[white]  h-[55vh] hover:bg-[#0000006d] absolute ">
                      <div className="flex gap-[60px] ">
                        <div className="flex items-center gap-[5px]">
                          <Favorit/>
                          <h1 className="text-[20px] font-[700]">
                            {e.postLikeCount}
                          </h1>
                        </div>
                        <div className=" flex  items-center gap-[5px]">
                          <Map/>
                          <h1 className="text-[20px] font-[700]">
                            {e.commentCount}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[100%] h-[55vh] bg-[red] object-cover"
                      src={`${import.meta.env.VITE_APP_FILES_URL}/${
                        e.images[0]
                      }`}
                      alt=""
                    />
                  </div>
                );
              })}
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default Users;

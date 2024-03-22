import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getExplore,
  getPostById,
  postComment,
  postLike,
} from "../../api/ExploreApi/ExploreApi";
import post from "../../assets/icons/Carousel.svg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MapsUgcSharpIcon from "@mui/icons-material/MapsUgcSharp";
// import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { setComment } from "../../reducers/explore/Explore";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",

  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const Explore = () => {
  const data = useSelector((state) => state.explore.data);
  const Byid = useSelector((state) => state.explore.ById);
  let comments = useSelector((store) => store.explore.Comments);

  const dispatch = useDispatch();

  const imgUrl = import.meta.env.VITE_APP_FILES_URL;

  useEffect(() => {
    dispatch(getExplore());
  }, [dispatch]);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState();

  const handleOpen = () => {
    setOpen(true);
    dispatch(getPostById(idx));
  };

  const formatDate = (datePublished) => {
    const date = new Date(datePublished);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formattedDate = formatDate(Byid?.datePublished);

  const handleClose = () => setOpen(false);

  const [isSaved, setSaved] = useState(false);

  const handleBookmarkClick = () => {
    setSaved((prevSaved) => !prevSaved);
  };

  const [openDialog, setOpenDialog] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [isFollowing, setFollowing] = useState(false);

  const handleButtonClick = () => {
    setFollowing((prevFollowing) => !prevFollowing);
  };

  return (
    <div className="w-[75%] m-auto">
      <div className="grid grid-cols-3 gap-[5px] mt-[30px] ">
        {data?.map((el, i) => {
          return (
            <div
              style={{ position: "relative" }}
              key={i}
              onClick={() => {
                handleOpen(), setIdx(el.postId);
                dispatch(getPostById(el.postId));
              }}
              className={
                i + 1 == 3 ||
                i + 1 == 6 ||
                i + 1 == 13 ||
                i + 1 == 16 ||
                i + 1 == 21 ||
                i + 1 == 28
                  ? " w-[300px] row-span-2 h-[610px] rounded-[1px] hover:opacity-50 duration-100 ease-in cursor-pointer text-center"
                  : "h-[300px] w-[300px] rounded-[1px] hover:opacity-50 duration-100 ease-in cursor-pointer text-center"
              }
            >
              <div className="w-[100%] flex flex-col items-center justify-center text-[#00000000] hover:text-[white]  h-[100%] hover:bg-[#0000006d] absolute ">
                <div className="flex gap-[60px] ">
                  <div className="flex items-center gap-[5px]">
                    <FavoriteIcon />
                    <h1 className="text-[20px] font-[700]">
                      {el.postLikeCount}
                    </h1>
                  </div>
                  <div className=" flex  items-center gap-[5px]">
                    <MapsUgcSharpIcon />
                    <h1 className="text-[20px] font-[700]">
                      {el.commentCount}
                    </h1>
                  </div>
                </div>
              </div>
              <img
                className={
                  i + 1 == 3 ||
                  i + 1 == 6 ||
                  i + 1 == 13 ||
                  i + 1 == 16 ||
                  i + 1 == 21 ||
                  i + 1 == 28
                    ? " w-[300px] h-[610px]  object-cover"
                    : "h-[300px] w-[300px] object-cover"
                }
                src={`${imgUrl}/${el?.images}`}
                alt=""
              />
              {el?.images?.length > 1 ? (
                <img
                  className="relative top-4 left-[360px]"
                  src={post}
                  alt=""
                />
              ) : null}
            </div>
          );
        })}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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

      <Dialog
        fullScreen={fullScreen}
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="flex w-[400px]  text-center flex-col">
          <div className="py-[15px] cursor-pointer">
            <h1 className="text-[#ed4956] font-[600]">Сomplain</h1>
          </div>
          <div className="py-[15px] cursor-pointer border-t">
            <h1 className="text-[#000000]">Go to publication</h1>
          </div>
          <div className="py-[15px] cursor-pointer border-t">
            <h1 className="text-[#000000]">Share...</h1>
          </div>
          <div className="py-[15px] cursor-pointer border-t">
            <h1 className="text-[#000000]">Copy link</h1>
          </div>
          <div className="py-[15px] cursor-pointer border-t">
            <h1 className="text-[#000000]">Embed on the site</h1>
          </div>
          <div className="py-[15px] cursor-pointer border-t">
            <h1 className="text-[#000000]">About the account</h1>
          </div>
          <div
            onClick={handleCloseDialog}
            className="py-[15px] cursor-pointer border-t"
          >
            <h1 className="text-[#000000]">Сancel</h1>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Explore;

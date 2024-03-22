import React, { useEffect, useState } from "react";
import img from "../../assets/images/message.svg";
import img1 from "../../assets/images/message1.svg";
import img2 from "../../assets/images/1.svg";
import img3 from "../../assets/images/2.svg";
import calling from "../../assets/video/call.mp3";
import imageee from "../../assets/images/polzovatel.jpg";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ClearIcon from "@mui/icons-material/Clear";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SearchIcon from "@mui/icons-material/Search";
import CallIcon from "@mui/icons-material/Call";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import SendIcon from "@mui/icons-material/Send";
import { getToken } from "../../utils/token";
import "../../App.css";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { axiosRequest } from "../../utils/axiosRequest";
import { useDispatch, useSelector } from "react-redux";
import {
  getById,
  getUser,
  searchUser,
  getMessage,
  deleteChat,
  postChat,
  // sendMessage,
  deleteMessage,
} from "../../api/Message/messageApi";
import { setUserMessage } from "../../reducers/Message/Message";
import { useNavigate } from "react-router";

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  border: "none",
};

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
const Message = () => {
  const data = useSelector((state) => state.message.data);
  const user1 = useSelector((state) => state.message.user1);
  const message = useSelector((state) => state.message);
  const byid = useSelector((state) => state.message.byid);
  const chatmessage = useSelector((state) => state.message.chatMessage);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    borderRadius: "12px",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
  };

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => {
    setOpen2(false);
  };

  const dispatch = useDispatch();

  const [user, setUser] = useState([]);
  const [search, setsearch] = useState("");
  const [modal, setmodal] = useState(false);
  const [call, setCall] = useState(false);
  // const [user1, setUser1] = useState([]);
  const [chat, setchat] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [idx, setidx] = useState(null);
  const [chatContent, setChatContent] = useState(false);
  const [idx1, setidx1] = useState(null);
  const [message1, setMessage1] = useState("");
  const [chatIdx, setChatIdx] = useState(null);
  const [chatIdx1, setChatIdx1] = useState(null);
  const [chatIdx2, setChatIdx2] = useState(null);

  // const userProfile = useSelector((store) => store.profile.userProfile);

  const [messageidx, setMessageidx] = useState(null);
  const [emoji, setEmoji] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [card, setCard] = useState(false);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  useEffect(() => {
    dispatch(searchUser());
  }, []);
  useEffect(() => {
    dispatch(getById());
  }, []);
  useEffect(() => {
    dispatch(getMessage());
  }, []);

  // console.log(user1);

  // async function getUser() {
  //   try {
  //     let { data } = await axiosRequest.get("Chat/get-chats");
  //     setUser(data.data)
  //     console.log(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function searchUser(text) {
  //   try {
  //     let { data } = await axiosRequest.get(`User/get-users?UserName=${text}`);
  //     setUser1(data.data)
  //     console.log(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function postChat() {
  //   try {
  //     console.log(idx);
  //     const { data } = await axiosRequest.post(
  //       `Chat/create-chat?receiverUserId=${idx}`
  //     );
  //     getUser(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function sendMessage(e) {
    e.preventDefault();
    if (message1.trim().length > 0) {
      try {
        console.log(chatIdx);
        // console.log(text);
        const obj = {
          chatId: chatIdx,
          messageText: message1,
        };
        const { data } = await axiosRequest.post(`Chat/send-message`, obj);
        // getMessage(chatIdx);
        dispatch(getMessage(chatIdx2));
        setMessage1("");
      } catch (error) {
        console.log(error);
      }
    } else {
      // getMessage(chatIdx);
      alert("Please enter your message");
    }
  }

  const navigate = useNavigate();

  return (
    <>
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="w-[90%] flex items-center justify-between pt-[10px] m-auto">
            <h1 className="font-[800] ml-[33%] text-[25px] font-mono">
              New Message
            </h1>
            <ClearIcon onClick={handleClose} />
          </div>
          <DialogContent>
            <div className="flex justify-between w-[100%] border-t pt-[10px] border-b  pb-[10px] m-auto items-center">
              <SearchIcon />
              <input
                onInput={(e) => setsearch(e.target.value)}
                onChange={(e) => dispatch(searchUser(e.target.value))}
                className="outline-none  pr-[200px] pl-[10px] "
                type="text"
                placeholder="Search..."
                name=""
                id=""
              />
            </div>
          </DialogContent>
          <div className="w-[90%] h-[50%] overflow-y-scroll m-auto">
            {search.length == 0 ? (
              <div className="h-[150px]">
                <h1>No accounts</h1>
              </div>
            ) : (
              <div className="">
                {user1.length > 0 &&
                  user1.map((e) => {
                    return (
                      <div className="flex justify-between items-center">
                        <div className="flex w-[90%] items-center mt-[2%]">
                          {e.avatar == null || e.avatar == "" ? (
                            <img
                              className="w-[40px] h-[40px] object-cover"
                              src={imageee}
                              alt={"profile"}
                            />
                          ) : (
                            <img
                              className="w-[40px] h-[40px] rounded-[50%] object-cover"
                              src={`${import.meta.env.VITE_APP_FILES_URL}${
                                e?.avatar
                              }`}
                              alt={"profile"}
                            />
                          )}
                          <div className="ml-[5%]">
                            <h1 className="font-mono font-[800]">
                              {e.userName}
                            </h1>
                            <h1 className="w-[100%] font-mono">{e.fullName}</h1>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          onClick={() => {
                            setidx(e.id), console.log(e.id);
                          }}
                          className=" rounded-[50%]"
                        />
                      </div>
                    );
                  })}
              </div>
            )}
          </div>

          <DialogActions>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => {
                dispatch(postChat(idx)), handleClose();
              }}
            >
              Chat
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      <div className="flex justify-between ">
        <div className="w-[30%] pt-[27px] ">
          <div className="flex w-[90%] m-auto justify-between items-center">
            {/* <h1 className="text-[22px] font-[700]">{userProfile?.userName}</h1> */}

            <EditNoteIcon
              onClick={handleClickOpen}
              sx={{ color: "#2563EB", fontSize: 40 }}
            />
          </div>
          <div className="flex w-[90%] m-auto justify-between items-center mt-[5%]">
            <p className="text-[#A7B1BE] text-[18px] font-mono font-[700]">
              Messages
            </p>
            <h1 className="font-[700] text-[16px] font-mono text-blue-500">
              Requests
            </h1>
          </div>
          <div className="w-[90%] m-auto mt-[5%] h-[70%] overflow-y-scroll">
            {data.length > 0 &&
              data.map((e) => {
                console.log(data);
                return (
                  <div
                    onClick={() => {
                      setidx1(e.chatId),
                        setChatIdx(e.chatId),
                        console.log(e.chatId),
                        setChatContent(true),
                        dispatch(getById(e.receiveUser.userId)),
                        dispatch(getMessage(e.chatId));
                      setChatIdx2(e.chatId);
                    }}
                    className="flex items-center mt-[5%] hover:bg-[#EFF6FF] rounded-[5px] p-[5px]"
                  >
                    {/* <img src={img1} alt="" /> */}
                    {e.receiveUser.userPhoto == null ||
                    e.receiveUser.userPhoto == "" ? (
                      <img
                        className="w-[50px] h-[50px] rounded-[50%] object-cover"
                        src={imageee}
                        alt={"profile"}
                      />
                    ) : (
                      <img
                        className="w-[50px] h-[50px] rounded-[50%] object-cover"
                        src={`${import.meta.env.VITE_APP_FILES_URL}${
                          e.receiveUser.userPhoto
                        }`}
                        alt={"profile"}
                      />
                    )}
                    <div className="ml-[10px]">
                      <h1 className="text-[16px] font-[600]">
                        {e.receiveUser.userName}
                      </h1>
                      <p className="text-[#A7B1BE] text-[14px] font-mono">
                        Active 3m ago
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {!chatContent ? (
          <div className="w-[70%] text-center h-[595px] border-l ">
            <div className=" mt-[20%] w-[100%] ">
              <img className="w-[15%] ml-[43%] mb-[2%]" src={img} alt="" />
              <h1 className="font-[700] text-[22px]">Your messages</h1>
              <p className="text-[#A7B1BE] font-[500]">
                Send private photos and messages to a friend or group
              </p>
              <button
                onClick={handleClickOpen}
                className="bg-[#3B82F6] mt-[2%] text-[white] w-[20%] text-[16px] font-mono h-[42px] rounded-[10px]  font-[600]"
              >
                Send message
              </button>
            </div>
          </div>
        ) : (
          <div className="w-[70%]  pt-[1.5%] border-l ">
            <div className="w-[100%] border-b pb-[10px]">
              <div className="w-[95%] m-auto ">
                <div className="flex justify-between w-[100%] m-auto  ">
                  <div className="flex items-center w-[80%]">
                    {message.userMessage?.image == null ||
                    message.userMessage?.image == "" ? (
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src={imageee}
                        alt={"profile"}
                      />
                    ) : (
                      <img
                        className="w-[50px] h-[50px] rounded-[50%] object-cover"
                        src={`${import.meta.env.VITE_APP_FILES_URL}${
                          message.userMessage?.image
                        }`}
                        alt={"profile"}
                      />
                    )}
                    <div className="ml-[2%]">
                      {console.log(message)}
                      <h1 className="text-[16px] font-[600]">
                        {message.userMessage?.userName}
                      </h1>
                      <p className="text-[#A7B1BE] text-[14px] font-mono">
                        Active 3m ago
                      </p>
                    </div>
                  </div>
                  <div className="w-[15%] flex justify-between items-center">
                    <CallIcon onClick={() => setCall(true)} />
                    <VideocamOutlinedIcon onClick={() => setCall(true)} />
                    <InfoOutlinedIcon onClick={() => setmodal(true)} />
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => setmodal(close)}
              className="h-[77vh] overflow-y-scroll "
            >
              <div className="">
                {chatmessage?.map((e) => {
                  if (e.userId == getToken().sid) {
                    return (
                      <div className="w-[100%] flex text-start justify-end items-center">
                        <div className="">
                          <h1
                            onClick={() => {
                              handleOpen1(),
                                setMessageidx(e.messageId),
                                setChatIdx1(e.chatId);
                            }}
                            className="card1 font-[700] text-[#A7B1BE] mt-[5px] pr-[5px] rounded-[50px] text-[20px] "
                          >
                            ...
                          </h1>
                        </div>
                        <div className="card bg-blue-500 text-end flex flex-wrap p-[8px] font-[600] mr-[1%] rounded-[10px_10px_0px_10px] gap-2 text-[16px] text-[white] mt-[2%]">
                          {e.messageText}
                        </div>
                        {/* <h1>{e.sendMassageDate}</h1> */}
                      </div>
                    );
                  } else {
                    return (
                      <div className="w-[100%] flex text-start items-center ">
                        <div className="card bg-[#F8FAFC] ml-[1%] text-end flex flex-wrap p-[8px] font-[600] rounded-[0px_10px_10px_10px] gap-2 text-[16px] text-[#475569] mt-[2%]">
                          {e.messageText}
                        </div>
                        <div className="ml-[1%]">
                          <h1
                            onClick={() => {
                              handleOpen1(),
                                setMessageidx(e.messageId),
                                setChatIdx1(e.chatId);
                            }}
                            className="card1 font-[700] text-[#A7B1BE] mt-[5px] pr-[5px] rounded-[50px] text-[20px] "
                          >
                            ...
                          </h1>
                        </div>
                        {/* <h1>{e.sendMassageDate}</h1> */}
                      </div>
                    );
                  }
                })}
              </div>
              {/* // <div className="">
                //   {chatmessage?.map((e) => {
                //     return (
                //       <div className="w-[100%] flex text-end items-center">
                //         <div className="">
                //           <h1
                //             onClick={() => {
                //               handleOpen1(), setMessageidx(e.messageId);
                //             }}
                //             className="card1 font-[700] text-[#A7B1BE] mt-[5px] pr-[5px] rounded-[50px] text-[20px] "
                //           >
                //             ...
                //           </h1>
                //         </div>
                //         <div
                //           className="card bg-blue-500 text-end flex flex-wrap p-[6px] mr-[0.5%] font-[700] rounded-[10px_10px_0px_10px] gap-2 text-[18px] text-[white] mt-[2%]"
                //           onMouseEnter={() => setmodal(false)}
                //         >
                //           {e.messageText}
                //         </div>
                //       </div>
                //     );
                //   })}
                // </div> */}
            </div>

            <div className="">
              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style1}>
                  <p className="text-[#A7B1BE] text-[14px]">6:25 AM</p>
                  <div className="w-[100%]">
                    <p className="  flex text-[18px] mt-[4%] pt-[5px] border-t">
                      Send Message
                      <p>
                        {" "}
                        <SendIcon sx={{ paddingLeft: 1, fontSize: 30 }} />
                      </p>
                    </p>
                    <p className="  flex text-[18px] mt-[4%] pt-[5px]">
                      Copy{" "}
                      <p>
                        <ContentCopyIcon sx={{ marginLeft: 1 }} />
                      </p>
                    </p>
                  </div>
                  <div className="w-[100%]">
                    <p
                      onClick={() => {
                        dispatch(
                          deleteMessage({ id: messageidx, chatId: chatIdx1 })
                        ),
                          handleClose1(false),
                          console.log(chatIdx1);
                      }}
                      className="text-red-500  flex text-[18px] mt-[4%] pt-[5px] border-t"
                    >
                      Cancel message{" "}
                      <p>
                        <SettingsBackupRestoreIcon
                          sx={{ marginLeft: 1 }}
                          color="red"
                        />
                      </p>
                    </p>
                  </div>
                </Box>
              </Modal>
            </div>

            <form
              onSubmit={sendMessage}
              className="w-[98%] mt-[1%] flex items-center m-auto h-[45px] border  rounded-[10px]"
            >
              <SentimentSatisfiedAltOutlinedIcon
                sx={{ paddingLeft: 1, fontSize: 35 }}
                onClick={() => setEmoji(true)}
              />
              <input
                type="text"
                className=" outline-none pl-[10px] w-[84%]"
                value={message1}
                onChange={(event) => setMessage1(event.target.value)}
                placeholder="Write a message..."
              />

              {message1.trim().length > 0 ? (
                <div className="">
                  <button
                    type="submit"
                    onClick={() => sendMessage()}
                    className="text-[#15bdff] flex items-center ml-[-15%] font-mono font-[700]"
                  >
                    Opublikovat{" "}
                    <SendIcon sx={{ paddingLeft: 1, fontSize: 30 }} />
                  </button>
                </div>
              ) : (
                <div className="ml-[3%]">
                  <MicNoneOutlinedIcon sx={{ fontSize: 27 }} />
                  <InsertPhotoOutlinedIcon
                    sx={{ paddingLeft: 1, fontSize: 35 }}
                  />
                </div>
              )}
            </form>
          </div>
        )}
      </div>

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="text-center px-[40px] py-[25px]">
            <h1 className="text-[21px] mb-[5px]">Delete chat forever?</h1>
            {/* <h1 className="text-[grey]">
            You will not be able to undo this action. If you clear history
              search, the accounts you searched for may still
              appear in recommended results.
            </h1> */}
          </div>
          <button
            onClick={() => {
              {
                setChatContent(false),
                  handleClose2(),
                  dispatch(deleteChat(idx1));
              }
            }}
            className="py-[13px] border-t border-[#cecece] text-red-500 font-[600]"
          >
            Delete forever
          </button>
          <button
            onClick={handleClose2}
            className="py-[13px] border-t border-[#cecece]"
          >
            Not now
          </button>
        </Box>
      </Modal>

      {modal ? (
        <div className=" overflow-hidden">
          <div className="open h-[100%] w-[25%] left-[75%] absolute top-0 border bg-white">
            <div className="w-[90%] mt-[6%] m-auto">
              <h1 className="font-[500] text-[22px]  ">Information</h1>
            </div>
            <div className="w-[100%] pb-[20px] border-b">
              <div className="w-[90%] m-auto flex mt-[12%]  justify-between">
                <h1 className=" w-[60%] text-[22px] ">
                  Turn off message notifications
                </h1>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                />
              </div>
            </div>
            <div className="w-[90%] m-auto mt-[7%]">
              <h1 className="font-[700] text-[18px] font-mono mb-[2%] ">
                Users
              </h1>
              <div className="flex items-center w-[80%] mt-[5%]">
                {message.userMessage?.image == null ||
                message.userMessage?.image == "" ? (
                  <img
                    className="w-[50px] h-[50px] object-cover"
                    src={imageee}
                    alt={"profile"}
                  />
                ) : (
                  <img
                    className="w-[50px] h-[50px] rounded-[50%] object-cover"
                    src={`${import.meta.env.VITE_APP_FILES_URL}${
                      message.userMessage?.image
                    }`}
                    alt={"profile"}
                  />
                )}
                <div className="ml-[2%]">
                  {console.log(message)}
                  <h1 className="text-[16px] font-[600]">
                    {message.userMessage?.userName}
                  </h1>
                  <p className="text-[#A7B1BE] text-[14px] font-mono">
                    Active 3m ago
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[100%]  border-t pt-[5px] mt-[44%]">
              <div className="w-[90%] m-auto ">
                <button className="text-red-500  block text-[20px] mt-[5%]">
                  Punishment
                </button>
                <button className="text-red-500  block text-[20px] mt-[5%]">
                  Block User
                </button>
                <button
                  className="text-red-500  block text-[20px] mt-[5%]"
                  onClick={() => {
                    setmodal(false), handleOpen2();
                  }}
                >
                  Delete Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {emoji ? (
        <div className="absolute top-1 bg-[green]">
          <img src="&#128512" alt="" />
          <h1></h1>
        </div>
      ) : null}
      {call ? (
        <div className="w-[100%] h-[100%] bg-gray-900 absolute top-0 left-[-0%]">
          <div className=" mt-[1%] text-center w-[100%]">
            <div className="flex w-[90%] m-auto mb-[3%] justify-between items-center">
              <img
                className="w-[3%]"
                src="https://cdn2.iconfinder.com/data/icons/music-player-icons-filled/46/Drop_Down-1024.png"
                alt=""
              />
              <img
                onClick={() => setCall(false)}
                className="w-[70px] h-[70px] rounded-[50%]"
                src="https://e7.pngegg.com/pngimages/455/885/png-clipart-telephone-call-computer-icons-iphone-iphone-electronics-text.png"
                alt=""
              />
            </div>
            <audio autoPlay src={calling}></audio>
            {message.userMessage?.image == null ||
            message.userMessage?.image == "" ? (
              <img
                className="w-[130px] rounded-[50%] ml-[44.5%] mb-[2%] h-[130px] object-cover"
                src={imageee}
                alt={"profile"}
              />
            ) : (
              <img
                className="w-[130px] rounded-[50%] ml-[44.5%] mb-[2%] h-[130px] object-cover"
                src={`${import.meta.env.VITE_APP_FILES_URL}${
                  message.userMessage?.image
                }`}
                alt={"profile"}
              />
            )}
            <h1 className="text-[20px] text-white font-[900] mb-[1.5%]">
              {message.userMessage?.fullName}
            </h1>
            <h1 className="text-[16px] text-white  font-[600]">
              Connecting....
            </h1>
          </div>
          <div className="mt-[4%]">
            <img
              className="w-[60%] m-auto h-[60px] "
              src="https://bogatyr.club/uploads/posts/2023-03/1678895524_bogatyr-club-p-radiovolni-fon-foni-pinterest-46.png"
              alt=""
            />
          </div>
          <div className="flex items-center w-[60%] mt-[4%] m-auto justify-between">
            <VideocamOutlinedIcon sx={{ color: "white", fontSize: "60px" }} />
            <MicNoneOutlinedIcon sx={{ color: "white", fontSize: "60px" }} />
            <img className="w-[100px]" src={img2} alt="" />
            <img className="w-[100px]" src={img3} alt="" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Message;

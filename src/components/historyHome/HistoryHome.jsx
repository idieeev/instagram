import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import closeClose from "/src/assets/imgHome/closeolo.webp";
import "/src/components/historyHome/styles.css";

// import required modules
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";
import heart from "/src/assets/imgHome/8666647_heart_icon.png";
import send from "/src/assets/imgHome/send.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, getHistory, getTodosByPost12 } from "../../api/home/home";
import notFoundUser from "/src/assets/imgHome/notFoundUser.jpg";
import heartActive from "/src/assets/imgHome/heartAcive.png";

/////////////////storie/////
import Stories, { WithSeeMore } from "react-insta-stories";
import { falseTrueModal } from "../../reducers/Home/Home";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",

  bgcolor: "#282222",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const HistoryHome = ({ state1 }) => {
  const [love, setLove] = useState("");
  const [open, setOpen] = React.useState(state1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const urlImg = import.meta.env.VITE_APP_FILES_URL;
  useEffect(() => {
    // dispatch(getUserAbout())
    dispatch(getTodosByPost12());
    dispatch(getAllUser());
    dispatch(getHistory());
  }, []);
  const dataHistory = useSelector((store) => store.homeJs.dataHistory);
  const dataClose = useSelector((store) => store.homeJs.modalOpenClose);

  return (
    <div className="bg-white mx-auto ">
    
      <Modal
        open={dataClose}
        // onClose={dataClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex gap-[10px]">
            <button className="w-[40px]">
              <img
                className="invert"
                onClick={()=>dispatch(falseTrueModal())}
                src={closeClose}
                alt=""
              />
            </button>
            <p className="text-[30px] font-[600] text-[white]">𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</p>
          </div>

          <div className="mb-[100px]">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Navigation]}
              className="mySwiper h-[650px] w-[450px] mt-[-20px] mb-[100px]"
            >
              {dataHistory
                ?.filter((elementt) => {
                  return (
                    elementt.userId != "ccff4583-873d-4bb6-a5d0-f71352a37ad9" &&
                    elementt.userId != "e433d813-4c7c-4313-ab12-73b29bc9667e"
                  );
                })
                ?.map((eleme) => {
                  return (
                    <>
                      {/* {console.log(eleme)} */}

                      <SwiperSlide className="h-[600px] bg-[black] text-[white] rounded-[10px] mb-[100px]">
                        <div className="w-[100%]" key={eleme.userId}>
                          <div className="w-[100%] absolute top-0 flex items-center gap-4 border-b-2 px-[10px] py-[10px]">
                            <div className="h-[80px] w-[80px]  ">
                              <img
                                className="w-[80px] h-[80px] object-cover rounded-[50%]"
                                src={
                                  eleme.userPhoto
                                    ? `${urlImg}/${eleme.userPhoto}`
                                    : notFoundUser
                                }
                                alt=""
                              />
                            </div>
                            <div className="text-left">
                              <p>
                                {eleme.fullname.length > 1
                                  ? eleme.userName[0].toUpperCase() +
                                    eleme.fullname.slice(1)
                                  : eleme.fullname.length <= 1
                                  ? `User${Math.floor(Math.random() * 100 + 1)}`
                                  : `User${Math.floor(
                                      Math.random() * 100 + 1
                                    )}`}
                              </p>
                              {/* <p>{eleme.fullname.length>1?eleme.fullname[0].toUpperCase()+eleme.fullname.slice(1):eleme.fullname.length<=1?`User${Math.floor((Math.random() * 100) + 1)}`:`User${Math.floor((Math.random() * 100) + 1)}`}</p> */}

                              {/* <p className='text-[15px]'>{eleme?eleme.fullname.slice(0,5)+"...":eleme.fullname==""?`User${Math.floor((Math.random() * 100) + 1)}`:eleme.fullname.length==1?`User${Math.floor((Math.random() * 100) + 1)}`:`User${Math.floor((Math.random() * 100) + 1)}`}</p> */}
                              <p className="text-[15px]">
                                {eleme
                                  ? eleme.userName.slice(0, 5) + "..."
                                  : eleme.userName == ""
                                  ? `User${Math.floor(Math.random() * 100 + 1)}`
                                  : eleme.userName.length == 1
                                  ? `User${Math.floor(Math.random() * 100 + 1)}`
                                  : `User${Math.floor(
                                      Math.random() * 100 + 1
                                    )}`}
                              </p>
                            </div>
                          </div>
                          <div className="w-[100%]">
                            <div className="w-[100%]">
                              <div className="flex w-[100%] h-[450px] mt-[50px]">
                                <Swiper
                                  slidesPerView={1}
                                  spaceBetween={30}
                                  keyboard={{
                                    enabled: true,
                                  }}
                                  // centeredSlides={true}
                                  autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                  }}
                                  pagination={{
                                    clickable: true,
                                  }}
                                  modules={[Keyboard, Autoplay]}
                                  className="bg-inherit h-[100%] "
                                >
                                  {eleme?.stories.map((er) => {
                                    return (
                                      <>
                                        {er.fileName ? (
                                          <SwiperSlide className="lated bg-black h-[100%] w-[100%]">
                                            <div className="w-[300px] bg-inherit">
                                              <img
                                                className="w-[300px] "
                                                src={
                                                  er.fileName
                                                    ? `${urlImg}/${er.fileName}`
                                                    : notFoundUser
                                                }
                                                alt=""
                                              />
                                            </div>
                                          </SwiperSlide>
                                        ) : null}
                                      </>
                                    );
                                  })}
                                  <div className="w-[80%] left-[10%] mt-[0px] absolute z-[9999] flex items-center gap-6">
                                    <input
                                      className="w-[80%] border-[2px] h-[50px] border-[white] rounded-[50px] bg-inherit px-[10px] text-[15px]"
                                      placeholder={`Ответьте ${
                                        eleme
                                          ? eleme.fullname.slice(0, 5) + "..."
                                          : eleme.fullname == ""
                                          ? `User${Math.floor(
                                              Math.random() * 100 + 1
                                            )}`
                                          : eleme.fullname.length == 1
                                          ? `User${Math.floor(
                                              Math.random() * 100 + 1
                                            )}`
                                          : `User${Math.floor(
                                              Math.random() * 100 + 1
                                            )}`
                                      }`}
                                      type="text"
                                    />
                                    <div className=" w-[30px]">
                                      {eleme.userId == love ? (
                                        <img
                                          src={heartActive}
                                          className=" "
                                          onClick={() => setLove(eleme.userId)}
                                          alt=""
                                        />
                                      ) : (
                                        <img
                                          src={heart}
                                          className=" invert"
                                          onClick={() => setLove(er.id)}
                                          alt=""
                                        />
                                      )}
                                    </div>
                                    <div className=" w-[30px]">
                                      <img
                                        src={send}
                                        className="invert "
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </Swiper>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  );
                })}
            </Swiper>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default HistoryHome;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../App.css";
import {
  getUsers,
  getUserHistory,
  postUserHistory,
  delUserHistory,
  delUserHistorys,
} from "../../../pages/search/search";
import user from "../../../assets/images/polzovatel.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
};

const MySearch = ({ state }) => {
  const data = useSelector((state) => state.searchUsers.data);
  console.log(data);
  const dataHistory = useSelector((state) => state.searchUsers.dataHistory);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUserHistory());
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(getUserHistory());
  };

  return (
    <div className="searchMod bg-[white]">
      <article className="py-[20px] px-[16px] border-b">
        <h1 className="text-[24px] font-[600] ml-[4px]">Search query</h1>
        <input
          type="text"
          className="bg-gray-100 px-[10px] py-[10px] rounded-[7px] w-[100%] mt-[7.5vh] outline-none"
          placeholder="Поиск"
          onChange={(e) => dispatch(getUsers(e.target.value))}
          onInput={(e) => setSearch(e.target.value)}
        />
      </article>

      <nav>
        {search.length === 0 ? (
          <div>
            <div className="px-[21px] py-[15px] pt-[20px] flex justify-between items-end">
              <h1 className="font-[600] text-[15px]">Recent</h1>

              {dataHistory.length === 0 ? (
                <h1></h1>
              ) : (
                <button
                  onClick={() => {
                    handleOpen();
                  }}
                  className="text-[#3b8ff6] font-[500] hover:text-blue-900"
                >
                  clear all
                </button>
              )}
            </div>
            {dataHistory.length === 0 ? (
              <h1 className="text-center text-[grey] mt-[28vh]">
                There are no recent requests.
              </h1>
            ) : (
              dataHistory.map((e) => {
                return (
                  <Link to={`users/${e.users.id}`} onClick={() => state(false)}>
                    <div
                      key={e.id}
                      className="flex justify-between items-center w-[100%] hover:bg-gray-200 px-[24px] py-[10px]"
                    >
                      <div className="flex w-[90%] items-center">
                        {e.users.avatar == null || e.users.avatar == "" ? (
                          <img
                            className="w-[43px] h-[43px] object-cover rounded-[100px]"
                            src={user}
                            alt={"profile"}
                          />
                        ) : (
                          <img
                            className="w-[43px] h-[43px] rounded-[50%] object-cover"
                            src={`${import.meta.env.VITE_APP_FILES_URL}${
                              e?.users.avatar
                            }`}
                            alt={"profile"}
                          />
                        )}
                        <div className="ml-[5%]">
                          <h1 className="text-[14px] font-[600]">
                            {e.users.userName}
                          </h1>
                          <h1 className="text-[14px] text-gray-500 mt-[-5px]">
                            {e.users.fullName}
                            {e.id}
                          </h1>
                        </div>
                      </div>
                      <button onClick={() => dispatch(delUserHistory(e.id))}>
                        <CloseIcon sx={{ color: "grey" }} />
                      </button>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        ) : (
          <main>
            {data.map((e) => {
              return (
                <Link to={`users/${e.id}`} onClick={() => state(false)}>
                  <div
                    onClick={() => dispatch(postUserHistory(e.id))}
                    key={e.id}
                    className="flex justify-between items-center w-[100%] hover:bg-gray-200 px-[24px] py-[10px]"
                  >
                    <div className="flex w-[90%] items-center">
                      {e.avatar == null || e.avatar == "" ? (
                        <img
                          className="w-[43px] h-[43px] object-cover rounded-[100px]"
                          src={user}
                          alt={"profile"}
                        />
                      ) : (
                        <img
                          className="w-[43px] h-[43px] rounded-[50%] object-cover"
                          src={`${import.meta.env.VITE_APP_FILES_URL}${
                            e?.avatar
                          }`}
                          alt={"profile"}
                        />
                      )}
                      <div className="ml-[5%]">
                        <h1 className="text-[14px] font-[600]">{e.userName}</h1>
                        <h1 className="text-[14px] text-gray-500 mt-[-5px]">
                          {e.fullName}
                        </h1>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </main>
        )}
      </nav>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="text-center px-[40px] py-[25px]">
            <h1 className="text-[21px] mb-[5px]">Clear search history?</h1>
            <h1 className="text-[grey]">
              You will not be able to undo this action. If you clear history
              search, the accounts you searched for may still appear in
              recommended results.
            </h1>
          </div>
          <button
            onClick={() => {
              handleClose(), dispatch(delUserHistorys());
            }}
            className="py-[13px] border-t border-[#cecece] text-red-500 font-[600]"
          >
            clear all
          </button>
          <button
            onClick={handleClose}
            className="py-[13px] border-t border-[#cecece]"
          >
            Not now
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default MySearch;

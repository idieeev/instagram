import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import axios from "axios";
import { axiosRequest } from "../../utils/axiosRequest";
import { useLocation, useNavigate } from "react-router-dom";

const Security = () => {
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [resetPasswordModal, setResetPasswordModal] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      OldPassword: "",
      Password: "",
      ConfirmPassword: "",
    },
    onSubmit: async () => {
      try {
        const { data } = await axiosRequest.put(
          `Account/ChangePassword?OldPassword=${formik.values.OldPassword}&Password=${formik.values.Password}&ConfirmPassword=${formik.values.ConfirmPassword}`,
          formik.values
        );
        if (data.statusCode == 200) {
          alert("Password changed to ", formik.values.Password);
        }
        setChangePasswordModal(false);
        formik.values.ConfirmPassword = "";
        formik.values.Password = "";
        formik.values.OldPassword = "";
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (!localStorage.getItem("access_token")) {
    useEffect(() => {
      navigate("/");
    }, []);
  } else {
    return (
      <div className="p-[20px_50px] flex flex-col gap-7 bg-[#f2f2f2] min-h-screen">
        <p className="text-[40px] font-bold">Password and Security</p>
        <p className="text-[20px] font-[600]">Login and account recovery</p>
        <p className="text-[20px] text-gray-400 mt-[-20px]">
          Manage passwords, login settings and account recovery methods.
        </p>

        <div className="rounded-xl flex flex-col">
          <div
            onClick={() => setChangePasswordModal(true)}
            className="w-[100%] rounded-[12px_12px_0_0] p-[10px] flex justify-between items-center bg-[white] hover:bg-[#ccc] cursor-pointer"
          >
            <p className="text-[20px]">Change password</p>
            <IconButton>
              <ChevronRightIcon fontSize="large" />
            </IconButton>
          </div>
          <div
            onClick={() => setResetPasswordModal(true)}
            className="w-[100%] border-t-[3px] rounded-[0_0_12px_12px] border-t-[#f2f2f2] p-[10px] flex justify-between items-center bg-[white] hover:bg-[#ccc] cursor-pointer"
          >
            <p className="text-[20px]">Reset password</p>
            <IconButton>
              <ChevronRightIcon fontSize="large" />
            </IconButton>
          </div>
        </div>

        {changePasswordModal ? (
          <div className="z-50 w-[35%]  fixed top-[10%] right-[30%] p-[18px] rounded-md bg-gradient-to-r from-[#ecd4d8]  via-[#bcc1c3] via-[40%] to-[#bee7e9]">
            <div className="flex items-center justify-end">
              <IconButton onClick={() => setChangePasswordModal(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="p-[10px] mt-[10px] flex flex-col gap-5">
              <p className="text-[30px] font-bold">Change Password</p>
              <p className="text-[16px] w-[90%]">
                All sessions except the current one will be terminated. This
                will prevent unauthorized access to your account.
              </p>
              <p className="text-[16px] w-[90%]">
                The password must contain at least 6 characters, including
                numbers, letters and special characters (!$@%).
              </p>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-5 mt-[20px]"
            >
              <input
                type="text"
                name="OldPassword"
                value={formik.values.OldPassword}
                onChange={formik.handleChange}
                className="w-[100%] h-[6svh] rounded-md text-[20px] px-[2%] outline-none"
                placeholder="Current Password"
              />
              <input
                type="text"
                name="Password"
                value={formik.values.Password}
                onChange={formik.handleChange}
                className="w-[100%] h-[6svh] rounded-md text-[20px] px-[2%] outline-none"
                placeholder="Current Password"
              />
              <input
                type="text"
                name="ConfirmPassword"
                value={formik.values.ConfirmPassword}
                onChange={formik.handleChange}
                className="w-[100%] h-[6svh] rounded-md text-[20px] px-[2%] outline-none"
                placeholder="Current Password"
              />
              <p className="text-[#1d83ff] text-[20px] font-[600] cursor-pointer">
                Forgot password ?
              </p>
              <button
                className=" rounded-xl bg-[#1d83ff] text-white text-[20px] p-[10px] my-[20px]"
                type="submit"
              >
                Change password
              </button>
            </form>
          </div>
        ) : null}
        {changePasswordModal ? (
          <div
            className="z-20 fixed w-[100%] h-[100%] top-0 right-0 bg-[#0000008F] p-[20px]"
            onClick={() => setChangePasswordModal(false)}
          ></div>
        ) : null}
        {resetPasswordModal ? (
          <div className="z-50 w-[35%]  fixed top-[10%] right-[30%] p-[18px] rounded-md bg-gradient-to-r from-[#ecd4d8]  via-[#bcc1c3] via-[40%] to-[#bee7e9]">
            <div className="flex items-center justify-end">
              <IconButton onClick={() => setResetPasswordModal(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="p-[10px] mt-[10px] flex flex-col gap-5">
              <p className="text-[30px] font-bold">Change Password</p>
              <p className="text-[16px] w-[90%]">
                All sessions except the current one will be terminated. This
                will prevent unauthorized access to your account.
              </p>
              <p className="text-[16px] w-[90%]">
                The password must contain at least 6 characters, including
                numbers, letters and special characters (!$@%).
              </p>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-5 mt-[20px]"
            >
              <input
                type="text"
                name="OldPassword"
                value={formik.values.OldPassword}
                onChange={formik.handleChange}
                className="w-[100%] h-[6svh] rounded-md text-[20px] px-[2%] outline-none"
                placeholder="Current Password"
              />
              <input
                type="text"
                name="Password"
                value={formik.values.Password}
                onChange={formik.handleChange}
                className="w-[100%] h-[6svh] rounded-md text-[20px] px-[2%] outline-none"
                placeholder="Current Password"
              />
              <input
                type="text"
                name="ConfirmPassword"
                value={formik.values.ConfirmPassword}
                onChange={formik.handleChange}
                className="w-[100%] h-[6svh] rounded-md text-[20px] px-[2%] outline-none"
                placeholder="Current Password"
              />
              <p className="text-[#1d83ff] text-[20px] font-[600] cursor-pointer">
                Forgot password ?
              </p>
              <button
                className=" rounded-xl bg-[#1d83ff] text-white text-[20px] p-[10px] my-[20px]"
                type="submit"
              >
                Change password
              </button>
            </form>
          </div>
        ) : null}
        {resetPasswordModal ? (
          <div
            className="z-20 fixed w-[100%] h-[100%] top-0 right-0 bg-[#0000008F] p-[20px]"
            onClick={() => setResetPasswordModal(false)}
          ></div>
        ) : null}
      </div>
    );
  }
};
export default Security;

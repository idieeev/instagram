import React, { useEffect } from "react";
import LogIn from "/src/assets/images/logoinst.svg";
import links from "/src/assets/images/phone1.svg";
import logo from "/src/assets/images/instagram-logo.png";
import TextField from "@mui/material/TextField";
import facebook from "/src/assets/images/facebook.png";
import { useFormik } from "formik";
import { axiosRequest } from "../../utils/axiosRequest";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../../utils/token";
import { FormControl } from "@mui/base";
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const navigation = useNavigate();
  const loginFormik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async () => {
      try {
        let { data } = await axiosRequest.post(
          "Account/login",
          loginFormik.values
        );
        if (data.statusCode == 200) {
          saveToken(data.data);
          navigation("/basic");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if(!localStorage.getItem("access_token"))
  {
    return (
      <div className="w-[100%] pt-[85px] flex flex-wrap justify-center gap-[100px] bg-[white] items-center">
        <div className="w-[34%]">
          <img src={links} alt="Picture" className="mix-blend-multiply" />
        </div>
        <div className="w-[30%] flex flex-col gap-5">
          <div className="w-[100%] flex flex-col items-center p-[20px] rounded-md border-[1.7px] border-[#E2E8F0] gap-5">
            <img src={LogIn} className="w-[70%]" alt="" />
            <form
              onSubmit={loginFormik.handleSubmit}
              className="w-[95%]  flex flex-col gap-5"
            >
              <TextField
                placeholder="Phone number, user name or email"
                name="userName"
                value={loginFormik.values.userName}
                onChange={loginFormik.handleChange}
                type="text"
              />
              <FormControl variant="outlined">
                <OutlinedInput
                sx={{width:"100%"}}
                placeholder="Password"
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginFormik.values.password}
                  onChange={loginFormik.handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <button
                className="bg-[#3B82F6] text-[20px] text-[white] w-[100%] py-[10px] rounded-[5px]"
                type="submit"
              >
                Log in
              </button>
              <button className="text-[#3B82F6] text-[20px] w-[100%] py-[10px] rounded-[5px]">
                Forgot password?
              </button>
            </form>
            <div className="flex items-center justify-between w-[95%] my-[-15px]">
              <hr className="w-[45%] border border-[#E2E8F0]" />
              <p className="text-[20px] text-[gray]">or</p>
              <hr className="w-[45%] border border-[#E2E8F0]" />
            </div>
            <div className="flex gap-2 items-center justify-center">
              <img src={facebook} alt="picture" />
              <p className="text-[20px]">Log in with Facebook</p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center border-[1.7px] border-[#E2E8F0] rounded-md py-[20px]">
            <p className="text-[20px]">Don't have an account?</p>
            <p
              className="text-[20px] text-[#3B82F6] cursor-pointer"
              onClick={() => navigation("/registration")}
            >
              Sign up
            </p>
          </div>
        </div>
        <div className="w-[100%] bg-[white] text-gray-400 text-[16px] flex justify-center py-[10px]">
          <p>© 2024 Instagram from Meta</p>
        </div>
      </div>
    );
  }
  else
  {
    useEffect(() =>
    {
      navigation("/basic")
    } , [])
  }

};

export default Login;

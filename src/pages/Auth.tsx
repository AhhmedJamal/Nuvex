import { onAuthStateChanged } from "firebase/auth";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { AppContext } from "../context/ThemeProvider";
import { RiLoader3Fill } from "react-icons/ri";
function Auth() {
  const Context = useContext(AppContext);
  if (!Context) throw new Error("useTheme must be used within a ThemeProvider");
  const { userData, checkThemeMode } = Context;
  const [isChecked, setIsChecked] = useState(false);
  const [loader, setIsLoader] = useState(false);

  const toggleChecked = (title: string) => {
    title === "signIn" ? setIsChecked(false) : setIsChecked(true);
  };
  const router = useNavigate();
  useEffect(() => {
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
    }, 2000);
    // Check Theme Mode
    checkThemeMode(userData?.uid || "");
    // Check if a user is found
    onAuthStateChanged(auth, (user) => {
      if (localStorage.getItem(`token=${user?.uid}`) === user?.uid) {
        router("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loader ? (
        <div className="h-screen flex flex-col justify-center items-center">
          <RiLoader3Fill size={80} className="animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col h-screen w-full items-center justify-evenly ">
          <div className="flex flex-col  font-bold justify-between w-[80%] sm:w-[400px] my-4">
            <div className=" flex flex-col gap-11 w-full">
              <h1 className=" flex flex-col ">
                <p className="text-[25px] ">Welcome to</p>
                <Logo
                  fontSize="text-[30px]"
                  heightBlur="h-[0px]"
                  bottom="bottom-0"
                />
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="default-checkbox"
                    className="size-5  align-middle border border-neutral-400 appearance-none outline-[none]  cursor-pointer checked:[appearance:auto] checked:accent-primary checked:border-none"
                    checked={!isChecked}
                    onChange={() => toggleChecked("signIn")}
                  />
                  <label htmlFor="default-checkbox" className="ml-2">
                    Sign-In
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="checked-checkbox"
                    className="size-5  align-middle border border-neutral-400 appearance-none outline-[none] cursor-pointer checked:[appearance:auto] checked:accent-primary checked:border-none"
                    checked={isChecked}
                    onChange={() => toggleChecked("create account")}
                  />
                  <label htmlFor="checked-checkbox" className="ml-2">
                    Create Account
                  </label>
                </div>
              </div>
            </div>
            {!isChecked ? <Login /> : <SignUp setChoose={setIsChecked} />}
          </div>
        </div>
      )}
    </>
  );
}

export default Auth;

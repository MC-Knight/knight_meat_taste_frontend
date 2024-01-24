import { Eye, EyeOff, Loader } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  return (
    <div className="h-auto py-20 flex items-center justify-center bg-black/25 bg-menu bg-cover bg-center bg-no-repeat bg-fixed">
      <form
        action=""
        className="min-w-[400px] w-auto flex flex-col items-center justify-center bg-primary rounded-lg p-10 gap-y-5 shadow-sm shadow-grey/20"
      >
        <h1 className="text-md font-main-sans font-medium text-secondary">
          Reset Password
        </h1>

        <div className="w-full flex flex-col items-start justify-start gap-y-2">
          <p className="text-grey font-normal">New Password</p>
          <div className="flex items-center justify-between px-2 h-[40px] w-full border-2 rounded-md border-grey/50 gap-x-1">
            <input
              placeholder="-----------"
              required
              type={isVisible ? "text" : "password"}
              className="w-full h-full outline-none"
            />
            {isVisible ? (
              <EyeOff
                width={20}
                height={20}
                className="text-grey/50 cursor-pointer"
                onClick={() => setIsVisible(!isVisible)}
              />
            ) : (
              <Eye
                width={20}
                height={20}
                className="text-grey/50 cursor-pointer"
                onClick={() => setIsVisible(!isVisible)}
              />
            )}
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-y-2">
          <p className="text-grey font-normal">Confirm Password</p>
          <div className="flex items-center justify-between px-2 h-[40px] w-full border-2 rounded-md border-grey/50 gap-x-1">
            <input
              placeholder="-----------"
              required
              type={isVisible1 ? "text" : "password"}
              className="w-full h-full outline-none"
            />
            {isVisible1 ? (
              <EyeOff
                width={20}
                height={20}
                className="text-grey/50 cursor-pointer"
                onClick={() => setIsVisible1(!isVisible1)}
              />
            ) : (
              <Eye
                width={20}
                height={20}
                className="text-grey/50 cursor-pointer"
                onClick={() => setIsVisible1(!isVisible1)}
              />
            )}
          </div>
        </div>

        <button className="flex min-w-[100px] items-center justify-center text-primary font-main-sans font-normal p-2 rounded-md bg-secondary">
          Create New Password
        </button>

        <div className="flex text-grey">
          Remeber your credentials?
          <Link className="text-secondary ml-1" to="/account" title="login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;

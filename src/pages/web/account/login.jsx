import { Eye, EyeOff, Loader } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="h-auto py-20 flex items-center justify-center bg-black/25 bg-menu bg-cover bg-center bg-no-repeat bg-fixed">
      <form
        action=""
        className="min-w-[400px] w-auto flex flex-col items-center justify-center bg-primary rounded-lg p-10 gap-y-5 shadow-sm shadow-grey/20"
      >
        <h1 className="text-md font-main-sans font-medium text-secondary">
          Login
        </h1>

        <div className="w-full flex flex-col items-start justify-start gap-y-2">
          <p className="text-grey font-normal">Email</p>
          <input
            placeholder="knight@gmail.com"
            required
            type="email"
            className="h-[40px] w-full border-2 rounded-md border-grey/50 outline-none px-2"
          />
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-y-2">
          <p className="text-grey font-normal">Password</p>
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

        <div className="w-full flex items-center justify-end">
          <Link
            className="text-grey"
            to="/account/forgot-password"
            title="register"
          >
            Forgot Password ?
          </Link>
        </div>

        <button className="flex min-w-[100px] items-center justify-center text-primary font-main-sans font-normal p-2 rounded-md bg-secondary">
          Login
        </button>

        <div className="flex text-grey">
          Don’t have an account?
          <Link
            className="text-secondary ml-1"
            to="/account/register"
            title="register"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;

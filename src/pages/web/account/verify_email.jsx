import { Loader } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function VerifyEmail() {
  const [status, setStatus] = useState("");
  return (
    <div className="h-[90vh] py-20 flex items-center justify-center bg-black/25 bg-menu bg-cover bg-center bg-no-repeat bg-fixed">
      <form
        action=""
        className="min-w-[400px] w-auto flex flex-col items-center justify-center bg-primary rounded-lg p-10 gap-y-5 shadow-sm shadow-grey/20"
      >
        {status !== null ? (
          status !== "" ? (
            <>
              <h1 className="text-md font-main-sans font-medium text-secondary">
                Email Verfied successfully
              </h1>

              <Link className="text-secondary ml-1" to="/account" title="login">
                Login
              </Link>
            </>
          ) : (
            <>
              <h1 className="text-md font-main-sans font-medium text-secondary">
                Verfying Email
              </h1>

              <Loader className="animate-spin mt-5 text-secondary" />
            </>
          )
        ) : (
          <>
            <h1 className="text-md font-main-sans font-medium text-secondary">
              Failed to verify your email
            </h1>

            <button className="text-secondary">try again</button>
          </>
        )}
      </form>
    </div>
  );
}

export default VerifyEmail;

import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="h-auto py-20 flex items-center justify-center bg-black/25 bg-menu bg-cover bg-center bg-no-repeat bg-fixed">
      <form
        action=""
        className="min-w-[400px] w-auto flex flex-col items-center justify-center bg-primary rounded-lg p-10 gap-y-5 shadow-sm shadow-grey/20"
      >
        <h1 className="text-md font-main-sans font-medium text-secondary">
          FORGOT PASSWORD?
        </h1>

        <div className="w-full flex flex-col items-start justify-start gap-y-3">
          <p className="text-grey text-sm font-normal">
            Enter your email to get a password reset link
          </p>
          <input
            placeholder="knight@gmail.com"
            required
            type="email"
            className="h-[40px] w-full border-2 rounded-md border-grey/50 outline-none px-2"
          />
        </div>

        <div className="w-full flex items-center justify-end">
          <Link className="text-grey" to="/account" title="register">
            Remember your password?
          </Link>
        </div>

        <button className="flex min-w-[100px] items-center justify-center text-primary font-main-sans font-normal p-2 rounded-md bg-secondary">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;

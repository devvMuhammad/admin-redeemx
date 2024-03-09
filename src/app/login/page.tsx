import SigninForm from "@/components/LoginForm";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-full max-w-lg rounded-lg border-2 border-gray-800 p-8 ">
        <h1 className="text-2xl font-bold">Sign in as Admin</h1>
        {/* <p className="mt-2 mb-6">Choose your preferred sign in method</p> */}
        {/* <SocialLogins /> */}
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-600" />
          <div className="flex-grow border-t border-gray-600" />
        </div>
        <SigninForm />
        <div className="mt-6 flex justify-between text-sm">
          <Link href="#" className="text-gray-500 font-thin">
            Don&apos;t have an account?
            <span className=" font-bold hover:underline ml-2">Sign up</span>
          </Link>
          <Link className="font-bold hover:underline" href="#">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

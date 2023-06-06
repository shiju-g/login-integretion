export default function Home() {
  return (
    <>
      <div className="w-full xl:px-20 sm:px-10  h-full flex lg:flex-row flex-col min-h-screen items-center   justify-center   bg-[#f8f8f8]">
        <div className="bg-white h-full  sm:p-10 p-8 xl:max-w-md lg:max-w-sm max-w-lg lg:order-1 order-2 w-full  rounded-xl shadow-xl">
          <h2 className="text-3xl text-indigo-900 font-bold">Login</h2>
          <p className="text-gray-500 mt-2">
            Does't have account?{" "}
            <span className="font-bold text-purple-700">Sign Up</span>
          </p>
          <form action="">
            <div className="mt-5">
              <label className="block font-semibold" htmlFor="">
                Email Address
              </label>
              <input
                className="p-3 w-full rounded-lg border-2 border-gray-400"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="mt-5">
              <label className="block font-semibold" htmlFor="">
                Password
              </label>
              <input
                className="p-3 w-full rounded-lg border-2 border-gray-400"
                type="password"
                placeholder="Enter 6 character or more"
              />
            </div>
            <div className="text-sm font-medium text-gray-500 mt-5">
              <input className="p-2" type="checkbox" />
              <label className="ml-2" htmlFor="">
                Remember me
              </label>
            </div>
            <button
              className="mt-8 bg-indigo-500 text-lg hover:bg-indigo-700 font-medium py-3 w-full rounded-xl text-white"
              type="submit"
            >
              LOGIN
            </button>
            <div className="text-center text-gray-400 mt-5 relative">
              <div className="w-full h-0.5 bg-gray-400"></div>
              <p className=" absolute  left-1/3 -mt-4 bg-white m-0 py-0 px-3">
                or login with
              </p>
            </div>
            <div className="flex mt-8 gap-4">
              <button className="w-1/2 text-red-500 hover:bg-red-500 hover:text-white font-semibold text-sm border-2 border-red-500 rounded-lg py-2">
                Google
              </button>
              <button className="w-1/2 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold text-sm border-2 border-blue-500 rounded-lg py-2">
                Facebook
              </button>
            </div>
          </form>
        </div>
        <div className="w-11/12 mx-auto lg:order-2 order-1">
          <img className="" src="/icon.png" />
        </div>
      </div>
    </>
  );
}

function SignIn() {
  return (
    <div className="flex flex-col items-center border-t border-dashed border-[#e8e8e8] mx-20 justify-center">
      <div className="w-100 text-center  my-15">
        <div className="flex flex-col items-center justify-center">
          <span className="font-semibold text-xl">
            Sign in to search the world's largest creative network
          </span>
          <div className="flex flex-col gap-2 my-7">
            <button className="border border-[#e8e8e8] flex items-center gap-2 w-75 justify-center py-3 rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                class="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
              </svg>
              <p className="text-sm font-medium">Continue with Google</p>
            </button>
            <button className="border border-[#e8e8e8] flex items-center gap-2 w-75 justify-center py-3 rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                class="bi bi-facebook text-blue-600"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
              <p className="text-sm font-medium">Continue with Facebook</p>
            </button>
            <button className="border border-[#e8e8e8] flex items-center gap-2 w-75 justify-center py-3 rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                class="bi bi-apple"
                viewBox="0 0 16 16"
              >
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
              </svg>
              <p className="text-sm font-medium">Continue with Apple</p>
            </button>
          </div>
          <a className="text-sm text-blue-600 hover:underline hover:transition-all hover:duration-600 ">
            View more
          </a>
          <div className="flex justify-center my-5">
            <div className="bg-[#e8e8e8] h-0.25 w-75 relative"></div>
            <div className="absolute -mt-3.5 bg-white px-2 py-1 rounded-full flex items-center ">
              or
            </div>
          </div>
          <div className="flex flex-col items-start w-75 mt-2 gap-2 ">
            <span className="text-md font-semibold">Continue with email</span>
            <div className="flex flex-col items-start mt-1 gap-2">
              <span className="text-sm text-[#464646] font-light">
                Email address
              </span>
              <input
                className="w-75 rounded-lg border-2 ring-0 "
                type="email"
              />
              <button className="bg-black text-white px-4 py-1 rounded-full ">
                Continue{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

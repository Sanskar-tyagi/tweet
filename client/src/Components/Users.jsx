function Users() {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="flex justify-between p-6 items-center">
          <img
            className="h-11 w-11 rounded-full"
            src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
          />
          <div className="ml-1.5 text-sm leading-tight">
            <span className="text-black dark:text-white font-bold block ">
              Visualize Value
            </span>
            <span className="text-gray-500 dark:text-gray-400 hover:cursor-pointer hover:underline font-normal block">
              @visualizevalue
            </span>
          </div>{" "}
          <div className="flex ">
            <button
              type="button"
              className="px-6 text-center py-2 font-semibold transition-all delay-75 hover:bg-sky-700 hover:text-gray-200 rounded-full dark:bg-sky-500 dark:text-gray-100"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;

function UserProfile() {
  return (
    <div>
      <div className="rounded-3xl  overflow-hidden shadow-xl  w-20 my-3 bg-gray-800">
        <div className="w-full h-28 bg-sky-700  px-6"></div>
        <div className="flex justify-center -mt-8">
          <img
            src="https://i.imgur.com/8Km9tLL.jpg"
            className="rounded-full border-solid border-slate-300 border-8 -mt-3"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-white text-lg bold font-sans">User Name</h3>
          <p className="mt-2 font-normal text-gray-400">@testing</p>
        </div>
        <div className="flex justify-evenly  border-gray-500 border-y text-white">
          <div className="text-center p-4">
            <h2>34</h2>
            <span className="  font-normal text-gray-400">Following</span>
          </div>
          <div className="text-center p-4">
            <h2>42</h2>
            <span className="  font-normal text-gray-400">Followers</span>
          </div>
        </div>
        <div className="flex justify-evenly   text-sky-500">
          <div className="text-center p-4 hover:cursor-pointer hover:text-sky-400">
            Find new People
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

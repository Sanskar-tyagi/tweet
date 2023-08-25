function CTA() {
  return (
    <div>
      <div className="max-w-lg p-4 rounded-md shadow-md dark:bg-gray-800 dark:text-gray-100">
        <div className="space-y-4">
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-sky-400">
                Subscribe to Premium
              </h3>
            </a>
            <p className="leadi dark:text-gray-400">
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </p>
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
    </div>
  );
}

export default CTA;

import { Link } from "react-router-dom";

const Random = () => {
  return (
    <>
      <div className="w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">
        <p className="text-slate-500 underline">Connect With me:</p>
        <Link
          to={"https://www.linkedin.com/in/taqiuddin-syed/"}
          target="_blank"
          className="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300"
        >
          <svg
            className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 72 72"
            fill="none"
          >
            <path
              d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
              fill=""
            />
          </svg>
          <div
            className="absolute top-full left-0 w-full h-full rounded-full
            bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"
          ></div>
        </Link>

        <Link
          to={
            "mailto:thesyedtaqi@gmail.com?subject=SendMail&body=Description"
          }
          target="_blank"
          className="w-10 h-10 flex relative overflow-hidden items-center justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-500"
        >
          <svg
            className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 54 41"
            fill="none"
          >
            <path
              className=""
              d="M4.00654 40.1236H12.4893V19.5227L0.371094 10.4341V36.4881C0.371094 38.4997 2.00099 40.1236 4.00654 40.1236Z"
              fill=""
            />
            <path
              className=""
              d="M41.5732 40.1236H50.056C52.0676 40.1236 53.6914 38.4937 53.6914 36.4881V10.4341L41.5732 19.5227"
              fill=""
            />
            <path
              className=""
              d="M41.5732 3.7693V19.5229L53.6914 10.4343V5.58702C53.6914 1.09118 48.5594 -1.47181 44.9663 1.22448"
              fill=""
            />
            <path
              className=""
              d="M12.4893 19.5227V3.76904L27.0311 14.6754L41.5729 3.76904V19.5227L27.0311 30.429"
              fill=""
            />
            <path
              className=""
              d="M0.371094 5.58702V10.4343L12.4893 19.5229V3.7693L9.09617 1.22448C5.49708 -1.47181 0.371094 1.09118 0.371094 5.58702Z"
              fill=""
            />
          </svg>
          <div
            className="absolute top-full left-0 w-full h-full rounded-full
            bg-red-500 z-0 transition-all duration-500 group-hover:top-0"
          ></div>
        </Link>

        <Link
          to={"https://github.com/mr-taqi"}
          target="_blank"
          className="w-10 h-10 flex relative overflow-hidden items-center justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-500"
        >
          <svg
            aria-hidden="true"
            className="octicon octicon-mark-github fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white"
            height="24"
            version="1.1"
            viewBox="0 0 16 16"
            width="24"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
          <div
            className="absolute top-full left-0 w-full h-full rounded-full
            bg-purple-800 z-0 transition-all duration-500 group-hover:top-0"
          ></div>
        </Link>
      </div>
    </>
  );
};

export default Random;

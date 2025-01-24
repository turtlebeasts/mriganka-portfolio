import resume from "../assets/resume.pdf";

const ResumeDownload = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <a
        href={resume}
        download
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span className="font-semibold">Download My Resume</span>
      </a>
    </div>
  );
};

export default ResumeDownload;

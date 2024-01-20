type WorkExperienceProps = {
  index: number;
};

const WorkExperienceForm: React.FC<WorkExperienceProps> = ({ index }) => {
  return (
    <>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id={`job-title-${index}`}
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
        />
        <label
          htmlFor={`job-title-${index}`}
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
        >
          Job title
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id={`company-name-${index}`}
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
        />
        <label
          htmlFor={`company-name-${index}`}
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
        >
          Company name
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id={`company-location-${index}`}
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
        />
        <label
          htmlFor={`company-location-${index}`}
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
        >
          Company location
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id={`job-from-${index}`}
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
        />
        <label
          htmlFor={`job-from-${index}`}
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
        >
          From
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id={`job-to-${index}`}
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
        />
        <label
          htmlFor={`job-to-${index}`}
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
        >
          To
        </label>
      </div>
      <div className="flex flex-col-reverse items-center relative mt-4">
        <textarea
          id={`job-description-${index}`}
          rows={6}
          maxLength={355}
          className="block resize-none pt-1 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
        />
        <label
          htmlFor={`job-description-${index}`}
          className="w-[90%] text-left peer-focus:text-white"
        >
          Job description
        </label>
      </div>
      <button
        type="button"
        className="mt-3 mr-3 ml-[5%] px-3 py-1 hover:bg-lightGray transition-all duration-500 ease"
      >
        Delete
      </button>
    </>
  );
};

export default WorkExperienceForm;

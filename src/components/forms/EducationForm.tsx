const EducationForm: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id="degree"
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
        />
        <label
          htmlFor="degree"
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300"
        >
          Degree
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id="institution"
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
        />
        <label
          htmlFor="institution"
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300"
        >
          Institution name
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id="institution-location"
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
        />
        <label
          htmlFor="institution-location"
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300"
        >
          Insitution location
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id="education-from"
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
        />
        <label
          htmlFor="education-from"
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300"
        >
          From
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id="education-to"
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
        />
        <label
          htmlFor="education-to"
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300"
        >
          To
        </label>
      </div>
      <div className="flex flex-col-reverse items-center relative mt-4">
        <textarea
          id="education-description"
          rows={3}
          maxLength={175}
          className="block resize-none pt-1 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
        />
        <label
          htmlFor="education-description"
          className="w-[90%] text-left peer-focus:text-white"
        >
          Education description
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

export default EducationForm;

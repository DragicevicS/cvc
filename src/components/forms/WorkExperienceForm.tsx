import { WorkExperience } from "../templates/initialValuesAndTypes";

type WorkExperienceProps = {
  workExperienceValuesArray: WorkExperience;
  setWorkExperienceValuesArray: React.Dispatch<
    React.SetStateAction<WorkExperience>
  >;
};

const WorkExperienceForm: React.FC<WorkExperienceProps> = ({
  workExperienceValuesArray,
  setWorkExperienceValuesArray,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { id, value } = e.target;
    const propertyName = id.replace(/\d+/g, "");
    setWorkExperienceValuesArray((prevValues) =>
      prevValues.map((workExp) =>
        workExp.index === index
          ? { ...workExp, [propertyName]: value }
          : workExp
      )
    );
  };

  const handleDeleteWorkExperienceForm = (index: number) => {
    setWorkExperienceValuesArray((prevValues) =>
      prevValues.filter((workExp) => workExp.index !== index)
    );
  };

  return (
    <>
      {workExperienceValuesArray.map((workExp) => (
        <div
          key={workExp.index}
          className={`mb-1 pb-2 ${
            workExperienceValuesArray.length > 1 && "border-[1px] border-white"
          }`}
        >
          <div className="flex flex-col items-center relative mt-4">
            <input
              type="text"
              id={`jobTitle${workExp.index}`}
              className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
              placeholder=" "
              value={workExp.jobTitle}
              onChange={(e) => handleInputChange(e, workExp.index)}
            />
            <label
              htmlFor={`jobTitle${workExp.index}`}
              className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
            >
              Job title
            </label>
          </div>
          <div className="flex flex-col items-center relative mt-4">
            <input
              type="text"
              id={`companyName${workExp.index}`}
              className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
              placeholder=" "
              value={workExp.companyName}
              onChange={(e) => handleInputChange(e, workExp.index)}
            />
            <label
              htmlFor={`companyName${workExp.index}`}
              className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
            >
              Company name
            </label>
          </div>
          <div className="flex flex-col items-center relative mt-4">
            <input
              type="text"
              id={`companyLocation${workExp.index}`}
              className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
              placeholder=" "
              value={workExp.companyLocation}
              onChange={(e) => handleInputChange(e, workExp.index)}
            />
            <label
              htmlFor={`companyLocation${workExp.index}`}
              className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
            >
              Company location
            </label>
          </div>
          <div className="flex flex-col items-center relative mt-4">
            <input
              type="text"
              id={`jobFrom${workExp.index}`}
              className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
              placeholder=" "
              value={workExp.jobFrom}
              onChange={(e) => handleInputChange(e, workExp.index)}
            />
            <label
              htmlFor={`jobFrom${workExp.index}`}
              className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
            >
              From
            </label>
          </div>
          <div className="flex flex-col items-center relative mt-4">
            <input
              type="text"
              id={`jobTo${workExp.index}`}
              className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
              placeholder=" "
              value={workExp.jobTo}
              onChange={(e) => handleInputChange(e, workExp.index)}
            />
            <label
              htmlFor={`jobTo${workExp.index}`}
              className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
            >
              To
            </label>
          </div>
          <div className="flex flex-col-reverse items-center relative mt-4">
            <textarea
              id={`jobDescription${workExp.index}`}
              rows={6}
              maxLength={400}
              className="block resize-none pt-1 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
              placeholder=" "
              value={workExp.jobDescription}
              onChange={(e) => handleInputChange(e, workExp.index)}
            />
            <label
              htmlFor={`jobDescription${workExp.index}`}
              className="w-[90%] text-left peer-focus:text-white"
            >
              Job description
            </label>
          </div>
          <button
            type="button"
            className="mt-3.5 mr-3 ml-[5%] px-3 py-1 text-lg hover:bg-lightGray transition-all duration-500 ease"
            onClick={() => handleDeleteWorkExperienceForm(workExp.index)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default WorkExperienceForm;

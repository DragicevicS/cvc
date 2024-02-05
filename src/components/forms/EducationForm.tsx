import { Education } from "../templates/initialValuesAndTypes";

type EducationProps = {
  educationValuesArray: Education;
  setEducationValuesArray: React.Dispatch<React.SetStateAction<Education>>;
};

const EducationForm: React.FC<EducationProps> = ({
  educationValuesArray,
  setEducationValuesArray,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { id, value } = e.target;
    const propertyName = id.replace(/\d+/g, "");
    setEducationValuesArray((prevValues) =>
      prevValues.map((education) =>
        education.index === index
          ? { ...education, [propertyName]: value }
          : education
      )
    );
  };

  const handleDeleteEducationForm = (index: number) => {
    setEducationValuesArray((prevValues) =>
      prevValues.filter((education) => education.index !== index)
    );
  };

  return (
    <>
      {educationValuesArray.map((education) => (
        <div
          key={education.index}
          className={`mb-1 pb-2 ${
            educationValuesArray.length > 1 && "border-[1px] border-white"
          }`}
        >
          <div className="flex flex-col items-center relative mt-4">
            <input
              type="text"
              id={`degree${education.index}`}
              className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
              placeholder=" "
              value={education.degree}
              onChange={(e) => handleInputChange(e, education.index)}
            />
            <label
              htmlFor={`degree${education.index}`}
              className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
            >
              Degree
            </label>
          </div>
          <div className="flex flex-col items-center relative mt-4">
            <input
              type="text"
              id={`institutionName${education.index}`}
              className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
              placeholder=" "
              value={education.institutionName}
              onChange={(e) => handleInputChange(e, education.index)}
            />
            <label
              htmlFor={`institutionName${education.index}`}
              className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
            >
              Institution name
            </label>
          </div>
          <div className="flex flex-col items-center relative mt-4">
            <input
              type="text"
              id={`institutionLocation${education.index}`}
              className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
              placeholder=" "
              value={education.institutionLocation}
              onChange={(e) => handleInputChange(e, education.index)}
            />
            <label
              htmlFor={`institutionLocation${education.index}`}
              className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
            >
              Insitution location
            </label>
          </div>
          <div className="flex flex-col items-center relative mt-4">
            <input
              type="text"
              id={`educationFrom${education.index}`}
              className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
              placeholder=" "
              value={education.educationFrom}
              onChange={(e) => handleInputChange(e, education.index)}
            />
            <label
              htmlFor={`educationFrom${education.index}`}
              className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
            >
              From
            </label>
          </div>
          <div className="flex flex-col items-center relative mt-4">
            <input
              type="text"
              id={`educationTo${education.index}`}
              className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
              placeholder=" "
              value={education.educationTo}
              onChange={(e) => handleInputChange(e, education.index)}
            />
            <label
              htmlFor={`educationTo${education.index}`}
              className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
            >
              To
            </label>
          </div>
          <div className="flex flex-col-reverse items-center relative mt-4">
            <textarea
              id={`educationDescription${education.index}`}
              rows={3}
              maxLength={200}
              className="block resize-none pt-1 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
              placeholder=" "
              value={education.educationDescription}
              onChange={(e) => handleInputChange(e, education.index)}
            />
            <label
              htmlFor={`educationDescription${education.index}`}
              className="w-[90%] text-left peer-focus:text-white"
            >
              Education description
            </label>
          </div>
          <button
            type="button"
            className="mt-3.5 mr-3 ml-[5%] px-3 py-1 text-lg hover:bg-lightGray transition-all duration-500 ease"
            onClick={() => handleDeleteEducationForm(education.index)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default EducationForm;

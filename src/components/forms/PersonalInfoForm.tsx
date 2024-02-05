import { PersonalInfo } from "../templates/initialValuesAndTypes";

type PersonalInfoFormProps = {
  personalInfoValues: PersonalInfo;
  setPersonalInfoValues: React.Dispatch<React.SetStateAction<PersonalInfo>>;
};

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  personalInfoValues,
  setPersonalInfoValues,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setPersonalInfoValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPersonalInfoValues((prevValues) => ({
          ...prevValues,
          resumePhoto: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id="firstLastName"
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
          value={personalInfoValues.firstLastName}
          onChange={handleInputChange}
        />
        <label
          htmlFor="firstLastName"
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
        >
          First and last name
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id="occupationalTitle"
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
          value={personalInfoValues.occupationalTitle}
          onChange={handleInputChange}
        />
        <label
          htmlFor="occupationalTitle"
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
        >
          Occupational title
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id="currentLocation"
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
          value={personalInfoValues.currentLocation}
          onChange={handleInputChange}
        />
        <label
          htmlFor="currentLocation"
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
        >
          Current location or address
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="text"
          id="phoneNumber"
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
          value={personalInfoValues.phoneNumber}
          onChange={handleInputChange}
        />
        <label
          htmlFor="phoneNumber"
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
        >
          Phone number
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="email"
          id="email"
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
          value={personalInfoValues.email}
          onChange={handleInputChange}
        />
        <label
          htmlFor="email"
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
        >
          Email
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="url"
          id="linkedin"
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
          value={personalInfoValues.linkedin}
          onChange={handleInputChange}
        />
        <label
          htmlFor="linkedin"
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
        >
          LinkedIn link (optional)
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="url"
          id="github"
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
          value={personalInfoValues.github}
          onChange={handleInputChange}
        />
        <label
          htmlFor="github"
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
        >
          GitHub link (optional)
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <input
          type="url"
          id="personalWebsite"
          className="block pt-3.5 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
          value={personalInfoValues.personalWebsite}
          onChange={handleInputChange}
        />
        <label
          htmlFor="personalWebsite"
          className="absolute top-3 left-[5%] transform peer-placeholder-shown:translate-y-0 -translate-y-6 peer-focus:text-white peer-focus:-translate-y-6 peer-hover:-translate-y-6 ease-in-out duration-300 pointer-events-none"
        >
          Personal website link (optional)
        </label>
      </div>
      <div className="flex flex-col-reverse items-center relative mt-4">
        <textarea
          id="about"
          rows={6}
          maxLength={450}
          className="block resize-none pt-1 pb-1.5 w-[90%] hover:w-[91%] focus:w-[91%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white peer ease-in-out duration-300"
          placeholder=" "
          value={personalInfoValues.about}
          onChange={handleInputChange}
        />
        <label
          htmlFor="about"
          className="w-[90%] text-left peer-focus:text-white"
        >
          About
        </label>
      </div>
      <div className="flex flex-col items-center relative mt-4">
        <p className="w-[90%] text-left text-lightBlue cursor-default">
          Choose a resume photo:
        </p>
        <input
          type="file"
          id="resumePhoto"
          accept="image/png, image/jpeg"
          className="block pt-2.5 pb-1.5 w-[90%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white peer"
          placeholder=" "
          onChange={handleFileChange}
        />
      </div>
    </>
  );
};

export default PersonalInfoForm;

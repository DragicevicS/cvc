import {
  PersonalInfo,
  WorkExperience,
  Education,
  Skills,
} from "./initialValuesAndTypes";

type Template1Props = {
  personalInfoValues: PersonalInfo;
  workExperienceValuesArray: WorkExperience;
  educationValuesArray: Education;
  skillArray: Skills;
};

const Template1: React.FC<Template1Props> = ({
  personalInfoValues,
  workExperienceValuesArray,
  educationValuesArray,
  skillArray,
}) => {
  return (
    <div
      id="pdf-content"
      className={`flex w-[210mm] h-[296.85mm] bg-[#fff] text-xs leading-tight overflow-hidden`}
    >
      <div className="flex flex-col gap-3 w-[38%] h-full py-7 bg-lightGray text-white">
        {personalInfoValues.resumePhoto !== null ? (
          <div
            className={`min-w-[185px] min-h-[185px] mx-auto bg-cover bg-no-repeat border-[3px] rounded-full`}
            style={{
              backgroundImage: `url(${personalInfoValues.resumePhoto})`,
            }}
          ></div>
        ) : (
          <div
            className={`flex justify-center items-center min-w-[185px] min-h-[185px] mx-auto text-xl border-[3px] rounded-full`}
          >
            [ my photo ]
          </div>
        )}
        <div className="flex flex-col gap-3 pl-8">
          <hr className="w-full" />
          <div className="flex flex-col gap-1 w-full pr-3">
            <h2 className="text-lg">Contact</h2>
            <div>
              <p className="text-base">Phone</p>
              <p>
                {personalInfoValues.phoneNumber === ""
                  ? "+123 456 789"
                  : personalInfoValues.phoneNumber}
              </p>
            </div>
            <div>
              <p className="text-base">Email</p>
              <p>
                {personalInfoValues.email === ""
                  ? "my.email@mail.com"
                  : personalInfoValues.email}
              </p>
            </div>
            <div>
              <p className="text-base">Location</p>
              <p>
                {personalInfoValues.currentLocation === ""
                  ? "City, Country"
                  : personalInfoValues.currentLocation}
              </p>
            </div>
            {personalInfoValues.linkedin !== "" && (
              <div>
                <p className="text-base">LinkedIn</p>
                <p>{personalInfoValues.linkedin}</p>
              </div>
            )}
            {personalInfoValues.github !== "" && (
              <div>
                <p className="text-base">GitHub</p>
                <p>{personalInfoValues.github}</p>
              </div>
            )}
            {personalInfoValues.personalWebsite !== "" && (
              <div>
                <p className="text-base">Personal website</p>
                <p>{personalInfoValues.personalWebsite}</p>
              </div>
            )}
          </div>
          <hr className="w-full mt-1" />
          <div className="flex flex-col gap-1 w-full pr-3">
            <h2 className="text-lg">Education</h2>
            {educationValuesArray.map((education) => (
              <div key={education.index}>
                <p className="text-base">
                  {education.degree === ""
                    ? `Degree ${education.index + 1}`
                    : education.degree}
                </p>
                <p className="text-base">
                  {education.institutionName === ""
                    ? `Institution ${education.index + 1}`
                    : education.institutionName}
                </p>
                <p>
                  {education.institutionLocation === ""
                    ? `City ${education.index + 1}, Country`
                    : education.institutionLocation}
                </p>
                <p className="font-bold">
                  {education.educationFrom} - {education.educationTo}
                </p>
                <p className="text-justify">
                  {education.educationDescription === ""
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum."
                    : education.educationDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[62%] h-full pr-8 py-7">
        <div className="ml-6">
          <h1 className="text-3xl">
            {personalInfoValues.firstLastName === ""
              ? "John Doe"
              : personalInfoValues.firstLastName}
          </h1>
          <h2 className="text-xl font-semibold opacity-80">
            {personalInfoValues.occupationalTitle === ""
              ? "Occupational Title"
              : personalInfoValues.occupationalTitle}
          </h2>
          <p className="mt-2 text-sm text-justify">
            {personalInfoValues.about === ""
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              : personalInfoValues.about}
          </p>
        </div>
        <hr className="w-full mt-3" />
        <div className="ml-6">
          <h2 className="text-lg mb-1">Work Experience</h2>
          {workExperienceValuesArray.map((workExp) => (
            <div key={workExp.index}>
              <div className="flex items-center gap-1">
                <div className="w-full">
                  <p className="text-base">
                    {workExp.jobTitle === ""
                      ? `Job Position ${workExp.index + 1}`
                      : workExp.jobTitle}
                  </p>
                  <p className="text-base">
                    {workExp.companyName === ""
                      ? `Company Name ${workExp.index + 1}`
                      : workExp.companyName}
                  </p>
                  <p>
                    {workExp.companyLocation === ""
                      ? `City ${workExp.index + 1}, Country`
                      : workExp.companyLocation}
                  </p>
                </div>
                <p className="w-44 text-right font-bold">
                  {workExp.jobFrom} - {workExp.jobTo}
                </p>
              </div>
              <p className="mt-1 text-justify">
                {workExp.jobDescription === ""
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc."
                  : workExp.jobDescription}
              </p>
            </div>
          ))}
        </div>
        <hr className="w-full mt-3" />
        <div className="ml-6">
          <h2 className="text-lg mb-1">Skills</h2>
          <ul className="grid grid-cols-2 justify-center text-base">
            {skillArray.map((skill, index) => {
              return (
                <li key={index} className="ml-8 list-disc col-span-1">
                  {skill.skill === "" ? `Skill ${index + 1}` : skill.skill}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template1;

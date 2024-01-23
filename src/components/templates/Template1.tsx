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
      className={`flex w-[98vw] sm:w-[calc(95vh/1.414)] h-[calc(98vw*1.414)] sm:h-[95vh] bg-[#fff] text-[calc(98vw/46)] sm:text-[calc(95vh/75)] leading-tight overflow-hidden`}
    >
      <div className="flex flex-col gap-1 w-[38%] h-full py-[calc(95vw/80)] sm:py-[calc(95vh/90)] bg-lightGray text-white">
        {personalInfoValues.resumePhoto !== null ? (
          <div
            className={`min-w-[calc(98vw/3.8)] sm:min-w-[calc(95vh/5.35)] min-h-[calc(98vw/3.8)] sm:min-h-[calc(95vh/5.35)] mx-auto mb-1 bg-cover bg-no-repeat border-2 sm:border-3 rounded-full`}
            style={{
              backgroundImage: `url(${personalInfoValues.resumePhoto})`,
            }}
          ></div>
        ) : (
          <div
            className={`flex justify-center items-center min-w-[calc(98vw/3.8)] sm:min-w-[calc(95vh/5.35)] min-h-[calc(98vw/3.8)] sm:min-h-[calc(95vh/5.35)] mx-auto mb-1 text-[calc(98vw/33.5)] sm:text-[calc(95vh/43)] border-2 sm:border-3 rounded-full`}
          >
            [ my photo ]
          </div>
        )}
        <div className="flex flex-col gap-1 pl-[calc(98vw/25)] sm:pl-[calc(95vh/30)]">
          <hr className="w-full" />
          <div className="flex flex-col gap-1 w-full pr-[calc(98vw/45)] sm:pr-[calc(95vh/60)]">
            <h2 className="text-[calc(98vw/33.5)] sm:text-[calc(95vh/43)]">
              Contact
            </h2>
            <div>
              <p className="text-[calc(98vw/39.5)] sm:text-[calc(95vh/58)]">
                Phone
              </p>
              <p>
                {personalInfoValues.phoneNumber === ""
                  ? "+123 456 789"
                  : personalInfoValues.phoneNumber}
              </p>
            </div>
            <div>
              <p className="text-[calc(98vw/39.5)] sm:text-[calc(95vh/58)]">
                Email
              </p>
              <p>
                {personalInfoValues.email === ""
                  ? "my.email@mail.com"
                  : personalInfoValues.email}
              </p>
            </div>
            <div>
              <p className="text-[calc(98vw/39.5)] sm:text-[calc(95vh/58)]">
                Location
              </p>
              <p>
                {personalInfoValues.currentLocation === ""
                  ? "City, Country"
                  : personalInfoValues.currentLocation}
              </p>
            </div>
            {personalInfoValues.linkedin !== "" && (
              <div>
                <p className="text-[calc(98vw/39.5)] sm:text-[calc(95vh/58)]">
                  LinkedIn
                </p>
                <p>{personalInfoValues.linkedin}</p>
              </div>
            )}
            {personalInfoValues.github !== "" && (
              <div>
                <p className="text-[calc(98vw/39.5)] sm:text-[calc(95vh/58)]">
                  GitHub
                </p>
                <p>{personalInfoValues.github}</p>
              </div>
            )}
            {personalInfoValues.personalWebsite !== "" && (
              <div>
                <p className="text-[calc(98vw/39.5)] sm:text-[calc(95vh/58)]">
                  Personal website
                </p>
                <p>{personalInfoValues.personalWebsite}</p>
              </div>
            )}
          </div>
          <hr className="w-full" />
          <div className="flex flex-col gap-1 w-full pr-[calc(98vw/45)] sm:pr-[calc(95vh/60)]">
            <h2 className="text-[calc(98vw/33.5)] sm:text-[calc(95vh/43)]">
              Education
            </h2>
            {educationValuesArray.map((education) => (
              <div key={education.index}>
                <p className="text-[calc(98vw/39.5)] sm:text-[calc(95vh/58)]">
                  {education.degree === ""
                    ? `Degree ${education.index + 1}`
                    : education.degree}
                </p>
                <p>
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
                <p className="text-justify text-[calc(98vw/50)] sm:text-[calc(95vh/75)]">
                  {education.educationDescription === ""
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum."
                    : education.educationDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[2px] sm:gap-2 w-[62%] h-full pr-[calc(98vw/25)] sm:pr-[calc(95vh/30)] py-[calc(95vw/80)] sm:py-[calc(95vh/90)]">
        <div className="ml-[calc(98vw/25)] sm:ml-[calc(95vh/30)]">
          <h1 className="text-[calc(98vw/22)] sm:text-[calc(95vh/29)]">
            {personalInfoValues.firstLastName === ""
              ? "John Doe"
              : personalInfoValues.firstLastName}
          </h1>
          <h2 className="text-[calc(98vw/28)] sm:text-[calc(95vh/40)] font-semibold opacity-80">
            {personalInfoValues.occupationalTitle === ""
              ? "Occupational Title"
              : personalInfoValues.occupationalTitle}
          </h2>
          <p className="mt-1 sm:mt-2 text-justify text-[calc(98vw/50)] sm:text-[calc(95vh/75)]">
            {personalInfoValues.about === ""
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              : personalInfoValues.about}
          </p>
        </div>
        <hr className="w-full" />
        <div className="ml-[calc(98vw/25)] sm:ml-[calc(95vh/30)]">
          <h2 className="text-[calc(98vw/33)] sm:text-[calc(95vh/50)] mb-1">
            Work Experience
          </h2>
          {workExperienceValuesArray.map((workExp) => (
            <div key={workExp.index}>
              <div className="flex items-center">
                <div className="w-full">
                  <p className="text-[calc(98vw/39.5)] sm:text-[calc(95vh/58)]">
                    {workExp.jobTitle === ""
                      ? `Job Position ${workExp.index + 1}`
                      : workExp.jobTitle}
                  </p>
                  <p>
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
              <p className="mt-1 text-justify text-[calc(98vw/50)] sm:text-[calc(95vh/75)]">
                {workExp.jobDescription === ""
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc."
                  : workExp.jobDescription}
              </p>
            </div>
          ))}
        </div>
        <hr className="w-full" />
        <div className="ml-[calc(98vw/25)] sm:ml-[calc(95vh/30)]">
          <h2 className="text-[calc(98vw/33)] sm:text-[calc(95vh/50)] mb-1">
            Skills
          </h2>
          <ul className="grid grid-cols-2 text-[calc(98vw/50)] sm:text-[calc(95vh/70)]">
            {skillArray.map((skill, index) => {
              return (
                <li
                  key={index}
                  className="ml-[calc(98vw/25)] sm:ml-[calc(95vh/30)] list-disc col-span-1"
                >
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

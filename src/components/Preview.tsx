import Template1 from "./templates/Template1";
import {
  PersonalInfo,
  WorkExperience,
  Education,
  Skills,
} from "./templates/initialValuesAndTypes";

type PreviewProps = {
  personalInfoValues: PersonalInfo;
  workExperienceValuesArray: WorkExperience;
  educationValuesArray: Education;
  sidebarShow: boolean;
  skillArray: Skills;
};

const Preview: React.FC<PreviewProps> = ({
  personalInfoValues,
  workExperienceValuesArray,
  educationValuesArray,
  sidebarShow,
  skillArray,
}) => {
  return (
    <div
      className={`absolute flex justify-center items-center min-w-[65%] h-full bg-lightBlue ${
        !sidebarShow && "w-screen"
      } duration-100 ease-out cursor-default pointer-events-none`}
    >
      <Template1
        personalInfoValues={personalInfoValues}
        workExperienceValuesArray={workExperienceValuesArray}
        educationValuesArray={educationValuesArray}
        skillArray={skillArray}
      />
    </div>
  );
};

export default Preview;

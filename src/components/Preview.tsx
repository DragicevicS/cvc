import Template1 from "./templates/Template1";
import { PersonalInfo, Skills } from "./templates/initialValuesAndTypes";

type PreviewProps = {
  personalInfoValues: PersonalInfo;
  sidebarShow: boolean;
  skillArray: Skills;
};

const Preview: React.FC<PreviewProps> = ({
  personalInfoValues,
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
        skillArray={skillArray}
      />
    </div>
  );
};

export default Preview;

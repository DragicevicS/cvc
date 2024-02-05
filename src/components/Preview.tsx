import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Template1 from "./templates/Template1";
import {
  PersonalInfo,
  WorkExperience,
  Education,
  Skills,
} from "./templates/initialValuesAndTypes";
import zoomInSVG from "../assets/zoom-in.svg";
import zoomOutSVG from "../assets/zoom-out.svg";
import crossSVG from "../assets/cross.svg";

type PreviewProps = {
  isSmallScreen: boolean;
  sidebarShow: boolean;
  personalInfoValues: PersonalInfo;
  workExperienceValuesArray: WorkExperience;
  educationValuesArray: Education;
  skillArray: Skills;
};

const Preview: React.FC<PreviewProps> = ({
  isSmallScreen,
  sidebarShow,
  personalInfoValues,
  workExperienceValuesArray,
  educationValuesArray,
  skillArray,
}) => {
  return (
    <TransformWrapper
      centerOnInit={true}
      initialScale={isSmallScreen ? 0.3 : 0.6}
      minScale={isSmallScreen ? 0.3 : 0.5}
      maxScale={isSmallScreen ? 1 : 1.5}
      wheel={{ step: 0.4 }}
    >
      {({ zoomIn, zoomOut, resetTransform }) => (
        <>
          <div className="hidden fixed top-1/2 -translate-y-1/2 right-0 lg:flex flex-col justify-center gap-4 pr-2.5 pl-1.5 py-2.5 z-10 bg-darkBlue rounded-tl-md rounded-bl-md">
            <button onClick={() => zoomIn()}>
              <img
                src={zoomInSVG}
                alt="Zoom In"
                title="Zoom In"
                className="w-5 h-5 transition-all hover:-translate-y-[5%] hover:scale-105"
              />
            </button>
            <button onClick={() => zoomOut()}>
              <img
                src={zoomOutSVG}
                alt="Zoom Out"
                title="Zoom Out"
                className="w-5 h-5 transition-all hover:-translate-y-[5%] hover:scale-105"
              />
            </button>
            <button onClick={() => resetTransform()}>
              <img
                src={crossSVG}
                alt="Reset"
                title="Reset"
                className="w-5 h-5 transition-all hover:-translate-y-[5%] hover:scale-105"
              />
            </button>
          </div>
          <div
            className={`flex justify-center items-center bg-lightBlue ${
              sidebarShow && "lg:translate-x-[10%]"
            } duration-100 ease-out cursor-grab active:cursor-grabbing`}
          >
            <TransformComponent
              wrapperStyle={{
                width: "100vw",
                height: "100vh",
                padding: "12px 0",
              }}
            >
              <Template1
                personalInfoValues={personalInfoValues}
                workExperienceValuesArray={workExperienceValuesArray}
                educationValuesArray={educationValuesArray}
                skillArray={skillArray}
              />
            </TransformComponent>
          </div>
        </>
      )}
    </TransformWrapper>
  );
};

export default Preview;

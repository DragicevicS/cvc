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
    <TransformWrapper
      wheel={{ step: 0.4 }}
      centerOnInit={true}
      initialScale={0.6}
      minScale={0.6}
      maxScale={2}
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
          <TransformComponent>
            <div
              className={`flex justify-center items-center w-screen h-full bg-lightBlue ${
                sidebarShow && "lg:translate-x-[10%]"
              } duration-100 ease-out cursor-grab active:cursor-grabbing`}
            >
              <Template1
                personalInfoValues={personalInfoValues}
                workExperienceValuesArray={workExperienceValuesArray}
                educationValuesArray={educationValuesArray}
                skillArray={skillArray}
              />
            </div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default Preview;

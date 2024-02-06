import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import screenfull from "screenfull";
import Toolbar from "./Toolbar";
import Template1 from "./templates/Template1";
import {
  PersonalInfo,
  WorkExperience,
  Education,
  Skills,
} from "./templates/initialValuesAndTypes";

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
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    const templateContainer = document.getElementById("template-container");
    if (screenfull.isEnabled && templateContainer) {
      screenfull.toggle(templateContainer);
      setIsFullScreen(!isFullScreen);
    }
  };

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
          <Toolbar
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            resetTransform={resetTransform}
            isFullScreen={isFullScreen}
            toggleFullScreen={toggleFullScreen}
          />
          <div
            id="template-container"
            className={`relative flex justify-center items-center bg-lightBlue ${
              sidebarShow && "lg:translate-x-[10%]"
            } duration-100 ease-out cursor-grab active:cursor-grabbing`}
          >
            {isFullScreen && (
              <Toolbar
                zoomIn={zoomIn}
                zoomOut={zoomOut}
                resetTransform={resetTransform}
                isFullScreen={isFullScreen}
                toggleFullScreen={toggleFullScreen}
              />
            )}
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

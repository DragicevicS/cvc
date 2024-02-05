import { useState, useEffect } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import {
  PersonalInfo,
  initialPersonalInfo,
  WorkExperience,
  initialWorkExperienceValues,
  Education,
  initialEducationValues,
  Skills,
} from "./templates/initialValuesAndTypes";

type CreatorProps = {
  goToPrevSlide: () => void;
};

const Creator: React.FC<CreatorProps> = ({ goToPrevSlide }) => {
  const [sidebarShow, setSidebarShow] = useState(true);

  const toggleSidebar = () => {
    setSidebarShow((prev) => !prev);
  };

  useEffect(() => {
    let touchStartY: number | null = null;
    let touchEndY: number | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.target && (e.target as HTMLElement).closest(".MuiAccordion-root"))
        return;
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.target && (e.target as HTMLElement).closest(".MuiAccordion-root"))
        return;
      touchEndY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = () => {
      if (touchStartY === null || touchEndY === null) return;

      if (touchEndY - touchStartY > 80 && sidebarShow) toggleSidebar();
      else if (touchStartY - touchEndY > 80 && !sidebarShow) toggleSidebar();

      touchStartY = null;
      touchEndY = null;
    };

    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);
    document.addEventListener("touchend", handleTouchEnd, false);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart, false);
      document.removeEventListener("touchmove", handleTouchMove, false);
      document.removeEventListener("touchend", handleTouchEnd, false);
    };
  }, [sidebarShow]);

  const [personalInfoValues, setPersonalInfoValues] =
    useState<PersonalInfo>(initialPersonalInfo);

  const [workExperienceValuesArray, setWorkExperienceValuesArray] =
    useState<WorkExperience>(initialWorkExperienceValues);

  const [educationValuesArray, setEducationValuesArray] = useState<Education>(
    initialEducationValues
  );

  const [skillArray, setSkillArray] = useState<Skills>([{ id: 0, skill: "" }]);

  return (
    <main className="flex flex-col lg:flex-row-reverse justify-center items-center py-10 w-full h-full">
      <Preview
        sidebarShow={sidebarShow}
        personalInfoValues={personalInfoValues}
        workExperienceValuesArray={workExperienceValuesArray}
        educationValuesArray={educationValuesArray}
        skillArray={skillArray}
      />
      <Editor
        goToPrevSlide={goToPrevSlide}
        sidebarShow={sidebarShow}
        toggleSidebar={toggleSidebar}
        personalInfoValues={personalInfoValues}
        setPersonalInfoValues={setPersonalInfoValues}
        workExperienceValuesArray={workExperienceValuesArray}
        setWorkExperienceValuesArray={setWorkExperienceValuesArray}
        educationValuesArray={educationValuesArray}
        setEducationValuesArray={setEducationValuesArray}
        skillArray={skillArray}
        setSkillArray={setSkillArray}
      />
    </main>
  );
};

export default Creator;

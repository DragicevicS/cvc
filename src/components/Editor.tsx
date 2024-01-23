import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import chevronImg from "../assets/chevron.svg";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillList from "./forms/SkillList";
import {
  PersonalInfo,
  WorkExperience,
  Education,
  Skills,
} from "./templates/initialValuesAndTypes";

type EditorProps = {
  goToPrevSlide: () => void;
  sidebarShow: boolean;
  toggleSidebar: () => void;
  personalInfoValues: PersonalInfo;
  setPersonalInfoValues: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  workExperienceValuesArray: WorkExperience;
  setWorkExperienceValuesArray: React.Dispatch<
    React.SetStateAction<WorkExperience>
  >;
  educationValuesArray: Education;
  setEducationValuesArray: React.Dispatch<React.SetStateAction<Education>>;
  skillArray: Skills;
  setSkillArray: React.Dispatch<React.SetStateAction<Skills>>;
};

const Editor: React.FC<EditorProps> = ({
  goToPrevSlide,
  sidebarShow,
  toggleSidebar,
  personalInfoValues,
  setPersonalInfoValues,
  workExperienceValuesArray,
  setWorkExperienceValuesArray,
  educationValuesArray,
  setEducationValuesArray,
  skillArray,
  setSkillArray,
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const forms = ["Personal Info", "Work Experience", "Education", "Skills"];

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAddWorkExperienceForm = () => {
    setWorkExperienceValuesArray((prevValues) => [
      ...prevValues,
      {
        index: prevValues.length,
        jobTitle: "",
        companyName: "",
        companyLocation: "",
        jobFrom: "",
        jobTo: "",
        jobDescription: "",
      },
    ]);
  };

  const handleAddEducationForm = () => {
    setEducationValuesArray((prevValues) => [
      ...prevValues,
      {
        index: prevValues.length,
        degree: "",
        institutionName: "",
        institutionLocation: "",
        educationFrom: "",
        educationTo: "",
        educationDescription: "",
      },
    ]);
  };

  return (
    <div
      className={`fixed bottom-0 lg:left-0 flex flex-col items-center w-screen sm:w-[83vw] md:w-[80vw] lg:w-1/3 h-[96%] lg:h-full bg-darkGray text-white ${
        !sidebarShow && isSmallScreen
          ? "translate-y-full"
          : !sidebarShow && !isSmallScreen && "-translate-x-full"
      } transition duration-200 ease-out`}
    >
      <div className="flex justify-between items-center w-full p-2 bg-black">
        <h1
          className="text-3xl font-serif cursor-pointer"
          title="CV Creator"
          onClick={goToPrevSlide}
        >
          CVC
        </h1>
        <div>
          <button
            type="button"
            onClick={goToPrevSlide}
            className="px-3 py-1 hover:bg-darkGray transition-all duration-500 ease"
          >
            Change template
          </button>
          {isSmallScreen && (
            <button
              type="button"
              onClick={toggleSidebar}
              className="px-3 py-1 hover:bg-darkGray transition-all duration-500 ease"
            >
              Preview
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 w-[96%] overflow-y-auto scrollbar-gutter">
        <h2 className="text-xl mt-1">Editor</h2>
        {forms.map((form, index) => {
          return (
            <Accordion
              disableGutters
              key={index}
              className="w-full"
              id={`accordion-${index}`}
              expanded={expanded === `panel-${index}`}
              onChange={handleAccordionChange(`panel-${index}`)}
            >
              <AccordionSummary>
                <Typography>{form}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <form className="flex flex-col text-lightBlue text-sm">
                  {index === 0 ? (
                    <PersonalInfoForm
                      personalInfoValues={personalInfoValues}
                      setPersonalInfoValues={setPersonalInfoValues}
                    />
                  ) : index === 1 ? (
                    <>
                      <WorkExperienceForm
                        workExperienceValuesArray={workExperienceValuesArray}
                        setWorkExperienceValuesArray={
                          setWorkExperienceValuesArray
                        }
                      />
                      {workExperienceValuesArray.length < 3 && (
                        <button
                          type="button"
                          className="mt-2 ml-auto mr-3 px-3 py-1 text-lg hover:bg-lightGray transition-all duration-500 ease"
                          onClick={handleAddWorkExperienceForm}
                        >
                          Add
                        </button>
                      )}
                    </>
                  ) : index === 2 ? (
                    <>
                      <EducationForm
                        educationValuesArray={educationValuesArray}
                        setEducationValuesArray={setEducationValuesArray}
                      />
                      {educationValuesArray.length < 2 && (
                        <button
                          type="button"
                          className="mt-2 ml-auto mr-3 px-3 py-1 text-lg hover:bg-lightGray transition-all duration-500 ease"
                          onClick={handleAddEducationForm}
                        >
                          Add
                        </button>
                      )}
                    </>
                  ) : index === 3 ? (
                    <SkillList
                      skillArray={skillArray}
                      setSkillArray={setSkillArray}
                    />
                  ) : (
                    ""
                  )}
                </form>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      {isSmallScreen ? (
        <div
          className="absolute -top-6 flex flex-col justify-center items-center gap-[1px] h-6 w-full bg-darkGray rounded-br-md rounded-bl-md cursor-pointer rotate-180"
          onClick={toggleSidebar}
        >
          <div className="w-[5%] h-[3px] bg-lightBlue rounded-md"></div>
          <div className="w-[5%] h-[3px] bg-lightBlue rounded-md"></div>
        </div>
      ) : (
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-7 flex items-center h-[8%] bg-darkGray rounded-tr-lg rounded-br-lg cursor-pointer"
          onClick={toggleSidebar}
        >
          <img
            src={chevronImg}
            alt="Toggle arrow"
            className={`w-8 h-8 ${sidebarShow ? "rotate-90" : "-rotate-90"}`}
          />
        </div>
      )}
    </div>
  );
};

export default Editor;

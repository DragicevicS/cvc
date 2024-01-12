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

type EditorProps = {
  goToPrevSlide: () => void;
  sidebarShow: boolean;
  setSidebarShow: (arg0: boolean) => void;
};

const Editor: React.FC<EditorProps> = ({
  goToPrevSlide,
  sidebarShow,
  setSidebarShow,
}) => {
  const toggleSidebar = () => {
    if (!sidebarShow) {
      setSidebarShow(true);
      return;
    }
    setSidebarShow(false);
  };

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
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

  return (
    <div
      className={`fixed bottom-0 lg:left-0 flex flex-col items-center w-screen sm:w-[85vw] md:w-[80vw] lg:w-1/3 h-[96.5vh] lg:h-full bg-darkGray text-white ${
        !sidebarShow && isSmallScreen
          ? "translate-y-full"
          : !sidebarShow && !isSmallScreen && "-translate-x-full"
      } transition duration-200 ease-out`}
    >
      <div
        className={`flex justify-between w-full p-2 bg-black ${
          !sidebarShow && "hidden"
        }`}
      >
        <h1
          className="text-3xl font-serif cursor-pointer"
          title="CV Creator"
          onClick={goToPrevSlide}
        >
          CVC
        </h1>
        <button
          type="button"
          onClick={goToPrevSlide}
          className="px-3 py-1 hover:bg-darkGray transition-all duration-500 ease"
        >
          Change template
        </button>
      </div>
      <div className="flex flex-col items-center gap-3 w-[96%] overflow-y-auto">
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
                <form className="text-lightBlue text-sm">
                  {index === 0 ? (
                    <PersonalInfoForm />
                  ) : index === 1 ? (
                    <>
                      <WorkExperienceForm index={1} />
                      <button
                        type="button"
                        className="mt-3 px-3 py-1 hover:bg-lightGray transition-all duration-500 ease"
                      >
                        Add
                      </button>
                    </>
                  ) : index === 2 ? (
                    <>
                      <EducationForm />
                      <button
                        type="button"
                        className="mt-3 px-3 py-1 hover:bg-lightGray transition-all duration-500 ease"
                      >
                        Add
                      </button>
                    </>
                  ) : index === 3 ? (
                    <SkillList />
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
          className="absolute -top-5 flex flex-col justify-center items-center gap-[1px] h-5 w-full bg-darkGray cursor-pointer rotate-180"
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

import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import deleteIcon from "../../assets/delete.svg";
import deleteHoverIcon from "../../assets/delete-hover.svg";

let nextId = 1;

const SkillList: React.FC = () => {
  const [skills, setSkills] = useState<{ id: number; skill: string }[]>([
    { id: 0, skill: "" },
  ]);

  const handleListAdd = () => {
    setSkills((currentSkills) => [
      ...currentSkills,
      { id: nextId++, skill: "" },
    ]);
  };

  const handleListDelete = (index: number) => {
    setSkills((currentSkills) => currentSkills.filter((_, i) => i !== index));
  };

  const handleListInput = (index: number, value: string) => {
    setSkills((currentSkills) =>
      currentSkills.map((skill, i) =>
        i === index ? { ...skill, skill: value } : skill
      )
    );
  };

  return (
    <List>
      {skills.map((skill, index) => (
        <ListItem key={index}>
          <div className="w-2/3">
            <input
              type="text"
              id={`skill-${skill.id}`}
              className="relative pt-1 pb-1.5 w-[80%] hover:w-[81%] focus:w-[81%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white ease-in-out duration-300"
              value={skill.skill}
              onChange={(e) => handleListInput(index, e.target.value)}
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-[60%] group">
              <img
                src={deleteIcon}
                alt="Delete"
                className="w-6 h-6 cursor-pointer group-hover:hidden"
              />
              <img
                src={deleteHoverIcon}
                alt="Delete"
                className="w-6 h-6 cursor-pointer hidden group-hover:block group-hover:scale-110 group-hover:-translate-y-[8%]"
                onClick={() => handleListDelete(index)}
              />
            </div>
          </div>
        </ListItem>
      ))}
      {skills.length !== 10 && (
        <ListItem>
          <button
            type="button"
            className="text-base hover:bg-darkGray transition-all duration-500 ease"
            onClick={handleListAdd}
          >
            + Add skill
          </button>
        </ListItem>
      )}
    </List>
  );
};

export default SkillList;

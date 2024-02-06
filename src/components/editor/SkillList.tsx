import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Skills } from "../preview/templates/initialValuesAndTypes";
import deleteIcon from "../../assets/delete.svg";
import deleteHoverIcon from "../../assets/delete-hover.svg";

type SkillListProps = {
  skillArray: Skills;
  setSkillArray: React.Dispatch<React.SetStateAction<Skills>>;
};

let nextId = 1;

const SkillList: React.FC<SkillListProps> = ({ skillArray, setSkillArray }) => {
  const handleListAdd = () => {
    setSkillArray((currentSkills) => [
      ...currentSkills,
      { id: nextId++, skill: "" },
    ]);
  };

  const handleListDelete = (index: number) => {
    setSkillArray((currentSkills) =>
      currentSkills.filter((_, i) => i !== index)
    );
  };

  const handleListInput = (index: number, value: string) => {
    setSkillArray((currentSkills) =>
      currentSkills.map((skill, i) =>
        i === index ? { ...skill, skill: value } : skill
      )
    );
  };

  return (
    <List>
      {skillArray.map((skill, index) => (
        <ListItem key={index}>
          <div className="w-2/3">
            <input
              type="text"
              id={`skill-${skill.id}`}
              className="relative pt-1 pb-1.5 w-[83%] hover:w-[84%] focus:w-[84%] text-white bg-darkGray border-0 border-b-2 border-lightBlue appearance-none outline-none focus:ring-0 focus:border-white hover:border-white ease-in-out duration-300"
              value={skill.skill}
              onChange={(e) => handleListInput(index, e.target.value)}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 left-[65%] group"
              onClick={() => handleListDelete(index)}
            >
              <img
                src={deleteIcon}
                alt="Delete"
                className="w-6 h-6 cursor-pointer lg:group-hover:hidden"
              />
              <img
                src={deleteHoverIcon}
                alt="Delete"
                className="w-6 h-6 cursor-pointer hidden lg:group-hover:block lg:group-hover:scale-110 lg:group-hover:-translate-y-[8%]"
              />
            </div>
          </div>
        </ListItem>
      ))}
      {skillArray.length !== 12 && (
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

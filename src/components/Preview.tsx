import Template1 from "./templates/Template1";

type PreviewProps = {
  sidebarShow: boolean;
  skillArray: { id: number; skill: string }[];
};

const Preview: React.FC<PreviewProps> = ({ sidebarShow, skillArray }) => {
  return (
    <div
      className={`absolute flex justify-center items-center min-w-[65%] h-full bg-lightBlue ${
        !sidebarShow && "w-screen"
      } duration-100 ease-out cursor-default pointer-events-none`}
    >
      <Template1 skillArray={skillArray} />
    </div>
  );
};

export default Preview;

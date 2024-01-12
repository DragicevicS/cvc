import Template1 from "./templates/Template1";

type PreviewProps = {
  sidebarShow: boolean;
};

const Preview: React.FC<PreviewProps> = ({ sidebarShow }) => {
  return (
    <div
      className={`absolute flex justify-center items-center min-w-[65%] h-full bg-lightBlue ${
        !sidebarShow && "w-screen"
      } duration-100 ease-out`}
    >
      <Template1 />
    </div>
  );
};

export default Preview;

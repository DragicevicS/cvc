import { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

type CreatorProps = {
  goToPrevSlide: () => void;
};

const Creator: React.FC<CreatorProps> = ({ goToPrevSlide }) => {
  const [sidebarShow, setSidebarShow] = useState(true);

  return (
    <main className="flex flex-col lg:flex-row-reverse items-center w-full h-full">
      <Preview sidebarShow={sidebarShow} />
      <Editor
        goToPrevSlide={goToPrevSlide}
        sidebarShow={sidebarShow}
        setSidebarShow={setSidebarShow}
      />
    </main>
  );
};

export default Creator;

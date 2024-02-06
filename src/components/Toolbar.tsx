import zoomInSVG from "../assets/zoom-in.svg";
import zoomOutSVG from "../assets/zoom-out.svg";
import crossSVG from "../assets/cross.svg";
import fullscreenSVG from "../assets/fullscreen.svg";
import fullscreenExitSVG from "../assets/fullscreen-exit.svg";

type ToolbarProps = {
  zoomIn: () => void;
  zoomOut: () => void;
  resetTransform: () => void;
  isFullScreen: boolean;
  toggleFullScreen: () => void;
};

const Toolbar: React.FC<ToolbarProps> = ({
  zoomIn,
  zoomOut,
  resetTransform,
  isFullScreen,
  toggleFullScreen,
}) => {
  return (
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
      <hr className="w-full mx-auto border-[1px] border-white rounded-md" />
      <button
        onClick={() => {
          toggleFullScreen();
          setTimeout(resetTransform, 100);
        }}
      >
        <img
          src={isFullScreen ? fullscreenExitSVG : fullscreenSVG}
          alt="Toggle fullscreen"
          title="Toggle fullscreen"
          className="w-5 h-5 transition-all hover:-translate-y-[5%] hover:scale-105"
        />
      </button>
    </div>
  );
};

export default Toolbar;

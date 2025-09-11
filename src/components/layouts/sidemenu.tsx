import useLandingStore from "../landing/landing_store";
const SideMenu = () => {
  const { sideMenuOpen } = useLandingStore();

  return (
    <div
      className={`fixed z-20 bg-background overflow-hidden duration-500 w-full ${
        sideMenuOpen ? "h-dvh" : "h-0"
      } `}
    >
      <div className="flex items-center justify">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            {/* <img src={homeIcon} alt="home icon" className="" /> */}
            <p>Home</p>
          </div>

          <div>
            {/* <img src={arrowRight} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

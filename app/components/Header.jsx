import Image from "next/image";
import logo from "../assets/images/logo.svg";
import logoDark from "../assets/images/logo-dark.png";
import iconSun from "../assets/images/icon-sun.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-3 px-4 rounded-lg  bg-neutral-800 ">
      <Image
        src={logoDark}
        alt="Logo"
        width={160}
        height={160}
        className="invertt "
      />
      <button>
        <Image
          className="bg-neutral-700 size-12 p-3 rounded-lg "
          src={iconSun}
          alt="Icon"
          width={24}
          height={24}
        />
      </button>
    </header>
  );
};
export default Header;

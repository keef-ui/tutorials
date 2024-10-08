import styles from "./Branding.module.css";
import Image from "next/image";
import logo from "../../assets/yt-logo.jpg";
import MenuIcon from "../svg/menu-icon/menu-icon";
import Burger from "../burger/burger"


export const BrandingHeader = ({ brandlogo , open , setOpen}: { brandlogo?: string ,open: string,
  setOpen: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <header>
      <div className='styles.menuicon'>  <Burger open={open} setOpen={setOpen} /></div>
     
      <div className={styles.logo}>
        <Image src={logo} alt="Picture of the author" />
      </div>
    </header>
  );
};
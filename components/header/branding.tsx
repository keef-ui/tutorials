import styles from "./Branding.module.css";
import Image from "next/image";
import logo from "../../assets/yt-logo.jpg";


export const BrandingHeader = ({ brandlogo }: { brandlogo?: string }) => {
  return (
    <header>
      <div className={styles.logo}>
        <Image src={logo} alt="Picture of the author" />
      </div>
    </header>
  );
};
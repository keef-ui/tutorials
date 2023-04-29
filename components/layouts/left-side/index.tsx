import styles from "./LeftAside.module.css"
import { BrandingHeader } from "../../header/branding";
import SideMenuList from '../../aside-menulist';
// import {course_a} from '../../../pages'

type Props = {
  children ?: JSX.Element;
  props ?: any;
  list:any;
  heading:string;
};

export default function LeftAside({ children, props, list, heading }: Props) : JSX.Element {
  return (
    <div className={styles.left_aside}>
      <span className={styles.open}>&#9776; open</span>
      <aside>
        <BrandingHeader />
        <h2>{heading}</h2>

        <SideMenuList list={list} />
      </aside>
    </div>
  );
}
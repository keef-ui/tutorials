import styles from "./LeftAside.module.css"
import { BrandingHeader } from "../../header/branding";
import SideMenuList from '../../aside-menulist';
import {course_a} from '../../../pages'

type Props = {
  children ?: JSX.Element;
  props ?: any;
};

export default function LeftAside({ children, props }: Props) : JSX.Element {
  return(
  <div className={styles.left_aside}>
    <aside>
      <BrandingHeader />
      <h2>Section headerxxx</h2>

      <SideMenuList list={course_a} />
    </aside>
  </div>
  )
}
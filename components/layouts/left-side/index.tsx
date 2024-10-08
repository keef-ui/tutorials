import styles from "./LeftAside.module.css"
import { BrandingHeader } from "../../header/branding";
import SideMenuList from '../../aside-menulist';
import Svgicon from '../../svg/menu-icon/menu-icon'
import { useState } from "react";
// import {course_a} from '../../../pages'

type Props = {
  children ?: JSX.Element;
  props ?: any;
  list:any;
  heading:string;
  onSlidein:any;
  onSlideout:any;
};

export default function LeftAside({ children, props, list, heading, onSlidein,onSlideout }: Props) : JSX.Element {
  const {open,setOpen} = useState(false)
  return (
    <div className={open ? `styles.left_aside styles.open` : `styles.left_aside` } >
      <aside>
        <BrandingHeader  open={open} setOpen={setOpen}/>
        <h2>{heading}</h2>

        <SideMenuList list={list} />
      </aside>
    </div>
  );
}
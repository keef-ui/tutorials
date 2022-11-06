import styles from "./RightAside.module.css"


type Props = {
  children : JSX.Element|JSX.Element[];
  props ?: any;

};

export default function LeftAside({ children, props }: Props) : JSX.Element {
  return(
  <aside className={styles.right_aside}>
           {children}
    </aside>
  )
}
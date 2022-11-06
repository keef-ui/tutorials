import styles from "./Main.module.css"

type Props = {
  children :JSX.Element|JSX.Element[];
  props ?: any;
};

export default function LeftAside({ children, props}: Props) : JSX.Element {
  return(
   <main className={styles.main}>
        <div className={styles.main_content}>
            XXXXXXXXXXXXXXXXXXXXXXXXXX
            {children}
        </div>
    </main>
  )
}
// import burgerStyles from "./Burger.modules.css"
import burgerStyles from "./Burger.module.css";
// Create a burger component
const Burger = ({ open, setOpen }) => {
    return (
      <button className={burgerStyles.burger} onClick={() => setOpen(!open)}>
        <div className={burgerStyles.line} style={{ background: open ? '#0D0C1D' : '#EFFFFA', transform: open ? 'rotate(45deg)' : 'rotate(0)' }} />
        <div className={burgerStyles.line} style={{ opacity: open ? '0' : '1', transform: open ? 'translateX(20px)' : 'translateX(0)' }} />
        <div className={burgerStyles.line} style={{ background: open ? '#0D0C1D' : '#EFFFFA', transform: open ? 'rotate(-45deg)' : 'rotate(0)' }} />
      </button>
    )
  }

  export default Burger
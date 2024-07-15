import Image from "next/image";
import styles from "./comps.module.css";

export default function Header(){
    return(

     <header className={styles.header}>
        <Image src="https://seeklogo.com/images/L/league-of-legends-logo-13AAC5B212-seeklogo.com.png" height="100" width = '100'/>   
        <h1>Campeões do Rift</h1>
        <button className= {styles.butao}>Add</button>
        <button className= {styles.butao}><Image src='public\carrin.svg' height="25" width = '25'/></button>
     </header>
    
    )
}
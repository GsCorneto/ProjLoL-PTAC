import Image from "next/image";
import styles from "./comps.module.css";

export default function Header(){
    return(

     <header className={styles.header}>
        <div className={styles.logo}>
            <Image src="https://seeklogo.com/images/L/league-of-legends-logo-13AAC5B212-seeklogo.com.png" height="100" width = '100'/>   
        </div>
        <h1>Campeões do Rift</h1>
     </header>
    
    )
}
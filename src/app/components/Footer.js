import Image from "next/image";
import styles from "./comps.module.css";
export default function Footer(){
    return(

     <footer className={styles.footer}>
      <h2>Conheça nossos outros produtos</h2>
          <ul type="square">
            <li>Team Fight Tatics</li>
            <li>Wild Rift</li>
            <li>Legends of Runeterra</li>
          </ul>
          <div className={styles.logo}>
          <Image src="https://seeklogo.com/images/L/league-of-legends-logo-13AAC5B212-seeklogo.com.png" height="100" width = '100'/>
          </div>
          
     </footer>

    )
}
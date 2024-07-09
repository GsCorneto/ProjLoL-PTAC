import Image from "next/image";
import styles from "./comps.module.css";

export default function Header(){
    return(

     <header className={styles.header}>
        <Image src="https://fakestoreapi.com/icons/logo.png" height="100" width = '100'/>   
        <h1></h1>
        <button className= {styles.butao}>Add</button>
        <button className= {styles.butao}><Image src='public\carrin.svg' height="25" width = '25'/></button>
     </header>
    
    )
}
import Image from 'next/image';
import styles from "./comps.module.css";

export default function Spinner(){
    return(
        <div className={styles.loading}>
        <Image width={100} height={100} alt="" src={"/Loading.svg"} />
        </div>
    );
}
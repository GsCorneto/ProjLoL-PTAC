import styles from "../../components/comps.module.css"
import Link from "next/link";
export default async function Campeao({ params }){
    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();

      return(
        <main className={styles.pageID}>
          <div className={styles.campeaoInfo}>
          <h1>{data.nome}</h1>
          <img src={data.imagem} alt={data.nome} />
          <p className={styles.descricao}>{data.descricao}</p>
          <div className={styles.atributos}>
            <div className={styles.atributo}>
              <h3>Função</h3>
              <p>{data.funcao}</p>
            </div>
            <div className={styles.atributo}>
              <h3>Dificuldade</h3>
              <p>{data.dific}</p>
            </div>
          </div>
          <div className={styles.preco}>
            <p>{data.preco} Ciscos Azuis</p>
          </div>
        </div>
        </main>
      )
    }

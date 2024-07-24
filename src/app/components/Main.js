"use client"
import styles from "./comps.module.css"
import Image from "next/image";
import Footer  from "./Footer";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ErrorFetch from "./ErrorFetch";
import Link from "next/link";
export default function Main(){

  const [champs, setChamps] = useState([]);
  const [todosCamp, setTdsCamp] = useState([]);
  const [textBusca, setTextB] = useState("");
  const [isError, setIsE] = useState(false)

  useEffect( ()=> {

    const getChamp = async () =>{
      try{
      const response = await fetch("http://localhost:3000/api")
      const data = await response.json();
      setChamps(data);
      setTdsCamp(data);
    }
    catch{
      setIsE(true)
    }}

    getChamp();
   }, []);

  const orderAz = () => {
    const listAux = [...champs].sort((a,b) => a.nome.localeCompare(b.nome));
    setChamps(listAux)
  };

  const orderZa = () => {
    const listAux = [...champs].sort((a,b) => b.nome.localeCompare(a.nome));
    setChamps(listAux)
  };

  const orderPriceH = () => {
    const listAux = [...champs].sort((a,b) => (a.preco) - (b.preco));
    setChamps(listAux)
  };

  const orderPriceL = () => {
    const listAux = [...champs].sort((a,b) => (b.preco) - (a.preco));
    setChamps(listAux)
  };
  
   const busca = (text) => {
    setTextB(text);

    if(text.trim() == ""){
        setChamps(todosCamp);
      return
    }
    const newList = champs.filter((prod) => 
      prod.nome.toUpperCase().trim().includes(textBusca.toUpperCase())
    );
    setChamps(newList);

   }

   if(isError == true){
       return <ErrorFetch/>
   }

  if (champs.length === 0){
    return <Spinner/>
  }
  console.log(champs)
    return(
    <>
    
    <div className= {styles.filters}>
        <div>
          <input type="text" value={textBusca} placeholder="Pesquise um produto"
          onChange={(event) => busca(event.target.value)}/>

           <button onClick={ orderAz }> Ordenar de A-Z </button>
        </div>

        <div>
           <button onClick={ orderZa }> Ordenar de Z-A </button>
        </div>

        <div>
           <button onClick={ orderPriceH }> Preço Menor-Maior </button>
        </div>

        <div>
           <button onClick={ orderPriceL }> Preço Maior-Menor </button>
        </div>
    </div>
      <main className={styles.main}>
      
      {champs.map((campeao)=> 
      
    <div className={styles.card} key={campeao.id}>
      <div className={styles.cardImage}>
         <Image 
         width={300} 
         height={300} 
         src={campeao.imagem}
         alt={campeao.nome}/>
      </div>
      <div className={styles.cardContent}>
          <p  className={styles.cardTitle}>{campeao.nome}</p>
           <p className={styles.cardPrice}>{campeao.preco} Ciscos Azuis</p>
           <p className={styles.cardDescription}>{campeao.descricao.slice(0,30)+ "..."}</p>
           <Link href={"/campeao/" + campeao.id}>
           <button className={styles.cardButton} >Ver Mais</button>
           </Link>
      </div>
        
    </div>

      )}
      <Footer/>
  </main>
  </>
    )
}

export default async function Product({ params }){
    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();

      return(
        <div key={data.id}>
            <p>{data.nome}</p>
        </div>
      )
    }
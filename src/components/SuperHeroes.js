import { useState, useEffect } from "react";
import axios from "axios";

function SuperHeroes() {
  const [isLoading, SetIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error,setError]=useState("")

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      SetIsLoading(false);
    }).catch(error=>{
        setError(error.message)
        SetIsLoading(false)
    })
  }, []);

  if (isLoading) {return <h2>Loading...</h2>};
  if(error) {return <h2>{error}</h2>};

  return (
    <>
      <h2>Super Heroes Page(Fetching data with traditional way using useState and useEffect hooks)</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}
         {/* { console.log(hero)} */}
         </div>;
       
      })}
    </>
  );
}

export default SuperHeroes;

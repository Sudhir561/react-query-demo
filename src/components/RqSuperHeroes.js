
import axios from 'axios';
import {useQuery} from "react-query";


const fetchingdata=()=>{ return axios.get("http://localhost:4000/superheroes1")}
const RqSuperHeroes=()=> {
    const {isLoading,data,isError,error}=useQuery("super-heroes",fetchingdata);
 if (isLoading)
 {return <h2>Loading...</h2>}

 if(isError){return <h2>{error.message}</h2>}

    return (
        <div>
          <h2> React-query SuperHeroesPage </h2>
         {data?.data.map(hero=>{
             return <div key={hero.name}>{hero.name}</div>
         })}

          </div>
    )
}

export default RqSuperHeroes;

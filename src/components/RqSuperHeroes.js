
import axios from 'axios';
import { useState } from 'react';
import {useQuery} from "react-query";


const fetchingdata=()=>{ return axios.get("http://localhost:4000/superheroes")}
const RqSuperHeroes=()=> {

//  const[refetchInterval,setRefetchInterval] = useState(3000)
//     const onSuccess=(data)=>{
//         if(data.data.length===4){
//         return setRefetchInterval(false)
//         }
//         else{
//             return refetchInterval;
//             }
//         //console.log("perform side-effect after data fetching",data)
//     }
//     const onError=(error)=>{
//         //console.log("perform side-effect after encountering error",error)
//         if(error){
//             return setRefetchInterval(false) }}
       
    
    const {isLoading,data,isError,error,isFetching,refetch}=useQuery("super-heroes",fetchingdata,
    {
        //cacheTime:5000, by-default cache time is 5min
        // staleTime:10000,by-default stale time is 0min
        //refetchOnMount:'always',,by-default  true
        // refetchOnWindowFocus:'true'    by-default  true
        // refetchInterval:1000,
        // refetchIntervalInBackground:true
       //refetchInterval,
        //onSuccess,
        //onError
        select:(data)=>{
            const superheroName=data.data.map(hero=> hero.name)
            return superheroName
                
            
        }
    });

    console.log(isLoading,isFetching);
 if (isLoading||isFetching)
 {return <h2>Loading...</h2>}

 if(isError){return <h2>{error.message}</h2>}

    return (
        <div>
          <h2> React-query SuperHeroesPage </h2>
          <button onClick={refetch}>Fetch-superhero</button>
         {/* {data?.data.map(hero=>{
             return <div key={hero.name}>{hero.name}</div>
         })} */}

         {
             data.map(heroName=>{
                 return <div key={heroName}>{heroName}</div>
             })
         }

          </div>
    )
}

export default RqSuperHeroes;

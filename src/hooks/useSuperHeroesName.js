import axios from "axios";
import {useQuery} from "react-query";


const fetchingdata=()=>{ return axios.get("http://localhost:4000/superheroes")}
const useSuperHeroesName=(onSuccess,onError)=> {
    return useQuery("super-heroes",fetchingdata,
    {
        //cacheTime:5000, by-default cache time is 5min
        // staleTime:10000,by-default stale time is 0min
        //refetchOnMount:'always',,by-default  true
        // refetchOnWindowFocus:'true'    by-default  true
        // refetchInterval:1000,
        // refetchIntervalInBackground:true
       //refetchInterval,
        onSuccess,
        onError,
        // select:(data)=>{
        //     const superheroName=data.data.map(hero=> hero.name)
        //     return superheroName
                
            
        // }
    });

        
}

export default useSuperHeroesName

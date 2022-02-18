import Home from './components/Home';
import React from 'react';
import {QueryClientProvider,QueryClient,} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"
import SuperHeroes from './components/SuperHeroes';
import RqSuperHeroes from './components/RqSuperHeroes';
import {BrowserRouter,Routes,Route,Link } from "react-router-dom";

import './App.css';

const queryClient=new QueryClient();

function App() {
 return(
   <QueryClientProvider client={queryClient}>
   <BrowserRouter>
   <nav>
     <div>
       <ul>
         <li>
           <Link to ="/">Home</Link>
         </li>
         <li>
           <Link to="/super-heroes">SuperHeroes</Link>
         </li>
         <li>
           <Link to="/rq-super-heroes">RqSuperHeroes</Link>
         </li>
       </ul>
     </div>
   </nav>
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/super-heroes" element={<SuperHeroes/>}/>
     <Route path ="/rq-super-heroes" element={<RqSuperHeroes/>}/>
   </Routes>
   </BrowserRouter>
   <ReactQueryDevtools  initialIsOpen={false}    position="bottom-right"/>
   </QueryClientProvider>
 )
}

export default App;

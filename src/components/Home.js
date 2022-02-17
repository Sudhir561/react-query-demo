import React from "react";

function Home() {
  return (
    <div>
      <h1>
        Getting Started with React-Query for Data Fetching and State Management
      </h1>
      <hr />

      <div>
        <h3>
          <pre>
            React-Query provides include: Using window focus pre-fetching
            mechanism to pre-fetch the data depending on application tab
            activity. 
            <p>We can set the number of request retries for any request,
            in case of random errors. 
           <p> React-Query performs pre-fetching so that
            the application can update stale data in the background.</p>
             </p>
            <p>Handling
            complex application caching so that the request operation is
            optimized.</p>
          </pre>
        </h3>
        <h2> content will cover in this React-query-app:
           <ul>
               <li>Basic queries</li>
               <li>poll data</li>
               <li>React query tool</li>
               <li>create resuable query hooks</li>
               <li>query by id</li>
               <li>parallel queries</li>
               <li>dynamic queries</li>
               <li>dependent queries</li>
               <li>infinite & paginaed queries</li>
               <li>update data using mutations</li>
               <li>invalidate queries</li>
               <li>optimistic updates</li>
               <li> Axios interceptor</li>
           </ul>
        </h2>
      </div>
    </div>
  );
}

export default Home;

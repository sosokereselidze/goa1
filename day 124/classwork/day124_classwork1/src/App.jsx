// import { useState , useEffect} from 'react'

// const apiUrl = 'https://api.thenewsapi.com/v1/news/top?api_token=DL7KKpOInhKaXll5zNjCw6e3r0MU01YkKqjkYYKw&locale=us&limit=3'

// function App() {
//   const [newsData, setNewsData] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
      
//       setNewsData(data.data);
//     }

//     fetchData();
//   }, []);

//   return(
//     <main>
//       {
//         newsData.map((item, index) => {
//           return(
//             <article key={index}>
//               <h1>{item.title}</h1>
//               <img src={item.image_url}/>
//               <p>{item.description}</p>
//               <p>{item.snippet}</p>
//               <a href={item.url}>see</a>
//             </article>
//           )
//         })
//       }
//     </main>
//   )
// }

// export default App




import { useEffect, useState } from "react"

const apiUrl = 'https://api.thenewsapi.com/v1/news/top?api_token=fiMWUJy7UWGnSMUiFH3CVMIHWf7bAiHUzlm3NgaV&locale=us&limit=3';

const App = () => {
  const [newsData, setNewsData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      setNewsData(data.data);
    }

    fetchData();
  }, []);

  console.log(newsData)

  return (
    <main>
      <h1>News</h1>
      {
        newsData.map((item, index) => {
          return (
            <article key={index}>
              <h2>{item.title}</h2>
              <img src={item.image_url}/>
              <p>{item.description}</p>
              <p>{item.snippet}</p>
              <a href={item.url}>See more</a>
            </article>
          )
        })
      } 
    </main>
  )
}

export default App
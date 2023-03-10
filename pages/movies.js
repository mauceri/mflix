import clientPromise from "../lib/mongodb";

export default function Movies({ movies }) {
    return (
        
        <div>
        <ul>
            <li><a href="/">Back</a></li>
            <li><a href="/top">100 meilleurs films</a></li>
        </ul>  
 
          <h1>Top 20 Movies of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
            </p>
            <ul>
                {movies.map((movie) => (
                    <li>
                        <h3>Description</h3>
                        <h2>{movie.title}</h2>
                        <h3>{movie.metacritic}</h3>
                        <p>{movie.plot}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");
  
        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();
            console.log("OK!")
        return {
            props: { movies: JSON.parse(JSON.stringify(movies)) },
        };
    } catch (e) {
        console.error(e);
    }
  }
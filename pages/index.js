import Head from 'next/head';
import MovieInfo from '../components/MovieInfo';

export default function IndexPage({ movie }) {

  // state
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [movieInfo, setMovieInfo] = React.useState(movie);

  const handleSearchOpen = () => {
    searchOpen ? setSearchOpen(false) : setSearchOpen(true);
  }

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="next js omdb api" />
        <meta name="keywords" content="next-js react ssr ssg omdb api" />
        <meta name="author" content="Rudi Widodo" />
        <title>next-js | omdb-api</title>
        <link rel="shortcut icon" href="/vercel.svg" type="image/x-icon" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"></link>
      </Head>

      {/* navbar */}
      <nav>
        <div className="p-3 bg-gray-900 flex justify-between items-center fixed top-0 left-0 right-0 box-search">

          <div className="text-white text-3xl font-semibold uppercase">
            <h1>next-js | omdb-api</h1>
          </div>

          <div className="w-8/12 bg-white rounded shadow-md flex search">
            <input
              className="w-full px-2 text-2xl text-gray-400 font-semibold rounded"
              placeholder="movie search"
              type="text" />
            <button
              className="p-7 bg-green-400 uppercase text-white text-2xl font-semibold">search</button>
          </div>

          <div
            onClick={handleSearchOpen}
            className="text-3xl text-white font-semibold hidden search-icon">
            <i className="fas fa-search"></i>
          </div>

          {/* mobile search */}
          {searchOpen && <div className="w-full bg-white rounded shadow-md flex absolute top-20 left-0 p-1 search-mobile">
            <input
              className="w-full px-2 py-3 text-2xl text-gray-400 font-semibold rounded"
              placeholder="movie search"
              type="text" />
            <button
              className="p-7 bg-green-400 uppercase text-white text-2xl font-semibold">search</button>
          </div>}
          {/* end mobile search */}

        </div>
      </nav>
      {/* end navbar */}

      {/* container */}
      <div className="bg-gray-800 px-3 pt-28">
        {movieInfo && <MemoMovieInfo movieInfo={movieInfo} />}
      </div>
      {/* end container */}
    </div>
  )
}


const MemoMovieInfo = React.memo(MovieInfo);

export const getServerSideProps = async () => {
  const movie = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=49d13b81')
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.error('error fetch api movie : ', err));

  return {
    props: {
      movie,
    }
  }
}

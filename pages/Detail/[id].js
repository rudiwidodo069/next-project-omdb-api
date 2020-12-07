export default function Detail({ detail }) {
    console.log(detail);
    return (
        <div className="bg-gray-800 px-3 container-detail">
            <div className="grid grid-cols-2 gap-3 box-movie-info">
                <div className="bg-white p-2 rounded shadow-md box-img-movie-info flex items-center">
                    <img
                        className="img-movie-info"
                        src={detail.Poster}
                        alt={detail.Title}
                        style={{ width: '100%', height: '80vh', margin: '10px auto' }} />
                </div>
                <div className="p-2 flex flex-col justify-around text-movie-info">
                    <h1 className="text-white text-3xl text-center mb-4 font-semibold uppercase border-white border-b-4 pb-3">Movie info</h1>
                    <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                        <h3 className="text-gray-800">title</h3>
                        <p className="text-green-400" >{detail.Title}</p>
                    </div>
                    <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                        <h3 className="text-gray-800">run time</h3>
                        <p className="text-green-400" >{detail.Runtime}</p>
                    </div>
                    <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                        <h3 className="text-gray-800">released</h3>
                        <p className="text-green-400" >{detail.Released}</p>
                    </div>
                    <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                        <h3 className="text-gray-800">Country</h3>
                        <p className="text-green-400" >{detail.Country}</p>
                    </div>
                    <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                        <h3 className="text-gray-800">genre</h3>
                        <p className="text-green-400" >{detail.Genre}</p>
                    </div>
                    <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                        <h3 className="text-gray-800">year</h3>
                        <p className="text-green-400" >{detail.Year}</p>
                    </div>
                    <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                        <h3 className="text-gray-800">director</h3>
                        <p className="text-green-400" >{detail.Director}</p>
                    </div>
                    <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                        <h3 className="text-gray-800">Writer</h3>
                        <p className="text-green-400" >{detail.Writer}</p>
                    </div>
                    <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                        <h3 className="text-gray-800">type</h3>
                        <p className="text-green-400" >{detail.Type}</p>
                    </div>
                    <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                        <h3 className="text-gray-800">imdb rating</h3>
                        <p className="text-green-400" >{detail.imdbRating}</p>
                    </div>
                    <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                        <h3 className="text-gray-800">imdb votes</h3>
                        <p className="text-green-400" >{detail.imdbVotes}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const movieDetail = await fetch(`http://www.omdbapi.com/?i=${params.id}&apikey=49d13b81`);
    const detail = await movieDetail.json();

    return {
        props: {
            detail,
        }
    }
}

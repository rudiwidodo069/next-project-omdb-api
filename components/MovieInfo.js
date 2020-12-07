export default function MovieInfo({ movieInfo }) {
    return (
        <div className="grid grid-cols-2 gap-3 box-movie-info">
            <div className="bg-white p-2 rounded shadow-md box-img-movie-info flex items-center">
                <img
                    className="img-movie-info"
                    src={movieInfo.Poster}
                    alt={movieInfo.Title}
                    style={{ width: '100%', height: '80vh', margin: '10px auto' }} />
            </div>
            <div className="p-2 flex flex-col justify-around text-movie-info">
                <h1 className="text-white text-3xl text-center mb-4 font-semibold uppercase border-white border-b-4 pb-3">Movie info</h1>
                <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                    <h3 className="text-gray-800">title</h3>
                    <p className="text-green-400" >{movieInfo.Title}</p>
                </div>
                <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                    <h3 className="text-gray-800">released</h3>
                    <p className="text-green-400" >{movieInfo.Released}</p>
                </div>
                <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                    <h3 className="text-gray-800">director</h3>
                    <p className="text-green-400" >{movieInfo.Director}</p>
                </div>
                <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                    <h3 className="text-gray-800">type</h3>
                    <p className="text-green-400" >{movieInfo.Type}</p>
                </div>
                <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                    <h3 className="text-gray-800">imdb rating</h3>
                    <p className="text-green-400" >{movieInfo.imdbRating}</p>
                </div>
                <div className="p-2 bg-white text-center text-2xl font-semibold rounded shadow-inner uppercase mt-2">
                    <h3 className="text-gray-800">imdb votes</h3>
                    <p className="text-green-400" >{movieInfo.imdbVotes}</p>
                </div>
            </div>
        </div>
    )
}

import Link from 'next/link';

export default function SearchMovie({ searchMovie, searchClose }) {
    return (
        <div className="bg-gray-800 bg-opacity-70 fixed top-0 bottom-0 left-0 right-0 flex items-center p-2 overflow-auto">
            {searchMovie.map((mv, index) => {
                return (
                    <Link
                        href={`/Detail/${mv.imdbID}`}
                        key={index}>
                        <div
                            className="bg-white p-2 mr-2 card-search-movie">
                            <div className="w-full h-96">
                                <img
                                    src={mv.Poster}
                                    alt={mv.Title}
                                    style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className="text-2xl text-gray-800 text-center font-semibold uppercase my-3">
                                <h3>{mv.Title}</h3>
                            </div>
                        </div>
                    </Link>
                )
            })}
            <div
                onClick={searchClose}
                className="w-10 h-10 rounded-full shadow-md bg-white fixed top-3 right-2 text-3xl flex justify-center items-center text-red-400 cursor-pointer">
                <i className="fas fa-times"></i>
            </div>
        </div>
    )
}

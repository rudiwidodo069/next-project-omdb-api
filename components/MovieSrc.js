import Link from 'next/link';

export default function MovieSrc({ movieSrc }) {
    return (
        <div className="mt-16">
            <div className="text-3xl text-white font-semibold uppercase mb-5">
                <h1>Movie Search</h1>
            </div>
            <div className="grid grid-cols-4 gap-3 box-movie-src">
                {movieSrc.map((mv, index) => {
                    return (
                        <Link
                            href={`/Detail/${mv.imdbID}`}
                            key={index}>
                            <div
                                className="bg-white rounded shadow-md p-2 card-movie-src">
                                <div className="w-full h-96">
                                    <img
                                        src={mv.Poster}
                                        alt={mv.Title}
                                        style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="text-center text-gray-800 text-2xl font-semibold uppercase my-3">
                                    <h3>{mv.Title}</h3>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default function ErrorMsg({ errorMsg, errorClose }) {
    return (
        <>
            <div className="bg-gray-800 bg-opacity-70 px-3 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
                <div className="p-2 bg-red-400 w-full text-2xl text-center text-white font-semibold">
                    <h3>{errorMsg}</h3>
                </div>
            </div>
            <div
                onClick={errorClose}
                className="w-10 h-10 rounded-full shadow-md bg-white fixed top-3 right-2 text-3xl flex justify-center items-center text-red-400 cursor-pointer">
                <i className="fas fa-times"></i>
            </div>
        </>
    )
}

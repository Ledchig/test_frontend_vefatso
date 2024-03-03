'use client'

const ButtonMoreArticles = () => {
    const refreshArticles = () => {
        window.location.reload();
    };

    return (
        <div>
            <button
                className="bg-emerald-800 mt-2 text-white font-bold py-4 px-6 rounded-full 
                    hover:bg-emerald-600 hover:cursor-pointer active:bg-emerald-600 duration-300"
                onClick={refreshArticles}
            >
                Refresh articles
            </button>
        </div>
    )
};

export default ButtonMoreArticles;
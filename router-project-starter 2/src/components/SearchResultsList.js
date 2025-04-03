const SearchResultsList = ({ results }) => {
    return(
        <div className="w-full bg-white flex flex-col rounded-b-md max-h-24 overflow-y-auto">
            {results.map((result,id) => {
                    return(
                        <div key={id} className="p-1 hover:bg-gray-200 cursor-pointer">{result.name}</div>    
                    )
                })}
        </div>
    )
} 

export default SearchResultsList
function SearchResult({ data, searchInput }) {
  return (
    <div className="w-full  ">
      <div className=" container py-12 mx-auto flex flex-col text-[#051a36]">
        <h1 className="text-4xl mb-4 w-full py-8 font-bold ">Search Result</h1>

        <div className=" flex flex-row space-x-36">
          <div className="rounded-md shadow-sm">
            <img
              src={data.image_url}
              alt=""
              className="border rounded-lg w-[300px] h-auto"
            />
          </div>

          <div className="font-bold  flex flex-col">
            <h2 className="text-3xl mb-2">{data.title}</h2>
            <p className="my-8 text-lg">
              by {data.authors.split(", ").join(", ")}
            </p>
            <div className="leading-9 font-bold text-lg">
              <p>
                Edition: <span className="text-[#6060f4]">{data.edition}</span>
              </p>
              <p>
                Price: <span className="text-[#6060f4]">PHP {data.price}</span>
              </p>
              <p>
                ISBN:{" "}
                <span className="text-[#6060f4]">
                  {searchInput.length === 10
                    ? data.isbn_13
                    : searchInput.length === 13
                    ? data.isbn_13
                    : data.isbn_10}
                </span>
              </p>
              <p>
                Publication Year:
                <span className="text-[#6060f4]"> {data.publication_year}</span>
              </p>
              <p>
                Publisher:
                <span className="text-[#6060f4]"> {data.publisher}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;

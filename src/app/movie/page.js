import Link from "next/link";
import Moviecard from "../components/Moviecard";
const movie = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "77a3176de6msh44e57410674badap18c6e6jsn27e4c59dca6b",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  return (
    <>
      <section>
      <hr className="border-t-2 border-gray-600 mt-6"/>
        <div className="mt-12">
          
          <h1 className="text-6xl text-center font-bold">Series and Movies</h1>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {main_data.map((curElem) => {
            return <Moviecard key={curElem.id} {...curElem} />;
          })}
          </div>
        </div>
      </section>
    </>
  );
};

export default movie;

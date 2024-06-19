import search from "../../../public/search.svg";

export default function SearchInput() {
  return (
    <div className="relative flex items-center my-5 md:my-10">
      <input
        type="search"
        className="text-gray-500 bg-purple-white shadow rounded-full border-2 border-blue-50 py-3 pr-8 pl-5  focus-visible:outline-none  focus-visible:border-blue-50"
        placeholder="Buscar"
      />
      <img
        src={search.src}
        alt="search-icon"
        className="absolute right-4 pin-r pin-t my-aut w-4 text-red-500"
      />
    </div>
  );
}

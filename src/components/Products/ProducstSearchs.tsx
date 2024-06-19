import SearchInput from "@/components/base/SearchInput";

export default function ProducstSearchs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className=" flex justify-center md:justify-start m-3 md:m-0">
        <SearchInput />
      </div>
    </div>
  );
}

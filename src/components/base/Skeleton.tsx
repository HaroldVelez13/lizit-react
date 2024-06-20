export default function Skeleton() {
  return (
    <div className="flex animate-pulse">
      <div className="ms-4 mt-2 w-full">
        <ul className="mt-5 space-y-3">
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
        </ul>
      </div>
    </div>
  );
}

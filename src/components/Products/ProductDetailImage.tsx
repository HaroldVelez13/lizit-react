import AddProduct from "../../../public/test.png";

export default function ProductDetailImage() {
  return (
    <div className="flex">
      <div className="w-9/12 p-5 my-auto">
        <img
          src={AddProduct.src}
          alt={"largeImageAlt"}
          className="object-cover h-auto w-full rounded-2xl "
        />
      </div>
      <div className="grid grid-cols-1 gap-3 w-3/12 ">
        {[3, 2, 5, 6, 7].map((_, index) => (
          <img
            key={index} // Important for performance with dynamic data
            src={AddProduct.src}
            alt={"smallImageAlt"}
            className="object-cover h-full w-auto rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
}

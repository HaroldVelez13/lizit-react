"use client";

type IProps = {
  images: string[];
  image: string;
};
export default function ProductDetailImage({ image, images }: IProps) {
  return (
    <div className="flex">
      <div className="w-9/12 p-5 m-5 my-auto">
        <img
          src={image}
          alt={"largeImageAlt"}
          className="object-cover max-h-96  max-w-96   m-auto rounded-2xl bg-white p-5"
        />
      </div>
      <div className="grid grid-cols-1  w-3/12  ">
        {images.map((img, index) => (
          <img
            key={img + index} // Important for performance with dynamic data
            src={img}
            alt={"product-image" + index}
            className="object-cover h-40 w-40 bg-white p-2 m-2 rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
}

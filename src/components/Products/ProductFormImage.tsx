import ButtonBase from "@/components/base/ButtonBase";
import { useState } from "react";

type IProps = {
  image: string;
  images: string[];
  handleAddImage: (img: string) => void;
  setImage: (img: string) => void;
};
export default function ProductFormImage({
  image,
  images,
  handleAddImage,
  setImage,
}: IProps) {
  const [inputImage, setInputImage] = useState("");

  const handleClick = () => {
    handleAddImage(inputImage);
    setInputImage("");
  };

  const handleOnChange = (img: string) => {
    setImage(img);
  };

  return (
    <div className="col-span-2 lg:col-span-1 bg-blue-100 rounded-lg items-center justify-center p-7">
      <div className="flex flex-col ">
        <div className="mb-6">
          <h2 className="text-blue-500 font-semibold">Imágenes</h2>
          <p className="text-sm text-gray-600">
            Añada los links de las imágenes relacionadas al producto.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-9 flex flex-col">
              <input
                value={inputImage}
                onChange={(e) => setInputImage(e.target.value)}
                type="text"
                className=" text-gray-500  shadow rounded-xl border-2 border-blue-50 p-2   focus-visible:outline-none  focus-visible:border-blue-50"
              />
            </div>
            <div className="col-span-12 sm:col-span-3 flex flex-col text-sm my-auto">
              <ButtonBase text="Agregar" onClick={handleClick} />
            </div>
          </div>
        </div>
        <img />
        <div className="grid grid-cols-3 gap-4  ">
          {images &&
            images.map((img, i) => (
              <div
                className="my-5 "
                key={img + i}
                onClick={() => handleOnChange(img)}>
                <div className="flex items-center justify-center">
                  <input
                    type="radio"
                    value={img}
                    checked={image == img}
                    onChange={(e) => setImage(e.target.value)}
                    className="mb-3"
                  />
                </div>
                <img
                  src={img}
                  alt={img}
                  className="w-40 h-40 rounded-lg object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

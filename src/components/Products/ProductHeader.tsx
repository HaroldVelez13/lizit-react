import Link from "next/link";
import backIcon from "../../../public/back.svg";
import Lizit from "../../../public/lizit.svg";
type IProps = {
  name: string;
};
export default function ProductHeader({ name }: IProps) {
  return (
    <div className="grid grid-cols-2 mt-0  lg:-mt-10">
      <div className="flex ">
        <Link href="/" className="flex my-auto">
          <img src={backIcon.src} className="w-6 h-6 my-auto" />
        </Link>
        <span className="text-3xl font-semibold ml-5 my-auto">{name}</span>
      </div>
      <div className=" flex  justify-end order-last">
        <img
          src={Lizit.src}
          alt="Lizit Icon"
          className="w-16 mr-8 lg:mr-2 xl:mr-16"
        />
      </div>
    </div>
  );
}

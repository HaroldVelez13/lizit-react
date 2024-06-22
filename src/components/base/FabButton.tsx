type FabButtonProps = {
  icon: any;
  onClick?: (data: any) => void;
};

export default function FabButton({ icon, onClick }: FabButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-0 w-7 h-7 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-transparent rounded-full shadow-md hover:shadow-xl active:shadow-xl mouse  transition ease-in duration-200 focus:outline-none cursor-pointer">
      <img src={icon.src} alt="" className="w-6 h-6 inline-block" />
    </button>
  );
}

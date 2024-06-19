type ButtonBaseProps = {
  text: string;
  variant?: string;
  icon?: any;
  onClick?: () => any;
};
export default function ButtonBase({
  text,
  icon,
  variant = "primary",
  onClick,
}: ButtonBaseProps) {
  return (
    <button
      onClick={onClick}
      className={`
      py-2 px-3  md:px-6  rounded-full font-medtextium cursor-pointer flex justify-center font-semibold 
      ${variant === "primary" ? "bg-blue-500 text-white hover:bg-blue-400" : ""}
      ${variant === "secondary" ? "bg-gray-200 text-gray-700" : ""}
    `}>
      {icon && (
        <img
          src={icon.src}
          alt={`icon-${text}`}
          className="mr-2"
          height={25}
          width={25}
        />
      )}
      <span>{text}</span>
    </button>
  );
}

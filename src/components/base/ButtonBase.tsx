type ButtonBaseProps = {
  text: string;
  variant?: string;
  icon?: any;
};
export default function ButtonBase({
  text,
  icon,
  variant = "primary",
}: ButtonBaseProps) {
  return (
    <button
      className={`
      py-2 px-3  md:px-6  rounded-full font-medtextium cursor-pointer flex justify-end font-semibold 
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

type GridProps = {
  children: JSX.Element;
};
export default function GridPrincipal({ children }: GridProps) {
  return <section className="grid grid-cols-1">{children}</section>;
}

interface H2Props {
  children: React.ReactNode;
  className?: string;
}
const H2Heading = ({ children, className }: H2Props) => {
  return (
    <h2
      className={`scroll-m-20 text-4xl/normal font-bold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
};
export default H2Heading;

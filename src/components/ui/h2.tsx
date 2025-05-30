interface H2Props {
  children: React.ReactNode;
  className?: string;
}

const h2Heading = ({ children, className }: H2Props) => {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
};
export default h2Heading;

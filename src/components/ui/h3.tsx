interface H3HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const H3Heading = ({ children, className }: H3HeadingProps) => {
  return (
    <h3
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
};
export default H3Heading;

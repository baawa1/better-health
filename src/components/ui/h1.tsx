interface H1HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const H1Heading = ({ children, className }: H1HeadingProps) => {
  return (
    <h1
      className={`tracking-[-4%] text-[2.5rem] md:text-5xl lg:text-6xl font-bold leading-[120%] scroll-m-20 text-balance ${className}`}
    >
      {children}
    </h1>
  );
};
export default H1Heading;

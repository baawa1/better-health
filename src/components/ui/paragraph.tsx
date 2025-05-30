interface paragraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: paragraphProps) => {
  return <p className={`md:text-lg leading-[160%] ${className}`}>{children}</p>;
};
export default Paragraph;

interface paragraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: paragraphProps) => {
  return (
    <p
      className={`[&:not(:first-child)]:mt-6 md:text-lg leading-[160%] text-balance ${className}`}
    >
      {children}
    </p>
  );
};
export default Paragraph;

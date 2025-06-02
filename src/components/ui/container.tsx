interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`max-w-7xl mx-auto p-6 md:px-8 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;

const MainSection = ({
  headerText,
  className,
  children,
}: {
  headerText?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section
      className={` flex size-full flex-col gap-10  text-white  ${className}`}
    >
      {headerText && <h1 className=' text-3xl font-bold'>{headerText}</h1>}
      {children}
    </section>
  );
};

export default MainSection;

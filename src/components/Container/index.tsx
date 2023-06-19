'use client';

interface ContainerProps {
  children: React.ReactNode,
  className?: string,
};

const Container: React.FC<ContainerProps> = ({ children, className = "", ...rest }) => {
  const classNames = `
      max-w-[2520px]
      xl:max-w-[1320px]
      l:max-w-[1140px]
      md:max-w-[768px]

      mx-auto
      xl:px-20 
      md:px-10
      sm:px-2
      px-4` + " " + className;

  return ( 
    <div
      className={classNames}
      {...rest}
    >
      {children}
    </div>
   );
}
 
export default Container;

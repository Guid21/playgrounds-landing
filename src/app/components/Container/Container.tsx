import { clsx } from 'clsx';

type ContainerProps = {
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

export const Container = ({ className, children, id }: ContainerProps) => {
  return (
    <div className={clsx(className, 'px-8 max-w-[1280px]')} id={id}>
      {children}
    </div>
  );
};

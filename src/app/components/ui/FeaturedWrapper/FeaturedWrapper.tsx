import clsx from 'clsx';
import Image from 'next/image';

type FeaturedWrapperProps = {
  src: string;
  className?: string;
};

export const FeaturedWrapper = ({ src, className }: FeaturedWrapperProps) => {
  return (
    <div
      className={clsx(
        'lg:min-w-18 lg:h-18 lg:border-[8px] min-w-16 h-16 items-center justify-center flex aspect-1 bg-brand-100 border-[6px] border-brand-50 rounded-full p-1.5',
        className
      )}
    >
      <Image
        src={src}
        alt="icon"
        width={24}
        height={24}
        className="lg:min-w-6 min-w-5"
      />
    </div>
  );
};

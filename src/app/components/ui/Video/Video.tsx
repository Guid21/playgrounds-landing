import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { clsx } from 'clsx';

type VideoProps = Omit<ComponentPropsWithoutRef<'video'>, 'poster'> & {
  posterSrc: string;
  videoSrc: string;
  width?: number;
  height?: number;
  speed?: number;
};

export const Video = ({
  posterSrc,
  videoSrc,
  className,
  height = 1,
  width = 1,
  speed = 1,
  ...rest
}: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]);
  return (
    <div
      className={clsx(
        `relative rounded-2xl overflow-hidden w-full h-full`,
        className
      )}
      style={{
        aspectRatio: `${width}/${height}`,
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${posterSrc})` }}
      />
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        muted
        width={width}
        height={height}
        className="absolute inset-0 w-full h-full object-cover"
        {...rest}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

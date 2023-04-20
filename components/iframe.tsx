interface IframeProps {
  url: string;
  title: string;
}

export const Iframe = ({ url, title }: IframeProps) => {
  return (
    <iframe
      className='aspect-video h-screen max-h-[70vh] max-w-full'
      width='auto'
      height='auto'
      src={url}
      title={title}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    />
  );
};

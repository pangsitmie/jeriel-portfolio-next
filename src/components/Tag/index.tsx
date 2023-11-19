export type ITagProps = {
  type?: 'pink' | 'red' | 'black' | 'white';
  className?: string;
  children: React.ReactNode;
};

const Tag = ({ type = 'black', className = '', children }: ITagProps) => {
  const typeClasses = {
    pink: 'bg-merino',
    red: 'bg-mandy text-overlay-white-100',
    black: 'bg-overlay-black-60 text-overlay-white-100',
    white: 'bg-overlay-white-100 text-overlay-black-80',
  };

  const tagClass = `text-RedHatMono text-web-button md:text-mobile-button py-4 px-12 rounded-8 ${typeClasses[type]} ${className}`;
  return <span className={tagClass}>{children}</span>;
};

export default Tag;

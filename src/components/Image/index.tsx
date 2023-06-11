const Image = ({ image }: any) => {
  return (
    <img
      src={image}
      alt={image}
      className="object-cover object-center w-full h-full rounded-2xl"
    />
  );
};

export default Image;

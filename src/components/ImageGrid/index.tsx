import Image from "../Image";
import SlideupImage from "../SlideupImage";

const wideImage = [
  "https://images3.alphacoders.com/641/641193.jpg",
  "https://images7.alphacoders.com/130/1305260.jpeg",
  "https://images5.alphacoders.com/516/516663.jpg",
  "https://images5.alphacoders.com/559/559809.jpg",
  "https://images4.alphacoders.com/641/641191.jpg",
  "https://images3.alphacoders.com/574/574387.jpg",
  "https://images.alphacoders.com/534/534920.jpg",
  "https://images5.alphacoders.com/534/534917.jpg",
  "https://images6.alphacoders.com/526/526238.jpg",
  "https://images2.alphacoders.com/532/532523.jpg",
  "https://images3.alphacoders.com/873/873979.jpg",
  "https://images5.alphacoders.com/588/588375.jpg",
  "https://images2.alphacoders.com/559/559807.jpg",
  "https://images7.alphacoders.com/543/543892.jpg",
];
const posterImage = [
  "https://wallpaperaccess.com/full/2099177.jpg",
  "https://i.pinimg.com/736x/9e/9b/86/9e9b8654ca86f94efc49cdb09d5c221f.jpg",
];
const ImageGrid = () => {
  return (
    <section className="">
      <div className="">
        {/* <Image image={"https://images5.alphacoders.com/516/516663.jpg"} /> */}
        {/* <div className="grid grid-cols-3 gap-4 p-5 h-fit">
          <div className="row-span-2 bg-green-100 shadow-lg rounded-2xl">
            <SlideupImage
              imageOne={wideImage[0]}
              leftToRight={true}
              bottomToTop={false}
              imageTwo={wideImage[0]}
            />
          </div>
          <div className="text-lg font-bold text-center text-green-500 bg-green-100 shadow-lg rounded-2xl">
            <SlideupImage
              imageOne={wideImage[1]}
              leftToRight={true}
              bottomToTop={false}
              imageTwo={wideImage[1]}
            />
          </div>
          <div className="row-span-2 text-lg font-bold text-center text-green-500 bg-green-100 shadow-lg rounded-2xl">
            <SlideupImage
              imageOne={wideImage[2]}
              leftToRight={true}
              bottomToTop={false}
              imageTwo={wideImage[2]}
            />
          </div>
          <div className="text-lg font-bold text-center text-green-500 bg-green-100 shadow-lg rounded-2xl">
            <SlideupImage
              imageOne={wideImage[3]}
              leftToRight={true}
              bottomToTop={false}
              imageTwo={wideImage[3]}
            />
          </div>
          <div className="text-lg font-bold text-center text-green-500 bg-green-100 shadow-lg rounded-2xl">
            <SlideupImage
              imageOne={wideImage[4]}
              leftToRight={true}
              bottomToTop={false}
              imageTwo={wideImage[4]}
            />
          </div>
          <div className="row-span-2 text-lg font-bold text-center text-green-500 bg-green-100 shadow-lg rounded-2xl">
            <SlideupImage
              imageOne={wideImage[5]}
              leftToRight={true}
              bottomToTop={false}
              imageTwo={wideImage[5]}
            />
          </div>
          <div className="text-lg font-bold text-center text-green-500 bg-green-100 shadow-lg rounded-2xl">
            <SlideupImage
              imageOne={wideImage[6]}
              leftToRight={true}
              bottomToTop={false}
              imageTwo={wideImage[6]}
            />
          </div>
          <div className="text-lg font-bold text-center text-green-500 bg-green-100 shadow-lg rounded-2xl">
            <SlideupImage
              imageOne={wideImage[7]}
              leftToRight={true}
              bottomToTop={false}
              imageTwo={wideImage[7]}
            />
          </div>
          <div className="text-lg font-bold text-center text-green-500 bg-green-100 shadow-lg rounded-2xl">
            <SlideupImage
              imageOne={wideImage[8]}
              leftToRight={true}
              bottomToTop={false}
              imageTwo={wideImage[8]}
            />
          </div>
          <div className="text-lg font-bold text-center text-green-500 bg-green-100 shadow-lg rounded-2xl">
            <SlideupImage
              imageOne={wideImage[9]}
              leftToRight={true}
              bottomToTop={false}
              imageTwo={wideImage[9]}
            />
          </div>
          <div className="text-lg font-bold text-center text-green-500 bg-green-100 shadow-lg rounded-2xl">
            <SlideupImage
              imageOne={wideImage[10]}
              leftToRight={true}
              bottomToTop={false}
              imageTwo={wideImage[10]}
            />
          </div>
          <div className="text-lg font-bold text-center text-green-500 bg-green-100 shadow-lg rounded-2xl">
            <SlideupImage
              imageOne={wideImage[11]}
              leftToRight={true}
              bottomToTop={false}
              imageTwo={wideImage[11]}
            />
          </div>
        </div> */}
        <div className="h-screen">
          <div className="grid w-4/5 grid-cols-2 grid-rows-3 gap-4 mx-auto md:grid-cols-3 md:grid-rows-4 h-5/6">
            <div className="row-span-1 bg-indigo-100 md:row-span-2">
              <span>01</span>
            </div>
            <div className="col-span-1 bg-red-100 md:col-span-2">
              <span>02</span>
            </div>
            <div className="bg-purple-100">
              <span>03</span>
            </div>
            <div className="row-span-1 bg-violet-100 md:row-span-2 ">
              <SlideupImage
                imageOne={posterImage[1]}
                leftToRight={true}
                bottomToTop={false}
                imageTwo={posterImage[1]}
              />
            </div>
            <div className="col-span-1 row-span-1 bg-sky-100 md:row-span-2 md:col-span-2">
              <span>05</span>
            </div>
            <div className="bg-emerald-100">
              <span>06</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;

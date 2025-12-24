import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <img
          src="/featured1.jpeg"
          className="rounded-3xl object-cover"
        />
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>

        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
          perferendis debitis voluptate doloremque, voluptatum in?
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <img
              src="./featured2.jpeg"
              className="rounded-xl object-cover w-1/3 aspect-video"
            />
            <div className="flex items-center gap-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <Link className="text-blue-800 lg:text-lg">Web Design</Link>
              <span className="text-gray-500">2 days ago</span>
            </div>

            <Link
              to="/test"
              className="text-xl lg:text-3xl font-semibold lg:font-bold"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              perferendis debitis voluptate doloremque, voluptatum in?
            </Link>
          </div>
        </div>
        {/* Third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <img
              src="/featured3.jpeg"
              className="rounded-xl object-cover w-1/3 aspect-video"
            />
            <div className="flex items-center gap-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <Link className="text-blue-800 lg:text-lg">Web Design</Link>
              <span className="text-gray-500">2 days ago</span>
            </div>

            <Link
              to="/test"
              className="text-xl lg:text-3xl font-semibold lg:font-bold"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              perferendis debitis voluptate doloremque, voluptatum in?
            </Link>
          </div>
        </div>
        {/* Fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <img
              src="/featured4.jpeg"
              className="rounded-xl object-cover w-1/3 aspect-video"
            />
            <div className="flex items-center gap-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <Link className="text-blue-800 lg:text-lg">Web Design</Link>
              <span className="text-gray-500">2 days ago</span>
            </div>

            <Link
              to="/test"
              className="text-xl lg:text-3xl font-semibold lg:font-bold"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              perferendis debitis voluptate doloremque, voluptatum in?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;

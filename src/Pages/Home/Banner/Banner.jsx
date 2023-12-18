import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-10 text-5xl font-bold">Document Harmony</h1>
          <Link to={"/dashboard"}>
            <button className="btn btn-accent">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

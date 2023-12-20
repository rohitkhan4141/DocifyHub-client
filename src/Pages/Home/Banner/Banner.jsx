import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://res.cloudinary.com/ddfwus0oi/image/upload/v1703056625/my%20ly/docktype_z0s6jk.png)' }}>
      <div className=""></div>
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

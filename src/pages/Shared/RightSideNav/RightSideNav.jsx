import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-xl font-semibold ">Login With</h2>
        <button className="btn mt-5 w-full border-black">
          <FaGoogle></FaGoogle>
          <p className="font-normal normal-case">Login with Google</p>
        </button>
        <button className="btn mt-3 w-full border-black">
          <FaGithub></FaGithub>
          <p className="font-normal normal-case">Login with Github</p>
        </button>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold ">Find Us On</h2>

        <div className="mt-5">
        <a className="flex items-center border rounded-t-lg p-4" href=""><FaFacebook className="mr-4"></FaFacebook> Facebook</a>
        <a className="flex items-center border rounded-t-none p-4" href=""><FaTwitter className="mr-4"></FaTwitter> Twitter</a>
        <a className="flex items-center border rounded-t-none rounded-b-lg p-4" href=""><FaInstagram className="mr-4"></FaInstagram> Instagram</a>
        </div>
       
      </div>

      <div className="mt-5 p-4 bg-[#F3F3F3]">
        <h2 className="text-xl font-semibold ">Q-Zone</h2>

        <div className="mt-5">
           <img className="mt-4" src="../../../../assets/qZone1.png" alt="" />
           <img className="mt-4" src="../../../../assets/qZone2.png" alt="" />
           <img className="mt-4" src="../../../../assets/qZone3.png" alt="" />
        </div>
       
      </div>    </div>
  );
};

export default RightSideNav;

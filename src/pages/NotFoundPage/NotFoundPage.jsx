import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const NotFoundPages = () => {
  return <div>
     <Link to={"/"}>
     <FaArrowLeft />
                <p>To Home</p>
                </Link>
  </div>;
};
export default NotFoundPages;

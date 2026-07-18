import { IoMdMore } from "react-icons/io";
import { Link } from "react-router";

const TableTitleMoreBtn = () => {
  return (
    <Link to="/tables">
      <IoMdMore className="size-6" />
    </Link>
  );
};

export default TableTitleMoreBtn;

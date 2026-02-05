import { useNavigate } from "react-router";
import { LogOut } from "lucide-react";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="ml-2" onClick={() => navigate("/login")}>
        <LogOut />
      </button>
    </>
  );
};
export default Logout;

import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { logout, loading } = useLogout();

  return (
    <div className="mt-auto flex">
      {!loading ? (
        <button className="flex" onClick={logout}>
          <BiLogOut className="w-6 h-6  text-white cursor-pointer" />
        </button>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;

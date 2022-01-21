import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <header className="header bg-white border-b-2 border-gray-200 py-4 px-4">
      <div className="header-content flex items-center flex-row">
        <div className="flex ml-auto mr-6">
          <a className="flex flex-row items-center">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEfYpghmFAsBg/profile-displayphoto-shrink_100_100/0/1641762811912?e=1648080000&v=beta&t=aMT-s9Rx8gAGdI6EbpDpYJn341EH0lN-JNt4FffocEU"
              className="h-10 w-10 bg-gray-200 border rounded-full"
            />
            <span className="flex flex-col ml-2">
              <span className="truncate w-30 font-semibold tracking-wide leading-none">
                {user?.email}
              </span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

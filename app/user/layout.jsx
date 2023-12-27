import Navbar from "../components/Navbar";

function UserLayout({ children }) {
  return (
    <>
      <div>
        <Navbar />

        {children}
      </div>
    </>
  );
}

export default UserLayout;

import React from "react";

const Navbar = React.memo(() => {
  return (
    <nav className="mx-auto">
      <div className="text-center select-none">내비게이션 바 만들기</div>
    </nav>
  );
});
Navbar.displayName = "Navbar";
export default Navbar;

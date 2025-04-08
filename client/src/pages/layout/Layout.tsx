import {Button} from "antd";
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <div
          style={{
            height: "6rem",
            backgroundColor: "gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <span>Все задачи</span>
          <span>Проекты</span>
          <Button>Создать задачу</Button>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;

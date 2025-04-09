import { Button } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { CreateForm } from "../../components/create-form/CreateForm.tsx";

function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <div
          style={{
            height: "2.25rem",
            backgroundColor: "gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Link to={"/issues"}>Все задачи</Link>
          <Link to={"/boards"}>Проекты</Link>
          <Button onClick={showModal}>Создать задачу</Button>
        </div>
      </header>

      <CreateForm isModalOpen={isModalOpen} onCancel={handleCancel} />

      <Outlet />
    </>
  );
}

export default Layout;

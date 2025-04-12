import { Button } from "antd";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { CreateForm } from "../../components/create-form/CreateForm.tsx";
import { HeaderLink, LayoutHeaderWrapper } from "./layout.styled.ts";

//Общий для всех страниц Layout
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
        <LayoutHeaderWrapper>
          <HeaderLink to={"/issues"}>Все задачи</HeaderLink>
          <HeaderLink to={"/boards"}>Проекты</HeaderLink>
          <Button onClick={showModal}>Создать задачу</Button>
        </LayoutHeaderWrapper>
      </header>
      <CreateForm isModalOpen={isModalOpen} onCancel={handleCancel} />
      <Outlet />
    </>
  );
}

export default Layout;

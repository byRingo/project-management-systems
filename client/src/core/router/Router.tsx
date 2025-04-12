import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../../pages/layout/Layout.tsx";
import { BoardsPage } from "../../pages/boards-page/BoardsPage.tsx";
import { BoardPage } from "../../pages/board-page/BoardPage.tsx";
import { IssuesPage } from "../../pages/issues-page/IssuesPage.tsx";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/boards" replace />} />
        <Route index path="/boards" element={<BoardsPage />} />
        <Route path="/boards/:boardId" element={<BoardPage />} />
        <Route path="/issues" element={<IssuesPage />} />
      </Route>
      <Route path="*" element={<div>404 Page Not Found</div>} />
    </Routes>
  );
};

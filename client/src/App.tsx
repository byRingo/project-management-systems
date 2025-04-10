import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BoardsPage } from "./pages/boards-page/BoardsPage.tsx";
import { IssuesPage } from "./pages/issues-page/IssuesPage.tsx";
import { BoardPage } from "./pages/board-page/BoardPage.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/boards" replace />} />
          <Route index path="/boards" element={<BoardsPage />} />
          <Route path="/boards/:boardId" element={<BoardPage />} />
          <Route path="/issues" element={<IssuesPage />} />
        </Route>
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

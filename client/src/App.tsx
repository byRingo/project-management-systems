import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/boards" element={<div>boards</div>} />
          <Route path="/boards/:boardId" element={<div>board with id</div>} />
          <Route path="/issues" element={<div>123</div>} />
        </Route>
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

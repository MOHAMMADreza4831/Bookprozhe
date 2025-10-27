import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routesindex";
import ThemeLayout from "./providers/themeProvider.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeLayout>
        <RouterProvider router={router} />
      </ThemeLayout>
    </QueryClientProvider>
  );
}

export default App;

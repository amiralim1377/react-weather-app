import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./AppLayout/AppLayout";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Provider store={store}>
          <AppLayout />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;

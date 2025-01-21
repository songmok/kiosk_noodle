import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { Suspense } from "react";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/Common/Error/Error";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import Payment from "./pages/Payment/Payment";
import MainMenu from "./pages/MainMenu/MainMenu";
import Options from "./pages/Options/Options";
import Footer from "./pages/Footer/Footer";
import Modal from "./pages/Modal/Modal";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div className="relative w-[1080px] h-[1440px] fullscreen">
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
              <Suspense
                fallback={<div className="text-center p-4">Loading...</div>}
              >
                <Router>
                  <div className="flex-1">
                    <Routes>
                      <Route path="*" element={<NotFound />} />
                      <Route path="/" element={<Home />} />
                      <Route path="/mainMenu/:mainId" element={<MainMenu />} />
                      <Route
                        path="/mainMenu/:mainId/options/:optionsId"
                        element={<Options />}
                      />
                      <Route path="/payment" element={<Payment />} />
                      <Route path="/admin" element={<Admin />} />
                    </Routes>
                  </div>
                  <Modal />
                  <Footer />
                </Router>
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </QueryClientProvider>
    </div>
  );
};

export default App;

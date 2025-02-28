import { lazy, Suspense } from "react";


const Loader = lazy(() => import("./components/base/Loader"));
const Toaster = lazy(() => import("react-hot-toast").then((module) => ({ default: module.Toaster })));
const Layout = lazy(() => import("./components/layout"));
const Page = lazy(() => import("./page"));

function App() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen"><Loader fullScreen={true} /></div>}>
      <Layout>
        <Page />
        <Suspense fallback={null}>
          <Toaster />
        </Suspense>
      </Layout>
    </Suspense>
  );
}

export default App;

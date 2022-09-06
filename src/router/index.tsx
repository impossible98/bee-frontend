// import third-party modules
import React, { lazy, type ReactNode, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Favourite = lazy(() => import('@/pages/Favourite'));
const Version = lazy(() => import('@/pages/Version'));

const lazyLoad = (children: ReactNode) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      {children}
    </Suspense>
  );
};

function Router() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={lazyLoad(<Favourite />)} />
        <Route path='version' element={lazyLoad(<Version />)} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default Router;

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Message from './components/Message';

const router = createBrowserRouter([{ path: '/', element: <Message /> }]);

const App = () => (
  <RouterProvider router={router}>
    <Message />
  </RouterProvider>
);

export default App;

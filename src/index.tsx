import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/global';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <>
    <Global styles={globalStyles} />
    <RouterProvider router={router} />
  </>
);

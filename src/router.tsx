import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import Calculator from './routes/calculator';
import MaterialsCalculator from './routes/materials-calculator';
import NumberCalculator from './routes/number-calculator';
import User from './routes/user';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'calculator',
        element: <Calculator />,
        children: [
          {
            path: 'materials',
            element: <MaterialsCalculator />,
          },
          {
            path: 'number',
            element: <NumberCalculator />,
          },
        ],
      },
      {
        path: 'user',
        element: <User />,
      },
    ],
  },
]);

export default router;

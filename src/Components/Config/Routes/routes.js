import { lazy } from 'react';

const Home = lazy(() => import('../../Pages/Home/index'));

export default [
  {
    path: '/',
    name: 'Listado Seguros - BiceVida',
    component: Home,
    exact: true,
  },
];

import HomePage from '@containers/HomePage';

const router  = [
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path: '/collections',
    element: <h2>collections</h2>,
  },
  {
    path: '/men',
    element: <h2>men</h2>,
  },
  {
    path: '/women',
    element: <h2>women</h2>,
  },
  {
    path: '/about',
    element: <h2>about</h2>,
  },
  {
    path: '/contact',
    element: <h2>contact</h2>,
  },
];

export default router;

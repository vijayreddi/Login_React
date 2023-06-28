// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import Login from '../modules/login/Login';

export const router = [
    {
      path:'/',
      element:<Login/>
    },
    { path: '*', element:'' }

]

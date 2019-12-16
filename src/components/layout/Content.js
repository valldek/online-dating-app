import React from 'react';

import { Sidebar } from './Sidebar';
import { Task } from '../Tasks';

export const Content = () => (
  <section className="content">
    <Sidebar />
    <Task />
  </section>
)
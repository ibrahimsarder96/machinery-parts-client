import React from 'react';

const Blogs = () => {
  return (
    <div className='text-black mx-10 mt-12 h-screen'>
      <h1 className='text-xl'>1. How will you improve the performance of a React Application?</h1>
      <h1>1. Keeping component state local where necessary.</h1>
      <h1>2. Memoizing React components to prevent unnecessary re-renders.</h1>
      <h1>3. Code-splitting in React using dynamic import()</h1>
      <h1>4. Windowing or list virtualization in React.</h1>
      <h1>5. Lazy loading images in React.</h1>
      <h1 className='text-xl mt-3'>2. What are the different ways to manage a state in a React application?</h1>
      <h2>There are four main types of state you need to properly manage in your React apps:
      </h2>
      <h2>1. Local state.</h2>
      <h2>2. Global state.</h2>
      <h2>3. Server state.</h2>
      <h2>4. URL state.</h2>
      <h1 className='text-xl mt-3'>3. How does prototypical inheritance work?</h1>
      <h2>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.</h2>
      <h1 className='text-xl mt-3'>4. Why you do not set the state directly in React?</h1>
      <h2>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</h2>
      <h1 className='text-xl mt-3'>5. What is a unit test? Why should write unit tests?</h1>
      <h2>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</h2>
    </div>
  );
};

export default Blogs;
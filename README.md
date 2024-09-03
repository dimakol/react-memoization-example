# Memoization

Memoization in React is a technique used to optimize the performance of functional components by caching the results of expensive computations or function calls.  
It's particularly useful when dealing with computationally intensive or frequently called functions with the same input values, as it helps avoid redundant calculations and improves the overall efficiency of the application.

In React, there are three techniques for memoization: **React.memo(), useMemo(), and useCallback().**  
Let's delve into the details for each:

## How to use React.memo()

This higher-order component wraps purely functional components to prevent re-rendering if the received props remain unchanged.

By using React.memo(), the rendering result is cached based on props. If the props haven't changed since the last render, React reuses the previously rendered result instead of redoing the rendering process. This saves time and resources

## How to use useMemo()

The useMemo() hook optimizes performance by memoizing the result of a function call or an expensive computation. It caches the result and recalculates it only when the input values change.

## How to use useCallback()

The useCallback() hook in React is used to memoize a function instead of memoizing the function result. It is particularly useful when passing events as props to child components to prevent unnecessary re-renders.

useCallback() memoizes the function, ensuring it remains the same across re-renders as long as the dependencies haven't changed.

This is especially beneficial when passing functions as props to child components, preventing unnecessary re-renders. It is often used with React.memo() to ensure child components do not re-render when unnecessary.

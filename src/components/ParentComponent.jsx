import { useState, useMemo, useCallback } from "react";
import ChildComponent from "./ChildComponent";

/**
 * In JavaScript, objects are compared by reference, not by value.
 * When the parent component re-renders due to a state change,
 * it might create a new object (even if the content is the same).
 * This new object has a different reference,
 * so React sees it as a new prop and re-renders the child component
 * because the object passed as prop to ChildComponent (even when React.memo wraps the ChildComponent).
 * If the object doesn't need to change, create it outside of the component or use useMemo to memoize it.
 */
const post = { title: "Hello World", content: "Welcome to my blog!" };

/**
 * The ParentComponent is responsible for managing a state variables named count and input.
 * It introduces a function called incrementCount, which handles the incrementation of the count.
 * It also has a function called setInputValue that updates the input state.
 * It has an expensiveComputation function that dependent on count state.
 */
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // The function simulates a resource-intensive operation, like squaring a number
  const expensiveComputation = (num) => {
    let i = 0;
    while (i < 1000000000) i++;
    return num * num;
  };

  /**
   * The useMemo hook is utilized to cache the result of this computation.
   * The memoized value, stored in memoizedValue, is only recalculated when the count state changes,
   * as count is specified as a dependency in the useMemo dependency array.
   * Consequently, clicking the Increase Count button increments the count state,
   * triggering a recalculation of the memoized value.
   */
  const memoizedValue = useMemo(() => expensiveComputation(count), [count]);

  // Define a function that increments the count state
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Memoize the incrementCount function using useCallback
  const memoizedIncrement = useCallback(incrementCount, [count]);

  // Define a function that updates the input state
  const setInputValue = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Square: {memoizedValue}</p>
      <input type="text" onChange={setInputValue} />
      <p>Input: {input}</p>
      <ChildComponent onIncrement={memoizedIncrement} post={post} />
    </div>
  );
};

export default ParentComponent;

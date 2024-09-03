import React from "react";
import PropTypes from "prop-types";

/**
 * The ChildComponent is a component nested within the parent.
 * It receives the memoized onIncrement function from the parent as a prop, and the post object.
 * To optimize performance and prevent unnecessary re-renders when the props remain constant,
 * the ChildComponent is wrapped with React.memo().
 */
const ChildComponent = ({ onIncrement, post }) => {
  console.log("Child component rendered");
  return (
    <div>
      <button onClick={onIncrement}>Increment Count</button>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

ChildComponent.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

export default React.memo(ChildComponent);

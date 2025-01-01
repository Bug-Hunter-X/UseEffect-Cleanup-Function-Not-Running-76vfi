# React useEffect Cleanup Function Not Running

This repository demonstrates a common bug in React's `useEffect` hook where the cleanup function is not called when expected.  The issue is related to how cleanup functions behave with respect to component unmounting and re-renders.

The `bug.js` file contains a component with an `useEffect` hook that includes a cleanup function.  This cleanup function should log a message to the console when the component unmounts or when the effect is replaced by another effect. However, the expected console logs do not appear.

The `bugSolution.js` file provides a corrected version that addresses the problem, ensuring that the cleanup function is executed appropriately.

## Reproducing the Bug

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs.  The cleanup function's log message will be missing in the original file, but will appear after the fix.
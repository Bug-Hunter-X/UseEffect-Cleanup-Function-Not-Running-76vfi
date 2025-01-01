```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    console.log('Effect ran');
    return () => {
      console.log('Cleanup function ran');
    };
  }, [isMounted]);

  useEffect(() => {
    let interval;
    if (isMounted) {
      interval = setInterval(() => {
        setCount(c => c + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      setIsMounted(false);
    };
  }, [isMounted]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```
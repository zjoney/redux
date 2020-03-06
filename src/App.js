import React from 'react';

const App = ({ onIncrement, onDecrement, onIncrementAsync, value }) => <div>
<button onClick={onIncrement}>增加</button>
<button onClick={onDecrement}>减少</button>
<button onClick={onIncrementAsync}>异步增加</button>
当前的：{value}
</div>

export default App;

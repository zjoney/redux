# Redux简介

先来po一下redux官网地址，如下：
redux官网：https://redux.js.org/introduction/getting-started

如官网中所说的：Redux is a predictable state container for JavaScript apps.
Redux是一个用于JavaScript应用的可预测状态容器。


# Redux模型

组成部分： action 、reducer、store

## action:

View的展示是根据State数据而来的，想要View变化，只能改变State（存在store里），想要修改State就必须发出一个action通知，store接收到通知后处理state，从而改变View。

Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置，如下：

```javascript
const action = {
 type: 'ADD_TODO',
 payload: 'Learn Redux'
};
```
# reducer：

Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。

纯函数是函数式编程的概念，必须遵守以下一些约束，比如：
①不得改写参数
②不能调用系统 I/O 的API
③不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果
```javascript
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
};
```
# store：

store就是把action和reducer联系到一起的对象，store本质上是一个状态树，保存了所有对象的状态。任何UI组件都可以直接从store访问特定对象的状态，其具有dispatch，subscribe，getState方法

```javascript
import { createStore } from 'redux';
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
};
let store = createStore(reducer);
export default store;
```

## 1.store.dispatch()

store.dispatch()是 View 发出 Action 的唯一方法，这就需要在View中引入store然后调用dispatch派发Action，dispatch一调用就会调用reducer来改变state从而改变View。一般写法如下：

```javascript
store.dispatch({type: "INCREMENT"})
```

## 2.store.subscribe()

Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。

```javascript
import { createStore } from 'redux';
const store = createStore(reducer);

store.subscribe(listener);
```


In the project directory, you can run:

### `yarn start`
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

In the project directory, you can run:

### `yarn start`
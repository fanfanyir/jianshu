import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
    return <div>正在加载</div>
  }
});

// export default class App extends React.Component {
//   render(){
//     return <LoadableComponent/>;
//   }
// }

//无状态组件
export default () => <LoadableComponent/>
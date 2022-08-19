// src/index.js 是js的入口文件
// 引入ReactDOM
import ReactDOM from 'react-dom/client'

// 创建JSX
const App = <div> 
	<h1>这是一个react项目</h1>
	<p>react项目!</p>
</div>

//获取一个根容器
const root = ReactDOM.createRoot(document.getElementById('root'))
//将App渲染进root
root.render(App)
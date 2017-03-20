
'use strict';
import React from 'react';
import ReactDom from 'react-dom';

//引入样式文件
import './styles/app.scss';



//引入组件
import GalleryByReactApp from './components/App.js';


//最终渲染
ReactDom.render((
 		<div>
			<GalleryByReactApp />
		</div>

), document.getElementById('app'));


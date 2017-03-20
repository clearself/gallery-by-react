'use strict';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, browserHistory, Link, useRouterHistory} from 'react-router';


/*
三种history管理
1、hashHistory（react默认），带有hash值和随机字符串?_k=xxxxx /#/user/haishanh?_k=adseis
2、browserHistory 以文件路径方式显示 /user/haishanh
3、useRouterHistory 去掉hashHistory随机字符串?_k=xxxxx
*/

// 去掉hashHistory随机字符串?_k=xxxxx
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

//获取图相关的信息，将图片信息转化成路径
import imageDatas from './imageData.js';

var imageData = (
    function getImageURl(imageDataArr){
        for(var i=0,j=imageDataArr.length;i<j;i++){
          var singleImageData = imageDataArr[i];
          singleImageData.imageUrl ='../images/'+singleImageData.fileName;
          imageDataArr[i] = singleImageData;
        }
        return imageDataArr;
      }
  )(imageDatas);

var ImgFigure = React.createClass({
 render(){
        return (
          <figure>
               <img/>
               <figcaption>
                <h2></h2>
               </figcaption>
          </figure>
      )
    }
})

var GalleryByReactApp = React.createClass({
 render(){
        return (
          <section className="stage">
                <section className="img-sec">
                
                </section>
                <nav className="controller-nav">
              
                </nav>
          </section>
      )
    }
})
export{ GalleryByReactApp as default } 







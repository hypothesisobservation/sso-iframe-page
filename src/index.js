import * as webpackNumbers from 'webpackNumbers';
var input = document.getElementsByTagName('input')[0];
var span = document.getElementsByTagName('span')[0];
var btn = document.getElementsByTagName('button')[0];
var btn1 = document.getElementsByTagName('button')[1];
var parentWin = window.parent;
webpackNumbers.attachEventIframe(parentWin,input,span,btn,btn1);//webpack es module
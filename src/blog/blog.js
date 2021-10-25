import articles from "../article_route";
import "../blog/blog.less";
import Ellipsis from "../../assets/utils/utils";

// import Markdown from "../../assets/js/text";

// 1.默认赋值
// 2.一个方法只能做一个功能，解耦；
// 3.方法的入参必传项参数放前面，非必填参数靠后；

// substr和substring，推荐用substring
String.prototype.ellipsis = function (num) {
  var str = this;
  if (this.length > num) {
    let res = this.substring(0, num);
    return res + " ...";
  } else {
    return str;
  }
};

// 用三元运算符写分割
// function ellipsis(str, size) {
//   return str.length > size ? str.substring(0, size) + "..." : str;
// }

// 数据中的id是标识，通常用来和服务端交互，不是指向客户端；
// 用数据驱动页面，不能用页面状态来修改js逻辑；
// 先克隆元素=》给克隆元素修改title。content
// DOM.remove方法虽然可以移除页面中的元素，但是他不让变量的值消失；

var size = 125;
var m1 = document.querySelector(".main-but");
var m2 = m1.querySelector(".main-tent1");
m2.remove();

articles.forEach((items) => {
  var cloneNode = m2.cloneNode(true);
  cloneNode.querySelector(".transform").innerHTML = items.article;
  m1.appendChild(cloneNode);
});

var title = document.querySelectorAll(".title");
title.forEach((element) => {
  console.log(element);
  element.onclick = function () {
    window.location.href = "flig.html?id=" + this.dataset.id;
  };
});

var text = document.querySelectorAll(".text1");
text.forEach((element) => {
  let ellipsis = new Ellipsis({
    el: element,
    textCount: 120,
    findAllButtonText: " >>查看全文",
    showFindAllButton: true,
  });

  ellipsis.exec();
});
// var str = "hello word";
// var reg = /\n/; //正则：是用来匹配字符串的；只能匹配字符串
// 但是，有一些特殊字符，是无法匹配的；如果想要能识别需要在里边的前边加一个/\/反斜杠
// 特殊字符：/ \ () [] {} \n  +  * 、
// \n 匹配回车
// \s 匹配空格
// g global
//  eg: let res = str.replace(/l/g, "<br>");

// 获取到元素中自定义属性为 data-()的值;
// 如果 括号中 写id  那么就是this.dataset.id;
// 如果 括号中 写abc 那么就是this.dataset.abc;
// console.log(this.dataset.id);
// console.log(this.dataset.abc);
// console.log(this.getAttribute("data-id")); //如果考虑兼容性要用这一步
// document.querySelector("h1").onclick = function () {
//   window.location.href = "flig.html?id=" + this.dataset.id;
// };

// 网页快捷键
// ctrl + L;地址栏
// ctrl + T;创建一个新页
// ctrl + W;删除新打开的页
// 软件和页面之间切换：win + D;
// 打开文件夹 ：win+E
// 历史上一级页面;ctrl + shift + T;

// var params = {
//   type: "1",
//   id: 1,
//   name: "xiaoming",
// };
//   get(key) {
//     var empty = "";
//     this.url = this.url.split("?");
//     this.url.forEach((item) => {
//       if (item.indexOf(key) > -1) {
//         // empty = item.substring(item.indexOf("=") + 1, item.length);
//       }
//     });
//     return empty;
//   }

// var empty = "";
// for (const key in this.url) {
//   empty += key + "=" + this.url[key] + "&";
// }
// empty = empty.substr(0, empty.length - 1);

// return empty;

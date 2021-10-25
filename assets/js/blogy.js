import { Translate, Animate, Opicity } from "../js/target";
// 作业一：
// var a = new Animate({
//   el: document.querySelector(".ospan"),
//   model: new Translate(),
// });
// a.add();
// var b = new Animat({
//   el: document.querySelector(".ospan"),
//   model: new Opicity(),
// });

// 作业二：
// let animate = new Animate({
//   el: document.querySelector(".ospan"),
//   type: "translate",
// });
// animate.load();

// 作业三：
// Animate.create({
//   type: "translate",
// }).mount(document.querySelector(".ospan"));

// js中万物皆对象
// 对象就有key和value；
// 如果value是属性，这个key就叫静态属性
// 如果value是方法，这个key就叫静态方法

// 作业四：
//  use方法中应该接收一个 Translate.install的静态方法；如果没有静态方法，那么直接执行这个方法；
//  注意：是直接执行这个方法，而不是 new一个构造函数；
// Animate.create().use(Translate).mount(document.querySelector(".ospan"));

//作业五：

let animate = Animate.create()
  .use(Translate)
  .mount(document.querySelector(".ospan"));

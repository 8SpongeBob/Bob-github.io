import Ani from "../../assets/js/Ani";
var ani = new Ani({
  targets: [
    {
      el: document.querySelector(".box1"),
      animationClassName: "change",
    },
    {
      el: document.querySelector(".box2"),
      animationClassName: "change",
    },
    {
      el: document.querySelector(".box3"),
      animationClassName: "change",
    },
    {
      el: document.querySelector(".box4"),
      animationClassName: "change",
    },
    {
      el: document.querySelector(".box5"),
      animationClassName: "change",
    },
  ],
  count: 4,
  reverse: false, //true是执行，false是不执行; 或者写成reverse：[2];让他的第二次倒着执行
});

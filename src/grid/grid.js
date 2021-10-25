// 作业:封装Ellipsis类
/**
//  * @description 截取字符串,超出...
//  * @param el: 元素
//  * @param textCount : 字符串截取长度 number类型;
//  * @param findAllButtonText: 非必填项,默认为'查看全部'
//  * @param showFindAllButton :非必填项,是否显示'查看全部'按钮,默认为false
//  * **/

// class Ellipsis {
//   constructor(props) {
//     this.el = props.el;
//     this.text = this.el.innerHTML;
//     this.textCount = props.textCount;
//     this.textContent = props.textContent;
//     this.findAllButtonText = props.findAllButtonText || "查看所有";
//     // this.ellipsisButtonText = props.ellipsisButtonText || "收起";
//     this.showFindAllButton = props.showFindAllButton || false;
//     this.flag = true; //判断是否显示查看全部按钮的显示状态
//   }

//   exec() {
//     this.addButton();
//     this.el.innerHTML = this.fromat(this.text, this.textCount);
//   }
//   addButton() {
//     var a = document.createElement("div");
//     a.innerHTML = this.findAllButtonText;
//     // a.style.color = "blue";
//     // a.style.cursor = "pointer";
//     a.style.cssText = `
//       color:blue;
//       cursor:pointer;
//     `;
//     var b = document.createElement("div");
//     b.innerHTML = "<<收回";
//     b.style.color = "red";
//     b.style.cursor = "pointer";
//     b.style.display = "none";
//     var _this = this;
//     a.addEventListener("click", function () {
//       a.style.display = "none";
//       b.style.display = "inline-block";
//       // _this.flag = !_this.flag;
//       // this.textContent = _this.buttonText;
//       _this.el.childNodes[0].textContent = _this.text;
//     });
//     b.addEventListener("click", function () {
//       a.style.display = "inline-block";
//       b.style.display = "none";
//       _this.el.childNodes[0].textContent = _this.fromat(
//         _this.text,
//         _this.textCount
//       );
//     });
//     this.el.parentNode.appendChild(a, this.el.childNodes[0]);
//     this.el.parentNode.appendChild(b, this.el.childNodes[0]);
//   }

//   fromat(str, num) {
//     return str.length > num ? str.substring(0, num) + "..." : str;
//   }
// }

let ellipsis = new Ellipsis({
  el: document.querySelector(".list"),
  textCount: 30,
  findAllButtonText: ">>查看所有",
  showFindAllButton: true,
});

ellipsis.exec();

var json = {
  falg: true,
  get name() {
    return this.flag ? "xiaoming" : "xiaohong";
  },
};
// 数据劫持

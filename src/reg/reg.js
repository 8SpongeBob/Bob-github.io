class Markdown {
  constructor(props) {
    this.props = props;
  }
  parseHtml() {
    var htmlarr = [];
    let res = this.props.el
      .match(/(#+\s*)|\S+|\n+/g)
      .join("")
      .split("\n");
    // 箭头函数和普通函数的使用规则
    res.forEach((item) => {
      if (item.length) {
        let arr = item.split(" ");
        let element = document.createElement(`h` + arr[0].length);
        element.innerText = arr[1];
        htmlarr.push(element);
        // document.querySelector("body").appendChild(element);
      }
    });
    return htmlarr;
  }
}

//作业一：
let md = new Markdown({
  el: document.querySelector("template").content.querySelector("article")
    .innerText,
});
//输出html
let res = md.parseHtml();

// 特殊字符：/ \ () [] {} \n  +  * 、
// () 代表分组
// + 代表一个或多个
// \s 代表空格
// *   代表0个或者多个
// \S  反斜杠加大写字母代表非;
// \d  代表数字    \D 就代表非数字
// \w  代表字母数字下划线   \W 就代表非字母数字下划线

// march方法是匹配所有符合正则表达式的语句，把匹配到的值放到数组中
// var s = `# 黄桃`;
// let res = s.match(/(#+\s*)|\S+|\n+/g);
// console.log(res);

//作业二：
var deptData = [
  {
    deptName: "某某公司",
    type: 2,
  },
  {
    deptName: "子公司",
    type: 4,
  },
  {
    deptName: "子子部门",
    type: 5,
  },
];
var a = "2->4，5";
var res1 = format(); // 某某公司->子公司，子子部门
console.log(res1);
function format() {
  return a.replace(/\d+/g, function (item) {
    return deptData.filter((data) => {
      return data.type == item;
    })[0].deptName;
  });
}

// 作业三：
// username是一个变量  用正则匹配到 username
var text = "{{ username }}";
// 方法一：
console.log(text.replace(/\{\{\s*(\S+)\s*\}\}/, "$1"));
// 方法二：
// var a = text.match(/(?<=\{\{\s*)\S+(?=\s*\}\})/, function (item) {
//   return item;
// });
// console.log(a);
// 方法三：
// var a = /(?<=\{\{\s*)\S+(?=\s*\}\})/.exec(text)[0];
// console.log(a);

// 断言：  断：是判断；   言：是说；
// 先行断言：
// hello(?=world)   'helloworld'  可以匹配到hello，但不包含world；
// hello(?=world)   'helloabc'    这样前后不一样的话就什么也匹配不到
// 我判断，hello后跟的是world 如果不是，那匹配不成功；

// 后行断言：
// (?<=hello)world
// 我判断world前面是不是hello，如果是，那我返回world；

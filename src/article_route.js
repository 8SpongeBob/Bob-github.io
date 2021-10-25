import article1 from "./article/1.html";
import article2 from "./article/2.html";
import article3 from "./article/3.html";
import article4 from "./article/4.html";
import article5 from "./article/5.html";

function HTMLParse(article) {
  var div = document.createElement("div");
  div.innerHTML = article;
  var a = "";
  for (let i = 0; i < div.childNodes[0].content.children.length; i++) {
    a += div.childNodes[0].content.children[i].outerHTML;
  }
  return a;
}
let articel1 = HTMLParse(article1);
let articel2 = HTMLParse(article2);
let articel3 = HTMLParse(article3);
let articel4 = HTMLParse(article4);
let articel5 = HTMLParse(article5);
export default [
  {
    id: 1,
    // title: "如何看待知乎上的男拳",
    article: articel1,
  },
  {
    id: 2,
    // title: "如何看待知乎上的男拳",
    article: articel2,
  },
  {
    id: 3,
    // title: "如何看待知乎上的男拳",
    article: articel3,
  },
  {
    id: 4,
    // title: "如何看待知乎上的男拳",
    article: articel4,
  },
  {
    id: 5,
    // title: "如何看待知乎上的男拳",
    article: articel5,
  },
];

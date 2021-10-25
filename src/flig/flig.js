import Markdown from "../../assets/js/text";

import article from "../article_route";

let connect = window.location.href;
// console.log(connect);

class Url {
  constructor(props) {
    this.url = props;
  }
  get() {
    var empty = "";
    empty = this.url.split("?");
    empty.forEach((item) => {
      //   console.log(item);
      if (item.indexOf("=")) {
        let mm = item.split("=");
        empty = mm[1];
      }
    });
    return empty;
  }
  parem() {
    var el = "";
    for (let i = 0; i < article.length; i++) {
      if (this.get() == article[i].id) {
        let md = new Markdown(article[i].article);
        let res = md.parse();
        el = res;
        break;
      }
    }
    return el;
  }
}

var url2 = new Url(connect);
document.querySelector(".text").innerHTML = url2.parem();

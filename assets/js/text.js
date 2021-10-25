export default class Markdown {
  static TITLE_REG = /(#+)\s+([^\n]+)/;
  constructor(text) {
    this.text = text;
  }
  parse() {
    return this.text.replace(/.+/g, (item) => {
      if (Markdown.isTitle(item)) {
        return this.parseTitle(item);
      } else {
        return this.parseParagraph(item);
      }
    });
  }
  parseParagraph(text) {
    return text.trim().length ? `<p>${text.trim()}</p>` : "";
  }
  parseTitle(text) {
    return text.replace(Markdown.TITLE_REG, function (item) {
      let n = RegExp.$1.length > 6 ? 6 : RegExp.$1.length; // 1-6个#号；
      let textConent = RegExp.$2;
      return `<h${n}>${textConent}</h${n}>`;
    });
  }
  static isTitle(val) {
    return Markdown.TITLE_REG.test(val);
  }
}

// var el = document.querySelector("article");
// let textContent = el.textContent;
// // console.log(textContent)
// let md = new Markdown(el.textContent);
// let res = md.parse();
// el.innerHTML = res;

// match方法是匹配所有符合正则表达式的语句，把匹配到的值放到数组中；
// let res = s.match(/(#+\s*)|\S+|\n/g);
// console.log(res);

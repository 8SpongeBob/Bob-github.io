import webpackConfig from "../../config/webpack.config.js";

class Webpack {
  constructor(prots) {
    this.prots = prots;
  }
  compile() {
    let { entry, output } = this.prots;
    if (typeof entry == "object") {
      let { filename, path } = output;
      for (const key in entry) {
        let parse = parseInt(Math.random() * 8999 + 1000);
        console.log(`将${entry[key]}中的代码打包到${path}/${key}文件夹中，
        //文件名称叫${key}.${parse}.js`);
      }
    } else {
      let [dir, file] = filename.split("/");
      console.log(
        `将${entry}中的代码打包到${path}/${dir}文件夹中，文件名称叫${file}`
      );
    }
  }
}
let webpack = new Webpack(webpackConfig);
webpack.compile();
//作业： 页面输出：
// 将./src/home/index.js中的代码打包到/docs/home/文件夹中，文件名称叫index.js

// class Url {
//   constructor(props) {
//     this.url = props;
//   }
//   get(key) {
//     var empty = "";
//     this.url = this.url.split("&");
//     this.url.forEach((item) => {
//       if (item.indexOf(key) > -1) {
//         empty = item.substring(item.indexOf("=") + 1, item.length);
//       }
//     });
//     return empty;
//   }
//   parse() {
//     var empty = "";
//     for (const key in this.url) {
//       empty += key + "=" + this.url[key] + "&";
//     }
//     empty = empty.substr(0, empty.length - 1);
//     return empty;
//   }
// }

// class Url {
//   constructor(target) {
//     // target: 目标    props：参数    params  options：选项
//     this.target = target; //localhost:8080?type=2&id=1&name=xiaoming
//     // this.searchParams = this.target.split("?")[1]; //type=2&id=1&name=xiaoming
//     this.params = this.getParams(this.searchParams); //{type:2,id:1,name:xiaoming}
//   }
//   // parse() {
//   //   var res = "";
//   //   if (Url.isPlantObject(this.target)) {
//   //     for (const key in object) {
//   //     }
//   //   }
//   // }
//   get(name) {
//     return this.params[name];
//   }
//   getParams(str) {
//     var res = {};
//     str.split("&").forEach((item) => {
//       let arr = item.split("=");
//       res[arr[0]] = arr[1];
//     });
//     return res;
//   }

// }

//作业一：
// var url = new Url("localhost:8080?type=2&id=1&name=xiaoming");
// console.log(url.get("type")); // 2；
// console.log(url.get("id")); // 1；
// console.log(url.get("name")); // xiaoming;

// //作业二
// var params = {
//   type: "1",
//   id: 1,
//   name: "xiaoming",
// };
// var url2 = new Url(params);
// console.log(url2.parse()); //  type=2&id=1&name=xiaoming

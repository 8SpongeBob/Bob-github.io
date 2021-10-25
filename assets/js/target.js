import "../Ani.css";

export class Animate {
  constructor() {
    // this.targe = targe;
    this.el = Animate.el; //undefined;
    // this.type = targe.type;
  }
  // add() {
  //   this.targe.model.add(this.el);
  // }

  static create() {
    return new Animate();
  }

  use(Translate) {
    try {
      // var Translate = {
      //   install: function () {},
      // };
      // Translate.install();
      //model();
      // var model = Translate.install;
      this.model = Translate.install;
      // this.model(); == new Translate();
    } catch (e) {
      Translate();
    }
    return this;
  }

  mount(el) {
    Animate.el = el;
    // var Animate = {
    //     el:el
    // }
    this.model().exec();
  }
  static el;
}

export class Translate extends Animate {
  constructor() {
    // super方法会调用父类的constructor方法，并且把constructor中的this，指向Translate
    super();

    // console.log(this);
  }
  exec() {
    this.el.classList.add("ospan");
  }
  static install() {
    return new Translate();
  }
}

// export class Translate {
//   constructor() {}
//   // add(e) {
//   //   e.classList.add("ospan");
//   // }
//   exec(el) {
//     el.classList.add("ospan");
//   }
//   static install() {
//     return new Translate();
//   }
// }

// export class Opicity {
//   constructor() {}
//   add(e) {
//     e.classList.add("change");
//   }
// }

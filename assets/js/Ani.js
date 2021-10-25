import "../Ani.css";
export default class Ani {
  constructor(props) {
    // 执行动画的目标；
    this.targets = props.targets;
    // 剩余动画次数；
    this.count = props.count || 1;
    // 入参的集合；
    this.props = props;
    // 是否需要倒序 Array类型，eg: [2] , 使第2次动画倒序；
    this.reverse = props.reverse;
    // 执行动画方法；
    this.exec();
  }
  //判断当前是第几轮动画； currentIndex;
  get curIndex() {
    return this.props.count - this.count + 1;
  }
  //判断动画的最后一个元素是谁； 如果是倒序，那么返回数组中的第一个，如果是正序，返回数组中的最后一个元素；
  get lastTarget() {
    return this.targets[this.needReverse ? 0 : this.targets.length - 1];
  }
  //判断是否需要倒序；
  get needReverse() {
    try {
      return this.reverse === true
        ? true
        : this.reverse.includes(this.curIndex);
    } catch (e) {
      return false;
    }
  }
  // 执行动画效果；
  exec() {
    // 避免破坏原数组数据，如多次执行动画，不加slice，会造成无法多次运动；
    // slice的作用是 深拷贝；
    let targets = this.targets.slice();
    this.addEventListener(targets);
  }
  //添加兼听动画事件；
  addEventListener(targets) {
    //如果数组没有长度，那么说明动画运动完成；
    if (!targets.length) return;
    //如果是倒序，拿数组中的最后一个；如果是正序，拿数组中的第一个；
    let target = this.needReverse ? targets.pop() : targets.shift();
    console.log(target);
    // 添加动画效果；
    target.el.classList.add(target.animationClassName);
    let _this = this;
    let handleEventlist = function (e) {
      //动画执行完毕，删除class；
      e.target.classList.remove(target.animationClassName);
      // 去除元素的事件；
      target.el.removeEventListener("animationend", handleEventlist);
      // 在次执行下一个动画；
      _this.addEventListener(targets);
      // 如果动画结束，查看动画是否还需下一轮动画；
      if (e.target == _this.lastTarget.el && _this.count > 1) {
        // 剩余动画次数；
        _this.count--;
        // 需要用事件队列setTimeout，不然动画不会执行；
        setTimeout(function () {
          //进行下一次动画；
          _this.exec();
        });
      }
    };
    target.el.addEventListener("animationend", handleEventlist);
  }
}

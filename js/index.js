new Vue({
  el: '#app',
  data: {
    // 全部题目
    sumData:[],
    // 当前题目
    data:[],
    // 题目，文本
    text: null,
    // 题目，文本 index
    textIndex:null,
    // 题目总数
    sum:null,
    // 已完成题目数量
    sumAlready:null,
    // 未完成题目数量
    sumNo:null,
  },
  created() {
    // 合并数据
    this.mergeData();
    // 初始化数据，逻辑处理
    this.info();
  },
  methods: {
    // 合并数据
    mergeData() {
      var localStorage = window.localStorage;
      this.sumData = [...base, ...array, ...string, ...reg,];
      this.sum = this.sumData.length;

      if(localStorage.getItem('data')) {
        this.data = JSON.parse(localStorage.getItem('data'));
      }else{
        this.data = JSON.parse(JSON.stringify(this.sumData));
        localStorage.setItem('data',JSON.stringify(this.data));
      }
    },
    // 初始化
    info() {
      this.textIndex = this.rnd(this.data.length);
    },
    // 下一题
    reviewNext() {
      if(!(this.data && this.data.length)) {
        alert('恭喜少侠，已经完成全部题目，点击确定后，进入下一轮复习！');
        localStorage.setItem('data',JSON.stringify(this.sumData));
        this.data = JSON.parse(JSON.stringify(this.sumData));
        this.textIndex = this.rnd(this.data.length);
        return;
      };
      this.data.splice(this.textIndex,1);
      if(this.data && this.data.length > 0) {
        localStorage.setItem('data',JSON.stringify(this.data));
        this.textIndex = this.rnd(this.data.length);
      }else{
        localStorage.removeItem('data');
        this.textIndex = '完成';
      }
    },
    // 获取随机数
    rnd(m){
      return parseInt(Math.random()*m);
    }
  }
})
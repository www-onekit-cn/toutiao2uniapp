export default function(PAGE_JSON, tt_object) {
  let uni_object = {
    onLoad(query) {
      this.data = this.$data;
      if(tt_object){
        for (let key of Object.keys(tt_object)) {
          let obj = tt_object[key];
          switch (key) {
            case "data":
            case "onLoad":
            case "onUnload":
            case "onReady":
            case "onShow":
            case "onHide":
              break;
            default:
              if(typeof(obj)!=='function'){
                this.data[key] = obj
              }
              break;
          }
        }
      }
      if (tt_object && tt_object["onLoad"]) {
        tt_object["onLoad"].call(this,query );
      }
    },
    onUnload() {
      if (tt_object && tt_object["onUnload"]) {
        tt_object["onUnload"].call(this);
      }
    },
    onReady() {
      if (tt_object && tt_object["onReady"]) {
        tt_object["onReady"].call(this);
      }
    },
    onShow() {
        if (tt_object && tt_object["onShow"]) {
          tt_object["onShow"].call(this);
        }
    },
    onHide() {
        if (tt_object && tt_object["onHide"]) {
          tt_object["onHide"].call(this);
        }
    },
    methods: {
      setData(data) {
        let that = this;
        this.$nextTick(() => {
          for (let k of Object.keys(data)) {
            that[k] = data[k];
          }
        });
      },
      animate(){
        
      }
    }
  };
  if (tt_object) {
    if (tt_object.data) {
      uni_object.data = () => {
        return tt_object.data;
      };
      for (let key of Object.keys(tt_object)) {
        let obj = tt_object[key];
        switch (key) {
          case "data":
          case "onLoad":
          case "onUnload":
          case "onReady":
          case "onShow":
          case "onHide":
            break;
          default:
            if(typeof(obj)==='function'){
              uni_object.methods[key] = obj;
            }
            break;
        }
      }
    }
  }
  return uni_object;
}
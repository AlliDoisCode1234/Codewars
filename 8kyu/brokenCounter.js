// class Counter {
//     constructor() {
//       this.value = 0;
//     }
    
//     increase() {
//       this.value++;
//     };
  
//     getValue() {
//       return this.value;
//     };
  
//     reset() {
//       this.value = 0;
//     };
//   }


  function Counter() {
    this.value = 0;
    this.increase = () => this.value++;
    this.getValue = () => this.value;
    this.reset = () => this.value = 0;
  };
class Phone{
    constructor(){
      this.ring = "";
      this.screen = "";
      this.microphone = "";
      this.number = null;
      this.stranger = {
        name: "stranger",
        ring: "Di Da Di"
      };
      this.currentContact = null;
    }
    
    incomingcall(number){
      this.getContact(number);
      this.updateDisplay();
    }
    
    connect(){
      if (this.number == null){
        this.microphone = `Hello, ${this.currentContact.name}!`;
      } else {
        this.microphone = "Hello, who is speaking, please?";
      }
      this.clearDisplay();
    }
    
    hangup(){
      this.microphone = "";
      this.clearDisplay();
    }
    
    
    getContact(number){
      this.currentContact = getItemFromArrayByKeyAndValue(contacts, "number", number);
      this.number = null;
      if (typeof(this.currentContact) == "undefined"){
        this.currentContact = this.stranger;
        this.number = number;
      }
    }
    
    updateDisplay(){
      this.ring = this.currentContact.ring;
      this.screen = `Call: ${this.currentContact.name}\nNumber: ${this.number != null ? this.number : this.currentContact.number}`;
    }
    
    clearDisplay(){
      this.ring = "";
      this.screen = "";
    }
  }
  
  const getItemFromArrayByKeyAndValue = (array, key, value) => array.filter(item => item[key] == value)[0];
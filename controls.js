class Controls{
    constructor(type){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;


        switch(type){
            case "KEYS":
            this.#addKeyboardListeners(); //the # makes it  private
            break;

            case "DUMMY":
                this.forward = true;
                break;
    }
}

    #addKeyboardListeners(){

        // To change the direction when key gets pressed 
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
        }

        // To change the direction when key gets unpressed 
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
        }
    }
}
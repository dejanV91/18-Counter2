class Counter{
    constructor(item, value){
        this.number = value;
        this.increaseBtn = item.querySelector(".increase");
        this.decreaseBtn = item.querySelector(".decrease");
        this.resetBtn = item.querySelector(".reset");
        this.countNumber = item.querySelector(".value");
        this.countNumber.textContent = this.number;

        this.plus = this.increase.bind(this);
        this.minus = this.decrease.bind(this);
        this.zero = this.reset.bind(this);

        this.increaseBtn.addEventListener("click", this.plus);
        this.decreaseBtn.addEventListener("click", this.minus);
        this.resetBtn.addEventListener("click", this.zero);
    }
    increase(){
        this.number++;
        this.countNumber.textContent = this.number;
    }
    decrease(){
        this.number--;
        this.countNumber.textContent = this.number
    }
    reset(){
        this.number = 0;
        this.countNumber.textContent = this.number
    }
}

function getElement(selection){
    const element = document.querySelector(selection);
    if (element) {
        return element
    }
    throw new Error(`element "${element}" does not exist`);
}


const firstCounter = new Counter(getElement(".first-counter"), 200);
const secondCounter = new Counter(getElement(".second-counter"), 1000);

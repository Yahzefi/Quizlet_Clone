// this file contains a js class which ended up only being used a handful of times as a way to create a div which would 
// end up having many children (subcomponents)

// In hindsight, The use of only the Subcomponent class and some minor adjustments would've worked just as well without the added file


export class Component {
    constructor(element, id, className, hasStorage) {
        this.cptTagName = element;
        this.cpt_ID = id;
        this.cpt_Class = className;
        this.cptStg = hasStorage;
    };
    createContainer(){
        return new Promise((resolve, reject)=>{
            if(this.cptTagName === "div" || this.cptTagName === "section"){
                let newElement = document.createElement(this.cptTagName);
                newElement.setAttribute('id', this.cpt_ID);
                newElement.setAttribute('class', this.cpt_Class);
                resolve(newElement);
            } else {
                reject('Component Must Be A Container Element ("div" or "section")');
            }
        })
    };
    createAnimations() {
        if(this.cpt_hasStyling){
            console.log("The " + this.cptTagName.id + " has animations toggled.");
        } else {
            console.log("The " + this.cptTagName.id + " does NOT have animations toggled.")
        };
    };
};

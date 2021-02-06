export class Component {
    constructor(element, id, className, hasInLineStyling, hasStorage) {
        this.cptTagName = element;
        this.cpt_ID = id;
        this.cpt_Class = className;
        this.hasInlineStyling = hasInLineStyling;
        this.cptStg = hasStorage;
    };
    createContainer(){
        return new Promise((resolve, reject)=>{
            if(this.cptTagName === "div" || this.cptTagName === "section"){
                let newElement = document.createElement(this.cptTagName);
                newElement.setAttribute('id', this.cpt_ID);
                newElement.setAttribute('class', this.cpt_Class);
                if(this.hasInLineStyling){
                    this.insertStyling();
                };
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
    insertStyling() {
        if(this.hasInLineStyling){
            
        };
    }
};
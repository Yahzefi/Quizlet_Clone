export class Component {
    constructor(componentName, componentTierLevel, componentHasAnimations, componentHasStorage) {
        this.cptName = componentName;
        this.cptTierLVL = componentTierLevel;
        this.cptAnim = componentHasAnimations;
        this.cptStg = componentHasStorage;
    };
    createAnimations() {
        if(this.cptAnim){
            console.log("The " + this.cptName.id + " has animations toggled.");
        } else {
            console.log("The " + this.cptName.id + " does NOT have animations toggled.")
        };
    };
    attachSubCPT(child){
        return new Promise(resolve=>{
            resolve(this.cptName.appendChild(child));
        });
    };
    async attachTwoSubCPT(firstChild, secondChild){
        await this.attachSubCPT(firstChild)
        .then((data)=>{
            let selectedCPT = data;
            selectedCPT.appendChild(secondChild)
        });
    }
};

export class Subcomponent {
    constructor(type, id, className, hasInLineStyling) {
        this.type = type;
        this.id = id;
        this.className = className;
        this.hasInLineStyling = hasInLineStyling;
    }
    createElement(){
        let newElement = document.createElement(this.type);
        newElement.setAttribute('id', this.id);
        newElement.setAttribute('class', this.className);
        return newElement;
    }
    insertStyling() {
        if(this.hasInLineStyling){
            //
        } else {
            //
        }
    }
}

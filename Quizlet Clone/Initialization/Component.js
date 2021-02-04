export class Component {
    constructor(element, id, className, hasInLineStyling, hasStorage) {
        this.cptTagName = element;
        this.cpt_ID = id;
        this.cpt_Class = className;
        this.hasInlineStyling = hasInLineStyling;
        this.cptStg = hasStorage;
    };
    createContainer(){
        if(this.cptTagName === "div" || this.cptTagName === "section"){
            let newElement = document.createElement(this.cptTagName);
            newElement.setAttribute('id', this.cpt_ID);
            newElement.setAttribute('class', this.cpt_Class);
            if(this.hasInLineStyling){
                this.insertStyling();
            };
            return newElement;
        } else {
            throw new Error('Component Must Be A Container Element ("div" or "section")');
        };
    };
    createAnimations() {
        if(this.cpt_hasStyling){
            console.log("The " + this.cptTagName.id + " has animations toggled.");
        } else {
            console.log("The " + this.cptTagName.id + " does NOT have animations toggled.")
        };
    };
    attachSubCPT(child){
        return new Promise(resolve=>{
            resolve(this.cptTagName.appendChild(child));
        });
    };
    async attachTwoSubCPT(firstChild, secondChild){
        return new Promise(res=>{
            this.attachSubCPT(firstChild)
            .then((data)=>{
                let selectedCPT = data;
                res(selectedCPT.appendChild(secondChild));
            });
        })
    }
    async attachThreeSubCPT(f_Child, s_Child, t_Child){
        this.attachTwoSubCPT(f_Child, s_Child)
        .then((data)=>{
            let selectedCPT = data;
            selectedCPT.appendChild(t_Child);
        });
    }
    insertStyling() {
        if(this.hasInLineStyling){
            
        };
    }
};
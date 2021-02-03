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
};

export class Subcomponent {
    constructor(elementType, id, className, hasInLineStyling) {
        this.elementType = elementType;
        this.id = id;
        this.className = className;
        this.hasInLineStyling = hasInLineStyling;
    }
    createElement(newAttr, attrData){
        let newElement = document.createElement(this.elementType);
        newElement.setAttribute('id', this.id);
        newElement.setAttribute('class', this.className);
        if(this.hasInLineStyling){
            this.insertStyling();
        }
        if(newAttr == null || !newAttr){
            return newElement;
        } else if(newAttr && typeof attrData === "object"){
            this.addAttributes(newElement, attrData);
            return newElement;
        } else if(newAttr && typeof attrData !== "object") {
            throw new Error('Second Paramenter Must Be An Array');
        } else {
            throw new Error('Attribute Type Not Found');
        }
    }
    addAttributes(newElement, attrData){
        console.log(attrData[0].reqAttr);
        attrData.forEach((value, i)=>{
            switch(attrData[i].reqAttr){
                case "for":
                    console.log(attrData[i].reqInfo);
                    newElement.setAttribute('for', attrData[i].reqInfo);
                    if(typeof attrData[i].innerTxt === "string"){
                        newElement.textContent = attrData[i].innerTxt;
                        break;
                    } else if(attrData[i].innerTxt == null){
                        break;
                    } else {
                        throw new Error("'innerTxt' does not match type 'string'");
                    }
                case "type":
                    newElement.setAttribute('type', attrData[i].reqInfo);
                case "name":
                    newElement.setAttribute('name', attrData[i].reqInfo);
                case undefined:
                    break;
                default:
                    throw new Error('Attribute Type Not Found');
            };
            return newElement;
        })
    }
    insertStyling() {
        if(this.hasInLineStyling){
            
        };
    }
}

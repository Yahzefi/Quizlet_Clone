export class Subcomponent {
    constructor(elementType, id, className, hasInLineStyling) {
        this.elementType = elementType;
        this.id = id;
        this.className = className;
        this.hasInLineStyling = hasInLineStyling;
    }
    createElement(attrData){
        let newElement = document.createElement(this.elementType);
        newElement.setAttribute('id', this.id);
        newElement.setAttribute('class', this.className);
        if(this.hasInLineStyling){
            this.insertStyling();
        }
        if(attrData == null){
            return newElement;
        } else if(typeof attrData === "object"){
            this.addAttributes(newElement, attrData);
            return newElement;
        } else if(typeof attrData !== "object") {
            throw new Error('Paramenter Must Be An Array');
        } else {
            throw new Error('Attribute Type Not Found');
        }
    }
    addAttributes(newElement, attrData){
        attrData.forEach((value, i)=>{
            switch(attrData[i].reqAttr){
// FOR
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
// TYPE
                case "type":
                    newElement.setAttribute('type', attrData[i].reqInfo);
// NAME
                case "name":
                    newElement.setAttribute('name', attrData[i].reqInfo);
// UNDEFINED
                case undefined:
                    break;
// DEFAULT
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
export class Subcomponent {
    constructor(elementType, id, className) {
        this.elementType = elementType;
        this.id = id;
        this.className = className;
    }
    createElement(attrData){
        let newElement = document.createElement(this.elementType);
        newElement.setAttribute('id', this.id);
        newElement.setAttribute('class', this.className);
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
            switch(attrData[i].attr){
// FOR
                case "for":
                    newElement.setAttribute('for', attrData[i].content);
                    break;
// TYPE
                case "type":
                    newElement.setAttribute('type', attrData[i].content);
                    break;
// NAME
                case "name":
                    newElement.setAttribute('name', attrData[i].content);
                    break;
// HREF
                case "href":
                    newElement.setAttribute('href', attrData[i].content);
                    break;
// SRC
                case "src":
                    newElement.setAttribute('src', attrData[i].content);
                    break;
// UNDEFINED
                case undefined:
                    break;
// NO NEW ATTR W/ INNER TEXT
                case "":
                    break;
// DEFAULT
                default:
                    throw new Error('Attribute Type Not Found');
            };
            if(attrData[i].innerText && typeof attrData[i].innerText === 'string'){
                newElement.textContent = attrData[i].innerText;
            } else if(attrData[i].innerText && typeof attrData[i].innerText !== 'string'){
                throw new Error("'innerTxt' does not match type 'string'");
            }
            return newElement;
        })
    }
}

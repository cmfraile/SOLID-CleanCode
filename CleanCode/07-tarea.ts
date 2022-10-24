type HtmlType = 'input'|'select'|'textarea'|'radio';

class HtmlElement {
    constructor(
        public id:string,
        public type: HtmlType,
    ){}
}

class InputAttributes{
    constructor(
        public value: string,
        public placeholder: string,
        public id: string,
    ){}
}

class InputEvents {
    constructor(
        public value:string,
        public placeholder:string,
        public id:string
    ){}
    public getValue(){console.log('getValueMETHOD')};
    public isActive(){console.log('isActiveMETHOD')};
    public removeValue(){console.log('removeValueMETHOD')};
    public setFocus(){console.log('setFocusMETHOD')};
}

class InputElement{
    
    private htmlelement:HtmlElement;
    private inputattributes:InputAttributes;
    private inputEvents:InputEvents;

    constructor(id:string,type:HtmlType,value:string,placeholder:string){
        this.htmlelement = new HtmlElement(id,type);
        this.inputattributes = new InputAttributes(value,placeholder,id);
        this.inputEvents = new InputEvents(value,placeholder,id)
        console.log(this);
    }

    public checkInputAttributesMethods(){
        this.inputEvents.getValue()
        //...
    }

}

export const tarea07 = () => {
    const inputElementTest = new InputElement('12345','radio','valor','placeholder');
    //inputElementTest.checkInputAttributesMethods();
}


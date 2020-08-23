class CreateBrand {

    listBrand =['LEXUS','AUDI','MAYBACK','FERRARI','TOYOTA'];

    constructor() {

    }

    printBtn() {
        for (let i = 0; i < this.listBrand.length; i++) {
            const btn = document.createElement("button");
            btn.setAttribute("type", "button");
            btn.setAttribute("onclick", this.click);
            const id = 'id' + i;
            this.getId(id); 
            btn.onclick = event => {
                const text = document.getElementById(event.target.id).innerHTML;
                console.log(text);
                return text;
            };
            btn.setAttribute("id", id);
            const t = document.createTextNode(this.listBrand[i]);
            btn.appendChild(t);
            document.body.appendChild(btn);
        }
    }

    click(event) { };

    getId(id) {
        return id;
    }

}

let createBrandInst = new CreateBrand();
createBrandInst.printBtn();

module.exports = CreateBrand;
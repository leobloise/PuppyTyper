import PuppyTyper from './Model/PuppyTyper.js'

class MyTyper_Benevix_EnvTeste extends PuppyTyper {

    constructor(CSSjson, page){
        super(CSSjson, page)
    }

    async routine() {

        await this._page.goto('https://benevix.test.planium.io/web/login/')

        await this._typeInformation(this._page, this.options.selectorForUser, "vendedor0")
    
        await this._typeInformation(this._page, this.options.selectForPassword, "1234")

        await this._page.click(this.options.loginButton);

        await this._page.waitForTimeout(2000)

        await this._clickInComponent(this._page, this.options.venderButton);

        await this._page.waitForTimeout(10000)

        await this._shcemaToClick(this._page, this.options.forward);

        await this._normalClick(this._page, this.options.adesaoButton);
        
        await this._normalClick(this._page, this.options.buttonToContinue);

        await this._select(this._page, "#col2 > div.ng-scope > div > div > form > div:nth-child(1) > select", "18")

        await this._clickInComponent(this._page, this.options.blueButton);

        await this._select(this._page, "#col2 > div.ng-scope > div > div > form > select:nth-child(2)", "14")
        
        await this._clickInComponent(this._page, this.options.blueButton);

        await this._normalClick(this._page, "#col2 > div.ng-scope > div > div:nth-child(1) > div > div.ng-scope > svg");
        
        await this._clickInComponent(this._page, this.options.buttonToContinue);
        
        await this._typeInformation(this._page, "#ididadet", "23")

        await this._clickInComponent(this._page, "#col2 > div.ng-scope > div > div > a.btn.btn-lg.btn-primary");
        
        await this._page.waitForTimeout(5000);
        
        await this._page.evaluate(() => document.querySelector("#col2 > div.ng-scope > div > div > div.d-inline-block.mr-2.mb-3.ng-scope button").click())
        
        await this._page.waitForTimeout(2000);
        
        await this._typeInformation(this._page, "#idcadastrocpf2", "12345678900")

        await this._typeInformation(this._page, "#campoc2", "LEONARDO CARDOSO DA S")

        await this._normalClick(this._page, "#col2 > div.ng-scope > div > div > a")
    }
}

export default MyTyper_Benevix_EnvTeste;
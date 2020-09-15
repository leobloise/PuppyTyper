import puppy from 'puppeteer'

class PuppyTyper {
    
    constructor() {

        this.options = {

            selectorForUser: '#userid',
            selectForPassword: "#conteudoid > div.container-fluid > main > div > div:nth-child(4) > div > div:nth-child(1) > form > div:nth-child(2) > div > input",
            loginButton: "#conteudoid > div.container-fluid > main > div > div:nth-child(4) > div > div:nth-child(1) > form > a",
            forward: "#col2 > div.ng-scope > div > a",
            blueButton: "#col2 > div.ng-scope > div > div > a.btn.btn-lg.btn-primary",
            buttonToContinue: "#col2 > div.ng-scope > div > a.btn.btn-lg.btn-primary"
        
        }

        this._browser = puppy.launch({headless: false});
    }

    async createProposta() {
        
        const page = await (await this._browser).newPage();

        page.on('console', (msg) => {
            let argume = msg.args();
            argume.forEach(arg => {
                console.log(arg._remoteObject.value)
            })
        })
        
        await page.setViewport({
            width: 1024,
            height: 820,
            deviceScaleFactor: 1,
          });


        await page.goto('https://benevix.dev020.planium.io/web/login/')

        await this._typeInformation(page, this.options.selectorForUser, "vendedor0")
    
        await this._typeInformation(page, this.options.selectForPassword, "1234")

        await page.click(this.options.loginButton);

        await this._clickInComponent(page, "#loginpath > div > div > div.modal-body > div:nth-child(3) > p > a");

        await this._shcemaToClick(page, this.options.forward);
        
        await this._typeInformation(page, "#simuNome", "LEONARDO")

        await this._typeInformation(page, "#simuEmail", "leonardo.bloise@planium.io");

        await this._clickInComponent(page, this.options.blueButton);

        await this._normalClick(page, "#col2 > div.ng-scope > div > div:nth-child(1) > div > div.row.justify-content-center > div > label");
        
        await this._normalClick(page, this.options.buttonToContinue);

        await page.waitForSelector("#col2 > div.ng-scope > div > div > form > div:nth-child(1) > select");
        await page.select("#col2 > div.ng-scope > div > div > form > div:nth-child(1) > select", "18");

        await this._clickInComponent(page, this.options.blueButton);
        
        await page.waitForSelector("#col2 > div.ng-scope > div > div > form > select");
        await page.select("#col2 > div.ng-scope > div > div > form > select:nth-child(2)", "16");
        await this._clickInComponent(page, this.options.blueButton);

        await this._normalClick(page, "#col2 > div.ng-scope > div > div:nth-child(1) > div > div.ng-scope > svg");
        await this._clickInComponent(page, this.options.buttonToContinue);
        await this._typeInformation(page, "#ididadet", "23")

        await this._clickInComponent(page, "#col2 > div.ng-scope > div > div > a.btn.btn-lg.btn-primary");
        await page.waitFor(2000);
        await page.evaluate(() => document.querySelector("#col2 > div.ng-scope > div > div > div.d-inline-block.mr-2.mb-3.ng-scope  button").click())
        await page.waitFor(2000);
        await this._typeInformation(page, "#idcadastrocpf2", "12345678900")
    }

    async _typeInformation(page, field, text) {
        await page.waitForSelector(field)
        await page.type(field, text, {delay: 0});
    }

    async _shcemaToClick(page, button) {
        await page.waitFor(10000);
        await page.click(button)
    }

    async _clickInComponent(page, button) {
        await page.evaluate((toClick) => {
        
            setTimeout(() => document.querySelector(toClick).click(), 1000)
            
        }, button)
    }

    async _schemaToSelect(page, select, value) {
        
        await page.evaluate((values) => {

            setTimeout(async () => {
                document.querySelector(values[0]).value = values[1]
            
            },
            6000)

        }, [select, value, gambiarra])

    }

    async _normalClick(page, field) {
        await page.waitForSelector(field);
        await page.click(field);
    }

}



export default PuppyTyper;
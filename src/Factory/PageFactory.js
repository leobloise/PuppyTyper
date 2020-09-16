class PageFactory {

    constructor(browser) {
        this._browser = browser;
        Object.freeze(this)
    }

    async getNewPage() {

        let page = await this._browser.newPage();

        await this._applyConfig(page);
        
        return page;
    }

    async _applyConfig(page) {

        await page.on("error", error => console.log(error))

        console.log('Se voce quer me usar e personalizar, extenda-me, use o super, configure e retorne a pagina')
    }
}

export default PageFactory
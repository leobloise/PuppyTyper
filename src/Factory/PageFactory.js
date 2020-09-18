class PageFactory {

    constructor(browser) {
        this._browser = browser;
    }

    async getNewPage() {

        let page = await this._browser.newPage();

        await this._applyConfig(page);
        
        return page;
    }

    async _applyConfig(page) {

        await page.on("error", error => console.log(error))

    }
}

export default PageFactory
import puppy from 'puppeteer'

class PuppyTyper {
    
    constructor(CSSJson, page) {

        this.options = CSSJson;

        this._page = page;
        
        Object.freeze(this)
    }

    async _typeInformation(page, field, text) {
        await page.waitForSelector(field)
        await page.type(field, text, {delay: 0});
    }

    async _shcemaToClick(page, button) {
        await page.waitForTimeout(8000)
        await page.click(button)
    }

    async _clickInComponent(page, button) {
        await page.evaluate((toClick) => {
        
            setTimeout(() => document.querySelector(toClick).click(), 1000)
            
        }, button)
    }

    async _normalClick(page, field) {
        await page.waitForSelector(field);
        await page.click(field);
    }

    async _select(page, select, value) {
        await page.waitForSelector(select);
        await page.select(select, value);
    }

    async routine() {
        throw new Error('devo ser modificado')
    }
}

export default PuppyTyper;


import puppy from 'puppeteer'

let defaultOptions = {
    headless: false,
    devtools: true,
    defaultViewport: {
        width: 1280,
        height: 720
    },
    timeout: 60000,
    env: process.env
}

class BrowserFactory {

    constructor(options) {
        this._options = (this._validateOptions(options))?options: defaultOptions;
    }

    _validateOptions(options) {
        
        let validOptions = [];

        for(let property in defaultOptions) {
            validOptions.push(property);
        }

        for(let property in options) {
            if(!validOptions.includes(property)) {
                return false;
            }
        }

    }

    async createBrowser() {

        let browser = await puppy.launch(this._options);
        return browser;

    }

}

export default BrowserFactory;
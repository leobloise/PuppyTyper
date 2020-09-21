import MyTyper_Benevix_EnvTeste from '../../custom/MyTyper_Benevix_EnvTeste.js'
import BrowserFactory from '../../src/Factory/BrowserFactory.js'
import MyPageFactory from '../../custom/MyPageFactory.js'
import CSSReader from '../../src/Helper/CSSReader.js'
import MyTyper_Benevix_dev020 from '../../custom/MyTyper_Benevix_dev020.js'

let messages = [];

function pushMessage(dialog) {
    return new Promise((resolve, reject) => {
        try {
            messages.push([dialog.message()])
            resolve(true)
        } catch(err) {
            reject('Não foi possível pegar a mensagem!')
        }
    })
}

class BenevixTest_estudante {

    constructor() {
        Object.freeze(this)
    }

    async test() {

        let json = await CSSReader.getCssFromJson('css.json')
        let browser = await new BrowserFactory().createBrowser();
        let pageFactory_benevix_test = new MyPageFactory(browser);
        let pageFactory_benevix_dev020 = new MyPageFactory(browser);
    
        pageFactory_benevix_test.pageEvents.on('prompt', pushMessage)
        pageFactory_benevix_dev020.pageEvents.on('prompt', pushMessage)

        let page_benevix_test =  await pageFactory_benevix_test.getNewPage();
        let page_benevix_dev020 = await pageFactory_benevix_dev020.getNewPage();
        const puppy_benevix_test = new MyTyper_Benevix_EnvTeste(json, page_benevix_test)
        const puppy_benevix_dev020 = new MyTyper_Benevix_dev020(json, page_benevix_dev020)

        await puppy_benevix_test.routine();
        await puppy_benevix_dev020.routine();

        return  await this._assert();
    
    }

    _assert() {
        return new Promise((resolve, reject) => {
           messages.forEach(message => {
               console.log('Mensagem =>', message)
           })
        })
    }

}

export {BenevixTest_estudante};
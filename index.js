import MyTyper_Benevix_EnvTeste from './src/MyTyper_Benevix_EnvTeste.js'
import BrowserFactory from './src/Factory/BrowserFactory.js'
import MyPageFactory from './src/MyPageFactory.js'
import CSSReader from './src/Helper/CSSReader.js'
import path from 'path'
import MyTyper_Benevix_dev020 from './src/MyTyper_Benevix_dev020.js'

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

async function main() {

    let json = await CSSReader.getCssFromJson(path.resolve(path.resolve(), 'src', 'Helper', 'css.json'))
    let browser = await new BrowserFactory().createBrowser();
    let pageFactory_benevix_test = new MyPageFactory(browser);
    let pageFactory_benevix_dev020 = new MyPageFactory(browser);

    pageFactory_benevix_test.pageEvents.on('alert', pushMessage)
    pageFactory_benevix_test.pageEvents.on('alert', pushMessage)

    let page_benevix_test =  await pageFactory_benevix_test.getNewPage();
    let page_benevix_dev020 = await pageFactory_benevix_dev020.getNewPage();
    const puppy_benevix_test = await new MyTyper_Benevix_EnvTeste(json, page_benevix_test)
    const puppy_benevix_dev020 = await new MyTyper_Benevix_dev020(json, page_benevix_dev020)

    await puppy_benevix_test.routine();
    await puppy_benevix_dev020.routine();

    let i = 0;

    while(messages.length !== 2) {
        
        if(i <= 2000) {
            i++
            continue;
        }
        
        break;
    }

    console.log(messages)
    console.log(messages[0][0] == messages[1][0])
}

main();



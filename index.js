import MyTyper from './src/MyTyper.js'
import BrowserFactory from './src/Factory/BrowserFactory.js'
import PageFactory from './src/Factory/PageFactory.js'
import CSSReader from './src/Helper/CSSReader.js'
import path from 'path'

async function main() {

    let json = await CSSReader.getCssFromJson(path.resolve(path.resolve(), 'src', 'Helper', 'css.json'))

    let browser = await new BrowserFactory().createBrowser();
    let page =  await new PageFactory(browser).getNewPage();
    const puppy = await new MyTyper(json, page)
    puppy.routine();
}

main();



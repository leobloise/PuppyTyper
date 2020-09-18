import PageFactory from './Factory/PageFactory.js'
import EventEmitter from 'events'

class MyPageFactory extends PageFactory {
    
    constructor(browser) {
        super(browser)
        this.pageEvents = new EventEmitter();
        Object.freeze(this)
    }

    async _applyConfig(page) {

        await super._applyConfig(page)
        
        page.on('dialog', dialog => {
            this.pageEvents.emit('alert', dialog)
        })
    }
}

export default MyPageFactory
import fs from 'fs'
import path from 'path'

class CSSReader {

    static async getCssFromJson(file) {
        
        let CSS = await fs.readFileSync(path.resolve(path.resolve(), 'json', file))

        return JSON.parse(CSS);
    
    }

}

export default CSSReader;
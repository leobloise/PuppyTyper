import fs from 'fs'

class CSSReader {

    static async getCssFromJson(rootPath) {
        
        let CSS = await fs.readFileSync(rootPath)

        return JSON.parse(CSS);
    
    }

}

export default CSSReader;
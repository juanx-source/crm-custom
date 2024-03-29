import axios from "axios";
const baseURLP = `${process.env.BASE_URL}/Notes/case`

export async function createNote(text: string, moduleId: number, module: string){
    try {
        const body = {
            body: text,
            moduleId
        }
        await axios.post(baseURLP, body, {params:{module}})
    } catch (error) {
        console.log(Error)
    }
}


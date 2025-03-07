import app from './app'
import config from 'config'

(
    ()=>{

        const port = process.env.PORT
        const host = process.env.HOST
        
        app.listen(Number(port), host!, ()=> {
            console.log(`[SERVER IS ON] Server running on port ${port}`)
        })
    }
)()
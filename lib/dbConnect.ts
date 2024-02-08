import mongoose from "mongoose";


async function dbConnect(){
    try {
        // le ! pour typer la variable, le definir comme undefined
        await mongoose.connect(process.env.MONGODB_URI!);
    } catch (error) {
        throw new Error("La connexion a échouée")
    }
}
export default dbConnect
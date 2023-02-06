import { Request, Response } from "express"
import { AnimalsDatabase } from "../database/AnimalsDatabase"
import { Animals } from "../models/Animals"
import { IAnimalsDB } from "../types"
export class AnimalsController{

    public getAnimals = async(req:Request, res: Response)=>{
        try {
            
            const animalsDatabase = new AnimalsDatabase()
            const animalsDB: IAnimalsDB[] = await animalsDatabase.findAnimals()

            const animals = animalsDB.map((animalsDB)=> new Animals(
                animalsDB.id,
                animalsDB.classification,
                animalsDB.species,
                animalsDB.name,
                animalsDB.age,
                animalsDB.color
            ))
            res.status(200).send(animals)

        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}
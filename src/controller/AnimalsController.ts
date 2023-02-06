import { Request, Response } from "express"
import { AnimalsBusiness } from "../business/AnimalsBusiness"
import { AnimalsDatabase } from "../database/AnimalsDatabase"
import { Animals } from "../models/Animals"
import { IAnimalsDB } from "../types"
export class AnimalsController{

    public getAnimals = async(req:Request, res: Response)=>{
        try {
            
            // const animalsDatabase = new AnimalsDatabase()
            // const animalsDB: IAnimalsDB[] = await animalsDatabase.findAnimals()

            // const animals = animalsDB.map((animalsDB)=> new Animals(
            //     animalsDB.id,
            //     animalsDB.classification,
            //     animalsDB.species,
            //     animalsDB.name,
            //     animalsDB.age,
            //     animalsDB.color
            // ))
            const animalsBusiness = new AnimalsBusiness()
            const resultGet = await animalsBusiness.getAnimals()
            res.status(200).send(resultGet)

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
    public createAnimals = async(req: Request, res: Response)=>{

        try {
        const {id, classification, species, name, age, color} = req.body
        const datas = {id, classification, species, name, age, color}
         
        const animalsBusiness = new AnimalsBusiness
        const resultPost = animalsBusiness.createAnimals(datas)

        res.status(201).send("Novo animal cadastrado")
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

    public editAnimals = async(req:Request, res:Response)=>{
        try {
        const {id, classification, species, name, age, color} = req.body
        const datas = {id, classification, species, name, age, color}
            
        const animalsBusiness = new AnimalsBusiness
        const resultEdit = await animalsBusiness.editAnimals(datas)

        res.status(201).send({message: "Dados atualizados", resultEdit})

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
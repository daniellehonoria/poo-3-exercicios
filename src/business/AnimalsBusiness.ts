import { AnimalsDatabase } from "../database/AnimalsDatabase"
import { Animals } from "../models/Animals"
import { IAnimalsDB } from "../types"

export class AnimalsBusiness{
    public getAnimals = async()=>{
                    
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
        return animals
    }
    public createAnimals = async(datas:any) =>{
        const {id, classification, species, name, age, color} = datas
        if (typeof id !== "string" ) {
            throw new Error("Id deve ser string")
        }       
         if (typeof classification !== "string") {
            throw new Error("classification deve ser string")
        }       
         if (typeof species !== "string" ) {
            throw new Error("Species deve ser string")
        }       
         if (typeof name !== "string") {
            throw new Error("Name deve ser string")
        }
        if (typeof color !== "string") {
            throw new Error("Color deve ser string")
        }
        if (typeof age !== "number" ) {
            throw new Error("Age deve ser number")
        }

        const animalsDatabase = new AnimalsDatabase()
        const animalsDBExists = await animalsDatabase.findAnimalsById(id)

        if (animalsDBExists) {
            throw new Error("'id' já existe")
        }
        const newAnimal = new Animals(
            id,
            classification,
            species,
            name,
            age,
            color
        )

        const newAnimalDB: IAnimalsDB ={
            id: newAnimal.getId(),
            classification: newAnimal.getClassification(),
            species: newAnimal.getSpecies(),
            name: newAnimal.getName(),
            age: newAnimal.getAge(),
            color: newAnimal.getColor()
        }
        await animalsDatabase.insertAnimals(newAnimalDB)

        const result ={
            message: "Cadastro realizado com sucesso",
            animals: newAnimal
        }
        return result
    }
    
    public editAnimals = async(datas:any)=>{
        const {id, classification, species, name,age, color} = datas
        if (typeof id !== "string" ) {
            throw new Error("Id deve ser string")
        }       
         if (typeof classification !== "string") {
            throw new Error("classification deve ser string")
        }       
         if (typeof species !== "string" ) {
            throw new Error("Species deve ser string")
        }       
         if (typeof name !== "string") {
            throw new Error("Name deve ser string")
        }
        if (typeof color !== "string") {
            throw new Error("Color deve ser string")
        }
        if (typeof age !== "number" ) {
            throw new Error("Age deve ser number")
        }

        const animalsDatabase = new AnimalsDatabase()
        const animalsDB = await animalsDatabase.findAnimalsById(id)

        if (!animalsDB) {
            throw new Error("'id' não encontrado")
        }

        const newAnimal = new Animals(
            animalsDB.id,
            animalsDB.classification,
            animalsDB.species,
            animalsDB.name,
            animalsDB.age,
            animalsDB.color
        )

        await animalsDatabase.updateAnimalsById(id, newAnimal)

        return newAnimal
}
}
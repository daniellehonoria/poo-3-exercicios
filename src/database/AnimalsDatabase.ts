import { BaseDatabase } from "./BaseDatabase";
import { IAnimalsDB } from "../types";
export class AnimalsDatabase extends BaseDatabase{
    
    public static TABLE_ANIMALS = "animals"
        
    public async findAnimals(){
        
    const animalsDB: IAnimalsDB[] = await BaseDatabase
     .connection(AnimalsDatabase.TABLE_ANIMALS)
     return animalsDB
        }
public async findAnimalsById(id:String){
    const [animalsDB]: IAnimalsDB[] | undefined[] = await BaseDatabase
    .connection(AnimalsDatabase.TABLE_ANIMALS)
    .where({id})
    return animalsDB

}
    public async insertAnimals(newAnimalDB:IAnimalsDB){
        await BaseDatabase
        .connection(AnimalsDatabase.TABLE_ANIMALS)
        .insert(newAnimalDB)
    }   
    
    public async updateAnimalsById(id: string, newAnimal: any){
        await BaseDatabase
        .connection(AnimalsDatabase.TABLE_ANIMALS)
        .update({
        id: newAnimal.Id,//update recebe todas as colunas q serão editadas
        classification: newAnimal.classification,
        species: newAnimal.species,
        name: newAnimal.name,
        age: newAnimal.age,
        color: newAnimal.color
        })
        .where({id})
    }
    }

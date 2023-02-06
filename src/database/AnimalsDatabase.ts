import { BaseDatabase } from "./BaseDatabase";
import { IAnimalsDB } from "../types";
export class AnimalsDatabase extends BaseDatabase{
    
    public static TABLE_ANIMALS = "animals"
        
    public async findAnimals(){
        
    const animalsDB: IAnimalsDB[] = await BaseDatabase
     .connection(AnimalsDatabase.TABLE_ANIMALS)
     return animalsDB
        }

    public async insertAnimals(newAnimal:IAnimalsDB){
        await BaseDatabase
        .connection(AnimalsDatabase.TABLE_ANIMALS)
        .insert(newAnimal)
    }    
    }

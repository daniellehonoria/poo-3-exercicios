export class Animals{
    constructor(
        private id: string,
        private classification: string,
        private species: string,
        private name: string,
        private age: number,
        private color: string
    ){}
    public getId():string{
        return this.id
    }
    public setId(value:string):void{
        this.id = value
    }
    public getClassification(): string{
        return this.classification
    }
    public setClassification(value:string):void{
        this.classification = value
    }
    public getSpecies():string{
        return this.species
    }
    public setSpecies(value:string):void{
        this.species = value
    }
    public getName():string{
        return this.name
    }
    public setName(value:string):void{
        this.name = value
    }
    public getAge():number{
        return this.age
    }
    public setAge(value:number):void{
        this.age = value
    }
    public getColor():string{
        return this.color
    }
    public setColor(value:string):void{
        this.color = value
    }
}
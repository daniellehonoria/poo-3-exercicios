import  express, { Request, Response} from 'express'
import cors from 'cors';
import { AnimalsController } from './controller/AnimalsController';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})
const animalsController = new AnimalsController()
app.get("/animals", animalsController.getAnimals)
app.post("/animals", animalsController.createAnimals)
app.put("/animals",animalsController.editAnimals )

/*# Exercício 1
Volte no seu código do repo do exercício anterior (POO 3) e refatore um endpoint da sua aplicação para implementar a camada Business!

Caso você não tenha mais o código, recrie a API! O repo de POO 3 é esse:<br>
https://github.com/labenuexercicios/poo-3-exercicios

# Exercício 2
Refatore outro endpoint para utilizar a camada Business.
# Exercício 3
Implemente do zero um endpoint (caso não consiga imaginar outro endpoint, delete um que já exista e recrie-o) com as 3 camadas.
*/
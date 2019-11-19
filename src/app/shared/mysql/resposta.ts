export interface RespostaMySql<T> {
    records : Array<T>;
}

export interface RespostaErroMySql<T> {
    headers: Object,
    message: string,
    name: string,
    ok: boolean,
    status: number,
    statusText: string,
    url:string,
    error : RespostaMySql<T>
}

export class ClasseRespostaMySql{
    constructor(){}
    static trataErro(obj: any){
        console.log(Object.keys(obj));
    }
}
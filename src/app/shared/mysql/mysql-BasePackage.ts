export class MysqlBasePackage{
    public tabela : string;
    public comando : string;

    constructor(tb : string, cmdSql: string){
        this.tabela = tb;
        this.comando = cmdSql;
    }
}
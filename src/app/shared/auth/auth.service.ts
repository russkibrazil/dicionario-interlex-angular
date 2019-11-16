export class AuthService{
    loggedin : boolean = false;
    level: string = 'USR';
    isAuthenticated():boolean{
        return this.loggedin;
    }
    whatLevel():string{
        return this.level;
    }
    login(l:string){
        this.level = l;
        this.loggedin = true;
    }
    logout(){
        this.level = 'USR';
        this.loggedin = false;
    }
}
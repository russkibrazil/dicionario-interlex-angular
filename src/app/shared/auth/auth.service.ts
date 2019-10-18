export class AuthService{
    loggedin : boolean = false;
    isAuthenticated():boolean{
        return this.loggedin;
    }
    login(){
        this.loggedin = true;
    }
    logout(){
        this.loggedin = false;
    }
}
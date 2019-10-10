export class AuthService{
    loggedin : boolean = false;
    isAuthenticated(){
        const promisse = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedin);
                }, 1000);
            }
        );
        return promisse;
    }
    login(){
        this.loggedin = true;
    }
    logout(){
        this.loggedin = false;
    }
}
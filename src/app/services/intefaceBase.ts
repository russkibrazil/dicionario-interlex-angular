export interface MethodsServicesDicionario <T>{
    add(item: T);
    set(item: T[]);
    update(item: T, updateOn: T):boolean;
    delete(item: T):boolean;
    fetch(filtros: string[]):boolean;
    store(items : T[]):boolean;
}
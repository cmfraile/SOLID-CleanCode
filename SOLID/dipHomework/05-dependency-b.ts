import { DataProvider, LocalDataBaseService, WebApiService } from './05-dependency-c';

export interface Post { body:string; id:number; title:string; userId:number };


export class PostService {
    constructor(private _dataProvider:DataProvider){}
    public async getPosts(){
       return new Promise((rs,rj) => {
        this._dataProvider.getPosts()
        .then(resp => rs(resp))
        .catch(() => {rj(new Error('Algo esta fallando'))})
       })
    }
}
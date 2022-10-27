import { Post } from "./05-dependency-b";
import JSONDB from './local-database.json';
import axios from "axios";


export abstract class DataProvider {
    public abstract getPosts():Promise<Post[]>
}

export class LocalDataBaseService implements DataProvider {

    constructor(){}

    public async getPosts():Promise<Post[]> {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }]
    }

}

export class JsonDataBaseService implements DataProvider {
    constructor(){}
    public async getPosts():Promise<Post[]>{return JSONDB}
}


export class WebApiDataBaseService implements DataProvider {
    private apiurl:string = 'https://jsonplaceholder.typicode.com/posts';
    constructor(){}
    public async getPosts(): Promise<Post[]> {
        return await axios.get(this.apiurl).then(resp => resp.data)
    }

    /*
    public async getPosts(): Promise<Post[]> {
        return new Promise(async(rs,rj) => {
            await axios.get(this.apiurl)
            .then(({data}:any) => rs(data))
            .catch(rj)
        })
    }
    */
}



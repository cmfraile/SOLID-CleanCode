import { PostService } from './05-dependency-b';
import { LocalDataBaseService , JsonDataBaseService , WebApiDataBaseService } from './05-dependency-c';

export const dipHomeworkMain = async() => {
    const postService = new PostService(new WebApiDataBaseService());
    const posts = await postService.getPosts();
    console.log({ posts });
}
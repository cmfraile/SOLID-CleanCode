import { PostService } from './05-dependency-b';
import { LocalDataBaseService , JsonDataBaseService , WebApiService } from './05-dependency-c';

export const dipHomeworkMain = async() => {
    const postService = new PostService(new WebApiService());
    const posts = await postService.getPosts();
    console.log({ posts });
}
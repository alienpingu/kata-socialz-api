import Post from "./post";

export default interface User {
    id: string;
    username: string;
    password: string;
    postList: Post[];
}
import Post from "./post";

export default interface User {
    id: string;
    cakeDay: string;
    username: string;
    followerCounter: number;
    followerList: string[];
    stalkingCounter: number;
    stalkingList: string[];
    postList: Post[];
    chatIdList: string[];
}
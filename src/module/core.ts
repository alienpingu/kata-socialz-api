import Post from "../interface/post";
import User from "../interface/user";
import Chat from "../interface/chat";
import Message from "../interface/message";

export default class Core {
    constructor() {}

    log = () => {console.log('✅ CORE online ');return true;};
    
    submitPost = (post: Post ) => true;
    removePost = (postID: string ) => true;
    likePost = (postID: string  ) => true;
    getPost = (postID: string ) => true;

    createUser = (user: User) => true;
    deleteUser = (userID: string) => true;

    followUser = (userID: string) => true;
    leaveUser = (userID: string) => true;
    getFeed = () => true;
    getFeedByUser = (userID: string) => true;
    getFeedByMultiUsers = (userIdList: string[]) => true;

    createChat = (userIdList: string[]) => true;
    getChat = (chatID: string) => true;
    deleteChat = (chatID: string) => true;

    sendMessage = (chatID: string, message: Message) => true;

}
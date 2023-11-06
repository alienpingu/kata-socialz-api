import Post from '../interface/post';
import User from '../interface/user';
import generateRandomString from '../utils/generateRandomString';
export default class Core {
    userDB: User[] = [];
    postDB: Post[] = [];
    
    constructor() {}
    
    submitPost = (newPost: Post) => {
        this.postDB.push(newPost);
        return newPost;
    };
    
    deletePost = (postID: string) => {
        const index = this.postDB.findIndex(obj => obj.id === postID);
        if (index !== -1) {
            this.postDB.splice(index, 1);
            return true;
        }
        return false;
    };

    getFeed = () => {
        const filtered = this.postDB.filter(obj => obj.public === 'all');
        if (filtered.length > 0) {
            return filtered;
        }
        return undefined;
    }

    getPost = (from: string, to: string):Post[] | undefined => {
        const filtered = this.postDB.filter(obj => obj.public === to && obj.authorID === from);
        if (filtered.length > 0) {
            return filtered;
        }
        return undefined;
    } 

    register = (username: string, password: string):boolean => {
        const index = this.userDB.findIndex(obj => obj.username === username);
        if (index === -1) {
            this.userDB.push({username: username,password: password})
            return true;
        }
        return false;
    }

    login = (username: string, password: string):boolean => {
        const filtered = this.userDB.filter(obj => obj.username === username && obj.password === password);
        if (filtered.length === 1) {
            return true;
        }
        return false;
    }


}
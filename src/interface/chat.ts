import Message from "./message";

export default interface Chat {
    id: string;
    counter: number;
    teamIdList: string[];
    messageHistory: Message[];
}
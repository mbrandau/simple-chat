import { User } from './user';

export class Message {
    type: String;
    data: any;
    sender: User;
    userId: string;
    date: Date;
}

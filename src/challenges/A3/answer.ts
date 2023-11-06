/**
* In this challenge, you should sort messages by their sentAt property (oldest first) and 
* modify them by adding an "unread" property
* (boolean meaning that the current user did not read this message) based on the lastActivityDatetime
* input. 
*
* @param lastActivityDatetime String representing an ISO8601 datetime. Represent the last time the user checked his messages
* @param messages List of messages, unsorted and without unread property
* @returns Sorted list of messages with the unread information
*/

// ↓ uncomment bellow lines and add your response!

export default function ({ lastActivityDatetime, messages } : { lastActivityDatetime: string, messages: Message[] }): MessageWithUnread[] {
    const sortedMessages = messages.sort((a, b) => {
        return new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime();
    });

    const messagesWithUnread: MessageWithUnread[] = sortedMessages.map(message => {
        
        const messageSentAt = new Date(message.sentAt);
        const lastActivity = new Date(lastActivityDatetime);

        const unread = messageSentAt > lastActivity;

        return {
            author: message.author,
            sentAt: message.sentAt,
            message: message.message,
            unread: unread
        };
    });

    return messagesWithUnread;
}


// used interfaces, do not touch
export interface Message {
    author: string;
    sentAt: string;
    message: string;
}

export interface MessageWithUnread extends Message {
    unread: boolean;
}
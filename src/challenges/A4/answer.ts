/**
 * In this challenge, you have to regroup messages into an array of day based on their
 * sentAt property.
 * You have to manipulate dates in vanillaJS. Be carefull to call, if needed, setUTCHours, setUTCMinutes, ...
 * instead of setHouts, setMinutes, ... to avoid timezone offsets!
 *
 * Example:
 * Input: [{ message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" }, { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" }, { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" }]
 * Output: [
 *      {
 *          day: "2020-11-17T00:00:00.000Z",
 *          messages: [
 *              { message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" },
 *              { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" },
 *          ]
 *      },
 *      {
 *          day: "2020-11-18T00:00:00.000Z",
 *          messages: [
 *              { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" },
 *          ]
 *      },
 * ]
 *
 * @param messages List of messages, unsorted and not grouped in days
 * @returns Sorted list of days (only days with messages!) with a list of sorted messages of the day
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ messages }: { messages: Message[] }): DayMessages[] {
  // trier des messages par date
  messages.sort((a, b) => {
    const dateA = new Date(a.sentAt);
    const dateB = new Date(b.sentAt);
    return dateA.getTime() - dateB.getTime();
  });
	
  //initialiser l'objet qui regroupera les messages par dates
  const messagesByDay: { [key: string]: Message[] } = {};
  
  // regrouper les messages par jour
	messages.forEach((message) => {
	  //on récupère la date d'envoie
    const sentAtDate = new Date(message.sentAt);
    //on construit l'ordre pour le format de sorti
	const dayKey = new Date(
      Date.UTC(
        sentAtDate.getUTCFullYear(),
        sentAtDate.getUTCMonth(),
        sentAtDate.getUTCDate()
      )
	  );
	  
    //on créé le jour s'il n'existe pas au format demandé
    if (!messagesByDay[dayKey.toISOString()]) {
      messagesByDay[dayKey.toISOString()] = [];
    }
    //on ajoute le message à la date
    messagesByDay[dayKey.toISOString()].push(message);
  });

  // Convertion des messages groupés au format de sortie souhaité
  const groupedMessages: DayMessages[] = Object.keys(messagesByDay).map(
    (day) => {
      return {
        day,
        messages: messagesByDay[day],
      };
    }
  );

  return groupedMessages;
}

// used interfaces, do not touch
export interface Message {
  author: string;
  sentAt: string;
  message: string;
}

export interface DayMessages {
  day: string;
  messages: Message[];
}

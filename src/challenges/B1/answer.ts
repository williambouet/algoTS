/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 *
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!

export default function ({
  events,
}: {
  events: EventDatetime[];
}): EventDatetime[] {
  return events.sort((a, b) => {
    const dateStartA = new Date(a.startDatetime);
    const dateStartB = new Date(b.startDatetime);

    if (dateStartA.getTime() === dateStartB.getTime()) {
      const dateEndA = new Date(a.endDatetime);
      const dateEndB = new Date(b.endDatetime);

      return dateEndA.getTime() < dateEndB.getTime() ? -1 : 1;
    }
    return dateStartA.getTime() < dateStartB.getTime() ? -1 : 1;
  });
}

// used interfaces, do not touch
export interface EventDatetime {
  startDatetime: string;
  endDatetime: string;
  event: string;
}

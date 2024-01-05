export interface Activity {
  activity_date: Date ;
  monitors: string[];
  type: string;
  timeSlot: string;
  id?: BigInt;
}

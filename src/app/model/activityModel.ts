export interface Activity {
  activity_date: Date;
  place: string;
  monitors: string[];
  type: string;
  id?: BigInt;
}

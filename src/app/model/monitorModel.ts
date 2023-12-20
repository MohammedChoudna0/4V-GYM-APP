export class Monitor {
  id: number;
  name: string;
  email: string;
  phone: string;
  imageUrl: string = '../../../../assets/Vector.svg';

  constructor(id: number, name: string, email: string, phone: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.imageUrl = imageUrl;
  }
}
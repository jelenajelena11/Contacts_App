import { Label } from "./Label";

export interface Contact {
  id?: number;
  name: string;
  email: string;
  phone_number: string;
  isFavorite?: boolean;
  profile_photo: string;
  label: Label;
}

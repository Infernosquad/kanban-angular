import {MenuItem} from "primeng/api";

export default interface Board extends MenuItem{
  id: string;
  label: string;
  url: string;
  color?: string;
}

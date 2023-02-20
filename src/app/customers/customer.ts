import { ResponseBody } from "../common/models/response-body";

export class CustomersResponse implements ResponseBody {
    status!: number;
    warnings: string[] = [];
    message!: string;
    data: Customer[] = [];
}

export interface Customer {
    id: number
    name: string
    email: string
    phone: string
  }

  export class NewCustomer {
    name!: string;
    email!: string;
    phone!: string;
  }
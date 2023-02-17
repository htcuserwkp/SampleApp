import { ResponseBody } from "../common/models/response-body";

export class OrdersResponse implements ResponseBody {
    status!: number;
    warnings: string[] = [];
    message!: string;
    data: Order[] = [];
}

export class OrderByIdResponse implements ResponseBody {
    status!: number;
    warnings!: string[];
    message!: string;
    data!: Order;
}

export interface Order {
    id: number
    customerEmail: string
    orderNumber: string
    orderPlaced: string
    //isVerified: boolean
    //isComplete: boolean
    subTotal: number
    discount: number
    serviceCharge: number
    total: number
    //paymentMethod: string
    orderItems: OrderItem[]
  }
  
  export interface OrderItem {
    foodId: number
    foodName: string
    quantity: number
    price: number
  }
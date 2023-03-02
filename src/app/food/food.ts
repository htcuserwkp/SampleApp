import { ResponseBody } from "../common/models/response-body";

export class FoodsResponse implements ResponseBody {
    status!: number;
    warnings: string[] = [];
    message!: string;
    data: Food[] = [];
}

export class FoodResponse implements ResponseBody {
  status!: number;
  warnings: string[] = [];
  message!: string;
  data!: Food;
}

export class Food {
    name!: string;
    description!: string;
    quantity!: number;
    price!: number;
    categoryId!: number;
    id!: number;
}
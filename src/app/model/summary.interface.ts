export interface SummaryObject {
  data: Data;
}
export interface Data {
  overview: Overview;
  summary: Summary[];
}

export interface Summary {
  order_status: string;
  count: number;
}
export interface Overview {
  total_earnings: TotalEarning[];
  average_sale: AverageSale[];
  new_orders: NewOrder[];
}
export interface TotalEarning {
  total_earnings: string;
}

export interface AverageSale {
  average_sale: string;
}

export interface NewOrder {
  new_orders: number;
}
export interface summary2{
  name:string,
  value: string |number
}
export interface percentage{
  order_status:string;
  count:number;
  percentage:number
}
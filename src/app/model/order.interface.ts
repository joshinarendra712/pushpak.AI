export interface Next {
  page: number;
  limit: number;
}

export interface Pagination {
  currentPage: number;
  totalRecords?: any;
  next: Next;
  limit: number;
}

export interface Data {
  id: string;
  billing_name: string;
  amount: string;
  date: Date;
  order_status: string;
}

export interface OrderObject {
  pagination: Pagination;
  data: Data[];
}

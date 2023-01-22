export interface Last7Days {
  'Sun Jan 15 2023 18:49:55 GMT+0530': string;
  'Sat Jan 14 2023 18:49:55 GMT+0530': string;
  'Fri Jan 13 2023 18:49:55 GMT+0530': string;
  'Thu Jan 12 2023 18:49:55 GMT+0530': string;
  'Wed Jan 11 2023 18:49:55 GMT+0530': string;
  'Tue Jan 10 2023 18:49:55 GMT+0530': string;
  'Mon Jan 09 2023 18:49:55 GMT+0530': string;
}

export interface Data {
  last7Days: Last7Days;
}

export interface RootObject {
  data: Data;
}

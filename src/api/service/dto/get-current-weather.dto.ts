import { DataTypeEnum } from "../../../components/data-chart/card/constant/dataType.ts";

export interface GetCurrentWeatherDto {
  pageNo: number;
  dataType: DataTypeEnum;
  numOfRows: number;
  base_date: string;
  base_time: number[];
  nx: number;
  ny: number;
}

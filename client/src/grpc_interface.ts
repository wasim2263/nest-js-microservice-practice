import { Observable } from 'rxjs';

interface INumberArray {
  data: number[];
}
export interface IGrpcService {
  getMultiplication(data: INumberArray): Observable<any>;
}

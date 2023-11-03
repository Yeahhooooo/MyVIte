import request from "../../utils/request";
import {TradeMarkResponseData} from "./type";


enum API {
    TRADEMARK_URI = '/off/admin/product/baseTrademark/',
    TRADEMARKADD_URI = ''
}

export const reqTradeMark = (page: number,limit: number) =>
    request.get<any,TradeMarkResponseData>(API.TRADEMARK_URI + `${page}/${limit}`)

export const reqAddTradeMark = () =>
    request.post<any,any>(API.TRADEMARKADD_URI)


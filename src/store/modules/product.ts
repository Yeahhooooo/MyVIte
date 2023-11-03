import {defineStore} from "pinia";
import {ProductState} from "./types/product";
import {TradeMarkResponseData} from "../../api/product/type";
import {reqTradeMark} from "../../api/product";


let ProductStore = defineStore('Product',{
    state: (): ProductState => {
        return {
            total: 0,
            TradeMarks: []
        }
    },
    actions:{
        async getTradeMarks(page: number,pageSize: number){
            let result: TradeMarkResponseData = await reqTradeMark(page,pageSize)
            console.log(result)
            if(result.code === 200){
                this.total = result.data.total
                this.TradeMarks = result.data.records
            }
        }
    }
})

export default ProductStore

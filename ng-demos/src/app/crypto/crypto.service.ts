import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
export type Coin = {
  name:string,
  symbol:string,
  value:string
}
@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(public http:HttpClient) { }

  allCoins:Coin[]=[];

  fetchCryptoPrices(){
    this.http.get<any[]>('https://api.coinmarketcap.com/v1/ticker/')
      .subscribe((r:any[]) =>{
        this.allCoins=r.map(coin=>mapAnyToCoin(coin)).sort();
        // console.log(this.allCoins);
      })
  }

}


function mapAnyToCoin(coin:any):Coin{
  return {
    name:coin.name,
    symbol:coin.symbol,
    value:coin.price_usd
  }
}

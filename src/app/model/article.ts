export class Article {

  constructor(public name: string,
    public imageUrl: string,
    public price: number,
    public isOnSale: boolean,
    public quantityInCart: number,
    public stock: number,
    public favorite: boolean) {}


}

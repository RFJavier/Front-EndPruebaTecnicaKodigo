
export interface products_payload{
  productname: string
}
export interface products{

    idproduct: number,

    idcategory: number,
    
    productname: string,
    
    code: string,
    
    quantity: number,
    
    price: number,
    
    descriptions: string,
    
    statusproduct: number,

    promotion: number,

    //not mapped vars only for front end
    total: number;
  discount: number;
  total_without_discount: number;
  price_with_discount: number;
  unit_discount: number;
}
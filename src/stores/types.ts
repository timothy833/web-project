// 定義商品類型
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string; // 添加 image 屬性
}

// 定義購物車項目類型，繼承自 Product 並添加 quantity 屬性

export interface CartItem extends Product {
    quantity: number;
  }
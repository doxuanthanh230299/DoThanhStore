export interface Product {
  id: number
  name: string
  image: string
  images: string[]
  thumb: string
  price: number
  description: string
  returnPolicy: string
  category: 'pant' | 'shirt' | 'accessory'
}

export interface Lookbook {
  id: number
  title: string
  subtitle: string
  thumb: string
  images: string[]
  link: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Basic Short',
    image: 'https://golfwang.com/cdn/shop/files/SS25BT1001BLUE.jpg?v=1752193687&width=1920',
    thumb: 'https://golfwang.com/cdn/shop/files/SS25BT1001BLUE.jpg?v=1752193687&width=1920',
    images: [
      'https://golfwang.com/cdn/shop/files/SS25BT1001BLUE.jpg?v=1752193687&width=1920',
      'https://golfwang.com/cdn/shop/files/SS25BT1001BLUE-3.jpg?v=1752193687&width=1920',
      'https://golfwang.com/cdn/shop/files/SS25BT1001BLUE-4.jpg?v=1752193687&width=1920',
    ],
    category: 'pant',
    price: 390000,
    description: 'Quần Short nam dáng rộng, vải cotton co giãn.',
    returnPolicy: 'Đổi trả trong 3 ngày nếu chưa qua sử dụng.',
  },
  {
    id: 2,
    name: 'Crewneck T-Shirt',
    image: 'https://golfwang.com/cdn/shop/files/SS25OU1002BLACK.jpg?v=1752017482&width=1920',
    thumb: 'https://golfwang.com/cdn/shop/files/SS25OU1002BLACK.jpg?v=1752017482&width=1920',
    images: [
      'https://golfwang.com/cdn/shop/files/SS25OU1002BLACK.jpg?v=1752017482&width=1920',
      'https://golfwang.com/cdn/shop/files/SS25OU1002BLACK-3.jpg?v=1752017482&width=1920',
      'https://golfwang.com/cdn/shop/files/SS25OU1002BLACK-4.jpg?v=1752017482&width=1920',
    ],
    category: 'shirt',
    price: 420000,
    description: 'Áo thun cổ tròn basic, phù hợp mặc hàng ngày.',
    returnPolicy: 'Hỗ trợ đổi size trong vòng 3 ngày.',
  },
  {
    id: 3,
    name: 'Oversized Hoodie',
    category: 'shirt',
    image: 'https://golfwang.com/cdn/shop/files/SS25F1001HEATHERGREY.jpg?v=1752019676&width=1920',
    thumb: 'https://golfwang.com/cdn/shop/files/SS25F1001HEATHERGREY.jpg?v=1752019676&width=1920',
    images: [
      'https://golfwang.com/cdn/shop/files/SS25F1001HEATHERGREY.jpg?v=1752019676&width=1920',
      'https://golfwang.com/cdn/shop/files/SS25F1001HEATHERGREY-3.jpg?v=1752101751&width=1920',
      'https://golfwang.com/cdn/shop/files/Golfwang686c51a1d36bb8686c51a1d3a5a.68321396686c51a1d3a5a.jpg?v=1752101751&width=1920',
    ],
    price: 580000,
    description: 'Hoodie dáng rộng, mũ to, vải nỉ mềm mịn.',
    returnPolicy: 'Chỉ đổi hàng khi còn tag và hóa đơn.',
  },
  {
    id: 4,
    name: 'Relaxed Fit Shorts',
    image: 'https://golfwang.com/cdn/shop/products/UAGOLFLOGOSWEATSHORTS-BLACK.jpg?v=1650403719&width=1920',
    thumb: 'https://golfwang.com/cdn/shop/products/UAGOLFLOGOSWEATSHORTS-BLACK.jpg?v=1650403719&width=1920',
    category: 'pant',
    images: [
      'https://golfwang.com/cdn/shop/products/UAGOLFLOGOSWEATSHORTS-HEATHERGREY.jpg?v=1650403719&width=1920',
      'https://golfwang.com/cdn/shop/products/UAGOLFLOGOSWEATSHORTS-BLACK.jpg?v=1650403719&width=1920',
    ],
    price: 370000,
    description: 'Quần short dáng relax, phù hợp thời tiết nóng.',
    returnPolicy: 'Không hỗ trợ đổi trả với quần short.',
  },
  {
    id: 5,
    name: 'Slim Fit Jeans',
    image: 'https://golfwang.com/cdn/shop/files/FW24BT1006MEDIUM-WASH.jpg?v=1743722412&width=1920',
    thumb: 'https://golfwang.com/cdn/shop/files/FW24BT1006MEDIUM-WASH.jpg?v=1743722412&width=1920',
    category: 'pant',
    images: [
      'https://golfwang.com/cdn/shop/files/FW24BT1006MEDIUM-WASH.jpg?v=1743722412&width=1920',
      'https://golfwang.com/cdn/shop/files/FW24BT1006MEDIUM-WASH-2.jpg?v=1743722412&width=1920',
      'https://golfwang.com/cdn/shop/files/Golfwang677ef5cf3a604623965488677ef5cf3a60d.677ef5cf3a60d.jpg?v=1743722412&width=1920',
    ],
    price: 650000,
    description: 'Quần jeans co giãn, ôm vừa vặn.',
    returnPolicy: 'Đổi size trong 7 ngày, không hoàn tiền.',
  },
  {
    id: 6,
    name: 'Polo Shirt Cotton',
    image: 'https://golfwang.com/cdn/shop/files/SS25TS1002WHITE-PINK.jpg?v=1752017960&width=1920',
    thumb: 'https://golfwang.com/cdn/shop/files/SS25TS1002WHITE-PINK.jpg?v=1752017960&width=1920',
    category: 'shirt',
    images: [
      'https://golfwang.com/cdn/shop/files/SS25TS1002WHITE-PINK-2.jpg?v=1752017960&width=1920',
      'https://golfwang.com/cdn/shop/files/Golfwang686c4e99828196686c4e9982a4d.83764560686c4e9982a4d.jpg?v=1752017960&width=1920',
      'https://golfwang.com/cdn/shop/files/Golfwang686c4e99940fd7686c4e99944b5.76697183686c4e99944b5.jpg?v=1752017960&width=1920',
    ],
    price: 450000,
    description: 'Polo chất liệu cotton cao cấp, cổ đứng form chuẩn.',
    returnPolicy: 'Đổi trả miễn phí trong 3 ngày.',
  },
  {
    id: 7,
    name: 'Layered Denim Jacket',
    image: 'https://golfwang.com/cdn/shop/files/Golfwang681d4b0c5d517585226836681d4b0c5d520.681d4b0c5d520.jpg?v=1748557384&width=1920',
    thumb: 'https://golfwang.com/cdn/shop/files/cord-jacket-orange.jpg?v=1749254635&width=1920',
    category: 'shirt',
    images: [
      'https://golfwang.com/cdn/shop/files/Golfwang681d4b0b7e002200161372681d4b0b7e009.681d4b0b7e009.jpg?v=1748557384&width=1920',
      'https://golfwang.com/cdn/shop/files/Golfwang681d4b0ba75ee284297504681d4b0ba75f5.681d4b0ba75f5.jpg?v=1748557384&width=1920',
      'https://golfwang.com/cdn/shop/files/Golfwang681d4b0c4abaf471624531681d4b0c4abb7.681d4b0c4abb7.jpg?v=1748557384&width=1920',
    ],
    price: 780000,
    description: 'Áo khoác denim có lớp lót giữ ấm nhẹ.',
    returnPolicy: 'Đổi trả nếu chưa giặt và giữ tag.',
  },
  {
    id: 8,
    name: 'Daily Sweatpants',
    image: 'https://golfwang.com/cdn/shop/files/FW24BT1024CREAM.jpg?v=1743722680&width=1920',
    thumb: 'https://golfwang.com/cdn/shop/files/FW24BT1024CREAM.jpg?v=1743722680&width=1920',
    category: 'pant',
    images: [
      'https://golfwang.com/cdn/shop/files/FW24BT1024CREAM.jpg?v=1743722680&width=1920',
      'https://golfwang.com/cdn/shop/files/FW24BT1024CREAM.jpg?v=1743722680&width=1920',
      'https://golfwang.com/cdn/shop/files/FW24BT1024CREAM.jpg?v=1743722680&width=1920',
    ],
    price: 420000,
    description: 'Quần nỉ nhẹ, form thể thao năng động.',
    returnPolicy: 'Đổi trả trong 3 ngày.',
  },
  {
    id: 9,
    name: 'Minimalist Cap',
    image: 'https://golfwang.com/cdn/shop/files/SS25H1002PURPLE-1.jpg?v=1752194129&width=1920',
    thumb: 'https://golfwang.com/cdn/shop/files/SS25H1002PURPLE-1.jpg?v=1752194129&width=1920',
    category: 'accessory',
    images: [
      'https://golfwang.com/cdn/shop/files/SS25H1002PURPLE-1.jpg?v=1752194129&width=1920',
      'https://golfwang.com/cdn/shop/files/SS25H1002PURPLE-1.jpg?v=1752194129&width=1920',
      'https://golfwang.com/cdn/shop/files/SS25H1002PURPLE-1.jpg?v=1752194129&width=1920',
    ],
    price: 180000,
    description: 'Mũ lưỡi trai phong cách tối giản, unisex.',
    returnPolicy: 'Không áp dụng đổi trả phụ kiện.',
  },
  {
    id: 10,
    name: 'Urban Crossbody Bag',
    image: 'https://golfwang.com/cdn/shop/files/FW24A1016.jpg?v=1749157125&width=1920',
    thumb: 'https://golfwang.com/cdn/shop/files/FW24A1016.jpg?v=1749157125&width=1920',
    category: 'accessory',
    images: [
      'https://golfwang.com/cdn/shop/files/FW24A1016.jpg?v=1749157125&width=1920',
      'https://golfwang.com/cdn/shop/files/FW24A1016.jpg?v=1749157125&width=1920',
      'https://golfwang.com/cdn/shop/files/FW24A1016.jpg?v=1749157125&width=1920',
    ],
    price: 320000,
    description: 'Túi đeo chéo nhỏ gọn, nhiều ngăn tiện lợi.',
    returnPolicy: 'Bảo hành khóa kéo trong 1 tháng.',
  },
  {
    id: 11,
    name: 'Canvas Tote Bag',
    image: 'https://golfwang.com/cdn/shop/files/FW24A1016.jpg?v=1749157125&width=1920',
    thumb: 'https://golfwang.com/cdn/shop/files/FW24A1016.jpg?v=1749157125&width=1920',
    category: 'accessory',
    images: [
      'https://golfwang.com/cdn/shop/files/FW24A1016.jpg?v=1749157125&width=1920',
      'https://golfwang.com/cdn/shop/files/FW24A1016.jpg?v=1749157125&width=1920',
      'https://golfwang.com/cdn/shop/files/FW24A1016.jpg?v=1749157125&width=1920',
    ],
    price: 250000,
    description: 'Túi tote vải bố chắc chắn, in logo thời trang.',
    returnPolicy: 'Đổi nếu lỗi in ấn hoặc rách vải.',
  },
  {
    id: 12,
    name: 'Textured Knit Sweater',
    image: 'https://golfwang.com/cdn/shop/products/3DMINILOGOCREWNECK-BLACK.jpg?v=1741817755&width=1920',
    thumb: 'https://golfwang.com/cdn/shop/products/3DMINILOGOCREWNECK-BLACK.jpg?v=1741817755&width=1920',
    category: 'shirt',
    images: [
      'https://golfwang.com/cdn/shop/products/3DMINILOGOCREWNECK-BLACK.jpg?v=1741817755&width=1920',
      'https://golfwang.com/cdn/shop/products/3DMINILOGOCREWNECK-BLACK.jpg?v=1741817755&width=1920',
      'https://golfwang.com/cdn/shop/products/3DMINILOGOCREWNECK-BLACK.jpg?v=1741817755&width=1920',
    ],
    price: 540000,
    description: 'Áo len gân cổ tròn, chất vải giữ form tốt.',
    returnPolicy: 'Chỉ đổi nếu chưa giặt và còn tag.',
  }
]

export const gallery: Lookbook[] = [
  {
    id: 1,
    title: 'LOOKBOOK NOMAD',
    subtitle: 'FW23',
    thumb: 'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB_0_1024x1024.jpg?v=1731448786',
    images: [
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB_1-2_1024x1024.jpg?v=1731448784',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB_2-2_1024x1024.jpg?v=1731448785',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB_3-2_1024x1024.jpg?v=1731448785',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB_5-1_1024x1024.jpg?v=1731448786',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB_5-2_1024x1024.jpg?v=1731448786',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB_6-2_1024x1024.png?v=1731448787',
    ],
    link: 'lookbook-nomad-fw23',
  },
  {
    id: 2,
    title: 'CAMPAIGN NOMAD',
    subtitle: 'FW23',
    thumb: 'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB-FINAL-1_1024x1024.jpg?v=1712165522',
    images: [
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB-FINAL-2_1024x1024.jpg?v=1712165524',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB-FINAL-3_1024x1024.jpg?v=1712165523',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB-FINAL-4_1024x1024.jpg?v=1712165523',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB-FINAL-5_1024x1024.jpg?v=1712165523',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB-FINAL-6_1024x1024.jpg?v=1712165523',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/LB-FINAL-7_1024x1024.jpg?v=1712165523',
    ],
    link: 'campaign-nomad-fw23',
  },
  {
    id: 3,
    title: 'EDITORIAL SPRING',
    subtitle: '2024',
    thumb: 'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/FW23LB_FINAL001_1024x1024.jpg?v=1697724300',
    images: [
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/FW23LB_FINAL002_1024x1024.jpg?v=1697724325',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/FW23LB_FINAL003_1024x1024.jpg?v=1697724389',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/FW23LB_FINAL004_1024x1024.jpg?v=1697724441',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/FW23LB_FINAL005_1024x1024.jpg?v=1697724472',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/FW23LB_FINAL006_1024x1024.jpg?v=1697724752',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/FW23LB_FINAL007_1024x1024.jpg?v=1697724830',
    ],
    link: 'editorial-spring-2024',
  },
  {
    id: 4,
    title: 'STREET STYLE',
    subtitle: '2025',
    thumb: 'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/1-1_1024x1024.jpg?v=1683091045',
    images: [
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/2_1024x1024.jpg?v=1683091159',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/3_1024x1024.jpg?v=1683091175',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/4_1024x1024.jpg?v=1683091192',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/5_1024x1024.jpg?v=1683091215',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/6_1024x1024.jpg?v=1683091426',
      'https://cdn.shopify.com/s/files/1/0412/0133/6481/files/7_1024x1024.jpg?v=1683091238',
    ],
    link: 'street-style-2025',
  },
]

"use client"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductActions from "@modules/products/components/product-actions"
import React from "react"

type ProductInfoProps = {
  product: PricedProduct
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {

  return (
    <div id="product-info">
      <ProductActions product={product} />
    </div>
  )
}

export default ProductInfo

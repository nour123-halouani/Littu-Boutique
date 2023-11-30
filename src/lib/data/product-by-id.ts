export async function getProductById(productId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/products/${productId}`,
    {
      credentials: "include",
    }
  );
  const { product } = await response.json();
  return product;

}

import AddToCart from "@/components/products/AddToCart";
import { Rating } from "@/components/products/Rating";
import productService from "@/lib/services/ProductService";
import { convertDocToObj } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return { title: "Produit indisponible" };
  }
  return { title: product.name, description: product.description };
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return <div>Produit indisponible</div>;
  }

  return (
    <>
      <div className="my-2">
        <Link href="/">Retour aux produits</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          ></Image>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
              <Rating
                value={product.rating}
                caption={`${product.numReviews} avis`}
              />
            </li>
            <li>{product.brand}</li>
            <div className="divider"></div>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Prix</div>
                <div>{product.price} FCFA</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0
                    ? "En stock"
                    : "En rupture de stock"}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{
                      ...convertDocToObj(product),
                      qty: 0,
                      color: "",
                      size: "",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

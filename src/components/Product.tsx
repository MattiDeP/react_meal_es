import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type ProductData = {
	 title: string;
	 description: string;
};

function Product() {
	const { id } = useParams();
	const [product, setProduct] = useState<ProductData | null>(null);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((data: ProductData) => setProduct(data));
	}, [id]);

	return (
		<div>
			{product && (
				<>
					<h2>{product.title}</h2>
					<p>{product.description}</p>
				</>
			)}
		</div>
	);
}

export default Product;



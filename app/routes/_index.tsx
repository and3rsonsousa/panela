import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Bar da Panela - Original" },
		{ name: "description", content: "A Panela pegou pressão e cresceu!" },
	];
};

export default function Index() {
	return (
		<div className="bg-pa h-screen grid place-content-center">
			<div className="w-80">
				<div className="mb-8">
					<img
						src="/logo.png"
						alt="Bar da Panela"
						className="h-32 mx-auto"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<Link
						to="/cardapio.pdf"
						className="px-12 py-4 rounded-md hover:bg-nela/80 w-full text-xl bg-nela text-white text-center"
					>
						Cardápio Virtual
					</Link>
					<a
						href="https://maps.app.goo.gl/ZhNnyM5xfaBoUPu27"
						className="px-12 py-4 rounded-md hover:bg-nela/80 w-full text-xl bg-nela text-white text-center"
						target="_blank"
						rel="noreferrer"
					>
						Nossa Localização
					</a>
					<div className="text-center mt-4">
						<strong>#VemPraPanela</strong> você também
					</div>
					<a
						href="https://www.instagram.com/bardapanela.original/"
						className="px-12 py-4 rounded-md hover:bg-nela/80 w-full text-xl bg-nela text-white text-center"
						target="_blank"
						rel="noreferrer"
					>
						Insta da Panela
					</a>
				</div>
			</div>
		</div>
	);
}

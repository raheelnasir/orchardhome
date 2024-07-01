"use client";

import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Image from "next/image";
import Container from "./Container";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

export default function About() {
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

	return (
		<section id="about" className={`relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-56 reveal${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
			<Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
				<div className="flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl">
					<h2 className="font-bold text-6xl pb-6">About</h2>
					<p>
						A Istanbul sono a casa, ho un passato e un futuro, ho un presente che è Dio, e fa la cameriera.{" "}
						<a className="text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600" href="https://www.paninopanini.co.uk/" target="_blank" rel="noreferrer">
							Ut labore et
						</a>{" "}
						dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
					</p>
					<p className="pt-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
						<a className="text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600" href="https://www.paninopanini.co.uk/" target="_blank" rel="noreferrer">
							eiusmod tempor
						</a>{" "}
						. Chiudi un po&#8217; la finestra, mezzogiorno in penombra, sfondo bianco e pulito, sfondo bianco e pulito.
					</p>
					
				</div>
			</Container>
			<Image className="mt-5 lg:hidden" src="/boat.png" width={1000} height={486} alt="Holding guitar" />
			<Image className="hidden lg:max-w-lg lg:block xl:max-w-xl" src="/boat.png" width={750} height={533} alt="Holding guitar" />
		</section>
	);
}
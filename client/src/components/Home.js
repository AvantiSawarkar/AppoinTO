import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Providers from "../components/Providers";
import TopRated from "../components/TopRated";

function Home() {
	return (
		<>
			<Hero />
			<Categories />
			<Providers />
			<TopRated />
		</>
	);
}

export default Home;

import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import Providers from "./Providers";
import TopRated from "./TopRated";

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

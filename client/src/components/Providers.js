import React from "react";

function Providers() {
	const providers = [
		{
			name: "City Hospital",
			category: "Healthcare",
			rating: "4.5",
			distance: "2 km",
		},
		{
			name: "Yoga Center",
			category: "Wellness",
			rating: "4.7",
			distance: "1 km",
		},
		{
			name: "Therapist A",
			category: "Counseling",
			rating: "4.8",
			distance: "3 km",
		},
	];

	return (
		<div className="container my-5">
			<h2>Nearby Providers</h2>

			<div className="row mt-4">
				{providers.map((p, index) => (
					<div className="col-md-4" key={index}>
						<div className="card p-3 shadow-sm">
							<h5>{p.name}</h5>
							<p>{p.category}</p>
							<p>
								⭐ {p.rating} | {p.distance}
							</p>
							<button className="btn btn-success">Book Now</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Providers;

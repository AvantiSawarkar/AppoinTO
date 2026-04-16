import React from "react";

function Hero() {
	return (
		<div className="text-center py-5 bg-light">
			<h1 className="fw-bold">
				Find & Book Trusted Healthcare <br /> NEAR you
			</h1>

			<p className="mt-3">
				Doctors, Therapists, Wellness Experts — all in one place.
			</p>

			<div className="d-flex justify-content-center mt-4">
				<input
					className="form-control w-25 me-2"
					placeholder="Enter Location"
				/>

				<select className="form-select w-25 me-2">
					<option>Healthcare</option>
					<option>Wellness</option>
					<option>Counseling</option>
				</select>

				<button className="btn btn-primary">Search</button>
			</div>
		</div>
	);
}

export default Hero;

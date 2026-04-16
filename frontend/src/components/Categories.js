import React from "react";

function Categories() {
	return (
		<div className="container my-5 text-center">
			<h2>Category We Cater To</h2>

			<div className="row mt-4">
				<div className="col-md-4">
					<div className="card p-4 shadow-sm">
						<h5>Healthcare</h5>
						<p>Doctors & Clinics</p>
					</div>
				</div>

				<div className="col-md-4">
					<div className="card p-4 shadow-sm">
						<h5>Wellness</h5>
						<p>Yoga, Fitness, Spa</p>
					</div>
				</div>

				<div className="col-md-4">
					<div className="card p-4 shadow-sm">
						<h5>Counseling</h5>
						<p>Therapists</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Categories;

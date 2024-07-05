import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

function CollapsePanel() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
				Toggle
			</Button>
			<Collapse isOpen={isOpen}>
				<Card>
					<CardBody>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
							voluptas voluptatum eligendi voluptates tenetur cupiditate dolorum
							at velit eius, accusamus, nesciunt quasi a, ratione quia
							blanditiis? Qui fuga sed tempore.
						</p>
					</CardBody>
				</Card>
			</Collapse>
		</>
	);
}

export default CollapsePanel;

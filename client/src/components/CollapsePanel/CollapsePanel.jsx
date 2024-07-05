import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

function CollapsePanel({ children }) {
	const [isOpen, setIsOpen] = useState(true);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<React.StrictMode>
			<Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
				Toggle
			</Button>
			<Collapse isOpen={isOpen}>
				<Card>
					<CardBody>{children}</CardBody>
				</Card>
			</Collapse>
		</React.StrictMode>
	);
}

export default CollapsePanel;

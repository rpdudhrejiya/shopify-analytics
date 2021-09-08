import React from "react";
import { Card, Heading, Icon, Link, Stack }  from "@shopify/polaris";
import { CashDollarMajor } from "@shopify/polaris-icons";
export default function Home() {
	return (
		<div>
			<h2>Hello</h2>
			<Stack>
				<Link monochrome removeUnderline url="/pricing">
					<Card title=
						{
							<Stack>
								<Icon source={CashDollarMajor}/>
								<Heading>Go to pricing</Heading>	
							</Stack>
						} sectioned>
						<p>Check your potential<br/> monthly fee and be<br/> clear about our pricing.</p>
					</Card>
				</Link>
			</Stack>
		</div>
	);
}
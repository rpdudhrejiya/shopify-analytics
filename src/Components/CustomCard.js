import React from "react";
import { Card, Heading, Icon, Link, Stack }  from "@shopify/polaris";

export default function CustomCard(props) {
	const linkUrl = props.url;
	const iconSource = props.icon;
	return (
		<Link monochrome removeUnderline url={linkUrl}>
			<Card title=
				{
					<Stack>
						<Icon source={iconSource}/>
						<Heading>{props.title}</Heading>	
					</Stack>
				} sectioned>
				{props.info}
			</Card>
		</Link>
	);
}
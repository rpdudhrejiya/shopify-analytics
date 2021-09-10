import React from "react";
import { Card, Typography } from 'antd';
const { Title } = Typography;


export default function HelpCard(props) {

	const {
		Icon,
		title,
		body,
		onClick,
		titleProps,
		iconProps,
		...otherProps
	} = props

	return (
		<Card
			bordered={true}
			className="card"
			onClick={onClick}
			{...otherProps}
		>
			<div className="card-wrapper">
				<div className="card-icon-wrapper">
					<Icon className="icon" {...iconProps}/>
				</div>
				<div className="card-body">
					<Title level={5} {...titleProps}>
						{title}
					</Title>
					<p>{body}</p>
				</div>
			</div>
    </Card>
	);
}
import React from "react";
import { Card } from 'antd';
import { useHistory } from 'react-router-dom';
export default function Home() {

	const history = useHistory();

	return (
		<Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>{ JSON.stringify(history) }</p>
    </Card>
	);
}
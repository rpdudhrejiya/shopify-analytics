import React from "react";
import { Table } from 'antd';

export default function TrandingSearches() {
	
	const Key = (key) => `top-searches-${key}`;
	
	const columns = [
		{
			title: 'Search query',
			dataIndex: 'query',
		},
		{
			title: 'CTR',
			dataIndex: 'ctr',
		},
		{
			title: 'Users',
			dataIndex: 'users',
		}
	];
	

	const data = [
		{
			key: Key(1),
			query: 'Dell Inspiration laptops',
			ctr: 85,
			users: 352
		},
		{
			key: Key(2),
			query: 'HP Keyboard mouse combo',
			ctr: 25,
			users: 385
		},
		{
			key: Key(3),
			query: 'Macbook refurbished',
			ctr: 8,
			users: 15
		},
		{
			key: Key(4),
			query: 'ddr4 ram 16gb',
			ctr: 2,
			users: 84
		},
		{
			key: Key(5),
			query: 'segate sata ssd 500gb',
			ctr: 4,
			users: 72
		},
	];

	const onChange = (pagination, filters, sorter, extra) => {
		console.log('params', pagination, filters, sorter, extra);
	}

	return (
		<Table columns={columns} dataSource={data} onChange={onChange} />		
	);
}
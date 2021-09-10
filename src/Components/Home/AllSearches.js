import React from "react";
import { Table, Tag } from 'antd';

export default function AllSearches() {
	
	const Key = (key) => `all-searches-${key}`;

	const columns = [
		{
			title: 'Keyword',
			dataIndex: 'keyword',
		},
		{
			title: 'Original Keyword',
			dataIndex: 'original_keyword',
		},
		{
			title: 'Date',
			dataIndex: 'date',
		},
		{
			title: 'Keyword Suggestion',
			dataIndex: 'keyword_suggestions',
			render: keywords => (
				<>
					{
						keywords.map(keyword => (
							<Tag key={keyword}>{keyword}</Tag>
						))
					}
				</>
			)
		},
		{
			title: 'No. of collections',
			dataIndex: 'collections',
			render: collections => (
				<>
					{
						collections.map(collection => (
							<Tag key={collection}>{collection}</Tag>
						))
					}
				</>
			)
		},
		{
			title: 'No. of Products',
			dataIndex: 'products',
			render: products => (
				<>
					{
						products.map(product => (
							<Tag key={product}>{product}</Tag>
						))
					}
				</>
			)
		},
		{
			title: 'Device',
			dataIndex: 'device',
		},
		{
			title: 'User type',
			dataIndex: 'user_type',
		}
	];

	const data = [
		{
			key: Key(1),
			keyword: 'Laptops',
			original_keyword: 'laptops',
			keyword_suggestions: ['laptop', 'case', 'charger'],
			collections: ['hardware', 'computer'],
			products: ['HP', 'Dell', 'Acer'],
			device: 'Mobile',
			user_type: 'Guest'
		},
		{
			key: Key(2),
			keyword: 'SSDs',
			original_keyword: 'ssd',
			keyword_suggestions: ['storage', 'sata', 'external', 'disk'],
			collections: ['hardware', 'computer', 'storage'],
			products: ['HP', 'Dell','Samsung', 'WD', 'Segate'],
			device: 'Desktop',
			user_type: 'User'
		},
		{
			key: Key(3),
			keyword: 'RAM',
			original_keyword: 'ram',
			keyword_suggestions: ['performance', 'ram', 'ddr3', 'ddr4'],
			collections: ['hardware', 'memory'],
			products: ['HP', 'Dell', 'Acer', 'Dataclip'],
			device: 'Mobile',
			user_type: 'Guest'
		},
	];

	const onChange = (pagination, filters, sorter, extra) => {
		console.log('params', pagination, filters, sorter, extra);
	}

	return (
		<Table columns={columns} dataSource={data} onChange={onChange} />		
	);
}
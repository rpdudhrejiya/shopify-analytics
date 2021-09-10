import React from "react";
import { Table, Tabs, Tag } from 'antd';

const { TabPane } = Tabs;

export default function Home() {
	
	const topSearchesKey = (key) => `top-searches-${key}`;
	
	const topSearchesColumns = [
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
	

	const topSearchesData = [
		{
			key: topSearchesKey(1),
			query: 'Dell Inspiration laptops',
			ctr: 85,
			users: 352
		},
		{
			key: topSearchesKey(2),
			query: 'HP Keyboard mouse combo',
			ctr: 25,
			users: 385
		},
		{
			key: topSearchesKey(3),
			query: 'Macbook refurbished',
			ctr: 8,
			users: 15
		},
		{
			key: topSearchesKey(4),
			query: 'ddr4 ram 16gb',
			ctr: 2,
			users: 84
		},
		{
			key: topSearchesKey(5),
			query: 'segate sata ssd 500gb',
			ctr: 4,
			users: 72
		},
	];

	const allSearchesKey = (key) => `all-searches-${key}`;

	const allSearchesColumn = [
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

	const allSearchesData = [
		{
			key: allSearchesKey(1),
			keyword: 'Laptops',
			original_keyword: 'laptops',
			keyword_suggestions: ['laptop', 'case', 'charger'],
			collections: ['hardware', 'computer'],
			products: ['HP', 'Dell', 'Acer'],
			device: 'Mobile',
			user_type: 'Guest'
		},
		{
			key: allSearchesKey(2),
			keyword: 'SSDs',
			original_keyword: 'ssd',
			keyword_suggestions: ['storage', 'sata', 'external', 'disk'],
			collections: ['hardware', 'computer', 'storage'],
			products: ['HP', 'Dell','Samsung', 'WD', 'Segate'],
			device: 'Desktop',
			user_type: 'User'
		},
		{
			key: allSearchesKey(3),
			keyword: 'RAM',
			original_keyword: 'ram',
			keyword_suggestions: ['performance', 'ram', 'ddr3', 'ddr4'],
			collections: ['hardware', 'memory'],
			products: ['HP', 'Dell', 'Acer', 'Dataclip'],
			device: 'Mobile',
			user_type: 'Guest'
		},
	];

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			filters: [
				{
					text: 'Joe',
					value: 'Joe',
				},
				{
					text: 'Category 1',
					value: 'Category 1',
					children: [
						{
							text: 'Yellow',
							value: 'Yellow',
						},
						{
							text: 'Pink',
							value: 'Pink',
						},
					],
				},
				{
					text: 'Category 2',
					value: 'Category 2',
					children: [
						{
							text: 'Green',
							value: 'Green',
						},
						{
							text: 'Black',
							value: 'Black',
						},
					],
				},
			],
			filterMode: 'tree',
			filterSearch: true,
			onFilter: (value, record) => record.name.includes(value),
			width: '30%',
		},
		{
			title: 'Age',
			dataIndex: 'age',
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: 'Address',
			dataIndex: 'address',
			filters: [
				{
					text: 'London',
					value: 'London',
				},
				{
					text: 'New York',
					value: 'New York',
				},
			],
			onFilter: (value, record) => record.address.startsWith(value),
			filterSearch: true,
			width: '40%',
		},
	];

	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
		},
		{
			key: '4',
			name: 'Jim Red',
			age: 32,
			address: 'London No. 2 Lake Park',
		},
	];
	
	const onChange = (pagination, filters, sorter, extra) => {
		console.log('params', pagination, filters, sorter, extra);
	}

	const onTabChanged = (key) => {
		console.log(key)
	}

	return (
		<Tabs defaultActiveKey="1" onChange={onTabChanged}>
			<TabPane tab="Top Searches" key="1">
				<Table columns={topSearchesColumns} dataSource={topSearchesData} onChange={onChange} />
			</TabPane>
			<TabPane tab="All Searches" key="2">
				<Table columns={allSearchesColumn} dataSource={allSearchesData} onChange={onChange} />
			</TabPane>
			<TabPane tab="Non-result searches" key="3">
				<Table columns={columns} dataSource={data} onChange={onChange} />
			</TabPane>
			<TabPane tab="Tranding" key="3">
				{/* <Table columns={columns} dataSource={data} onChange={onChange} /> */}
			</TabPane>
		</Tabs>
	);
}
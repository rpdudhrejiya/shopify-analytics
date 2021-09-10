import React from "react";
import { Col, Row, Card } from "antd";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SearchOutlined, DollarOutlined, LineChartOutlined } from '@ant-design/icons';
import ChartData from '../../Stub/Statistics/dashboard';

export default function Dashboard() {

	return (
		<div class="">
			<Row gutter={[16, 24]}>
				<Col span={12}>
					<Card title={<><SearchOutlined/>  Number of searches</>} bordered={true}>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste mollitia culpa, voluptatum nam dolores enim voluptates explicabo quas reiciendis fugiat consequatur magnam corrupti laudantium officiis repellat nisi aut dolorum esse!</p>
					</Card>
				</Col>
				<Col span={12}>
					<Card title={<><DollarOutlined/>  Search Revenue</>} bordered={true}>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste mollitia culpa, voluptatum nam dolores enim voluptates explicabo quas reiciendis fugiat consequatur magnam corrupti laudantium officiis repellat nisi aut dolorum esse!</p>
					</Card>
				</Col>
				<Col span={24}>
					<Card title={<><LineChartOutlined/>  Search composition</>} bordered={true}>
						<Row style={{ minHeight: 350 }}>
							<Col span={12}>
								<ResponsiveContainer>
									<AreaChart
										data={ChartData}
										margin={{
											top: 10,
											right: 30,
											left: 0,
											bottom: 0,
										}}
									>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="name" />
										<YAxis />
										<Tooltip />
										<Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
									</AreaChart>
								</ResponsiveContainer>
							</Col>
							<Col span={12}>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, minima. Dicta neque et, possimus labore unde deleniti, in temporibus reiciendis earum ipsa commodi ducimus fugit! Quod repudiandae sit temporibus tenetur.</p>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
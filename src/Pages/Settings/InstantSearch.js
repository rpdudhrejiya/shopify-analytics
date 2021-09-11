import React from "react";
import '../../Assets/styles/modules/settings/style.scss';
import { Col, Row, Card, Collapse, Tooltip } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';
import SettingListTile from "../../Components/Setting/SettingListTile";
const { Panel } = Collapse;

export default function InstantSearch() {
	const callback = (key) => {
		console.log(key);
	}

	return (
		<div className="search-setting">
			<Row gutter={24}>
				<Col span={12}>
					<Card title={<>Settings    <Tooltip placement="top" title="Basic settings for instant search box"><InfoCircleOutlined/></Tooltip></>} bordered={true}>
						<Collapse defaultActiveKey={['0']} onChange={callback}>
							<Panel header="General settings" key={0}>
								<SettingListTile
									title="Hide Logo"
									hint="If this is enabled, the Shopify Search Analytics logo won't be displayed. Available only for paid plans."
								/>
								<SettingListTile
									title="Search header (desktops)"
									hint="If it enabled, we display the title of search, product, and collection recommendations (on desktop devices). In this way, suggestion groups are better separated."
								/>
								<SettingListTile
									title="Search header (mobile)"
									hint="If it enabled, we display the title of search, product, and collection recommendations (on mobile devices). In this way, suggestion groups are better separated."
								/>
								<SettingListTile
									title="Show SKU"
									hint="If it is enabled, the SKU of the products are displayed."
								/>
								<SettingListTile
									title="Hide prices"
									hint="Use this setting to hide all prices in the search suggestions. Hiding prices would also hide discounts and discount badge too."
								/>
							</Panel>
						</Collapse>
					</Card>
				</Col>
				<Col span={12}>
					<Card title={<>Preview    <Tooltip placement="top" title="Basic settings for instant search box"><InfoCircleOutlined/></Tooltip></>} bordered={true}>
						
					</Card>
				</Col>
			</Row>
		</div>
	);
}
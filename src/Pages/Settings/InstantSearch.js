import React from "react";
import '../../Assets/styles/modules/settings/style.scss';
import { Col, Row, Card, Collapse, Tooltip, Input, Alert, Button, Typography, Divider } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';
import SettingListTile from "../../Components/Setting/SettingListTile";
import SortableList from "../../Components/Setting/SortableList";
import items from "../../Stub/Settings/CardItmes";
import zeroItems from "../../Stub/Settings/ZeroItems";
import FormModal from "../../Components/Setting/FormModal";
import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
const { Panel } = Collapse;
const { Text } = Typography;
export default function InstantSearch() {
	return (
		<div className="search-setting">
			<Row gutter={24}>
				<Col span={12}>
					<Card title="Settings" bordered={true}>
						<Collapse>
							<Panel 
								header={<>General settings    <Tooltip placement="top" title="Basic settings for instant search box."><InfoCircleOutlined/></Tooltip></>} 
								key={0}
							>
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
								<SettingListTile
									title="Hide out of stock products"
									hint="When turned on, products that are out of stock would not be included in search suggestions. Please enable our result page too to make it work on the search result page."
								/>
								<SettingListTile
									title="Layout"
									hint="You can decide how the search bar's dropdown panel layout should look like"
									isDropdown={true}
									optionValues={["Vertical", "Horizontal"]}
								/>
								<SettingListTile
									title="Language"
									hint="Please select the store's language or leave on Auto-detect. When Auto-detect is selected, we will try to get it from your store."
									isDropdown={true}
									optionValues={["Auto-detect", "Arabic", "Bulgarian", "Chinese(Simplified)", "Chinese(Traditional)", "Czech", "Danish", "Dutch"]}
								/>
							</Panel>
							<Panel header={<>Design settings    <Tooltip placement="top" title="Modify the look of the instant search box."><InfoCircleOutlined/></Tooltip></>} key={1}>
								<Input.Group compact>
									<Input 
										addonBefore="Price color" 
										addonAfter={<Tooltip placement="top" title="The color of the price"><InfoCircleOutlined/></Tooltip>} 
										defaultValue="#E52548"
										type="color"
									/>
								</Input.Group><br/>
								<Input.Group compact>
									<Input 
										addonBefore="Price hover color" 
										addonAfter={<Tooltip placement="top" title="The color of the price when a product is hovered on. Hover on a product suggestion to see changes."><InfoCircleOutlined/></Tooltip>} 
										defaultValue="#FFFFFF"
										type="color"
									/>
								</Input.Group>
							</Panel>
							<Panel header={<>During search ordering     <Tooltip placement="top" title="With these settings, you can minimize the number of characters typed and increase search conversion."><InfoCircleOutlined/></Tooltip></>} key={2}>
								<SortableList items={items}/>
							</Panel>
							<Panel header={<>Zero character search <Tooltip placement="top" title="These settings can help cold visitors who haven't hit a single key yet, because they don't know what to look for."><InfoCircleOutlined/></Tooltip></>} key={3}>
								<Collapse defaultActiveKey={['0']}>
									<Panel header="General settings" key={0}>
										<SettingListTile
											title="Popular products sort order"
											hint='Use this setting to set how the "Trending products" are ordered.'
											isDropdown={true}
											optionValues={["View count", "Order count"]}
										/>
										<p>
											View count: products with the most product page views in the last 30 days will be shown.
										</p>
									</Panel>
									<Panel header="During zero character search ordering" key={1}>
										<SortableList items={zeroItems}/>
									</Panel>
								</Collapse>
							</Panel>
							<Panel header={<>Badge settings    <Tooltip placement="top" title="Show or hide badges in the search suggestions."><InfoCircleOutlined/></Tooltip></>} key={4}>
							<SettingListTile
									title="Show new badge"
									hint="Use this setting to show or hide the new badge which shows on a product that was created less than one month ago."
								/>
								<SettingListTile
									title="Show discount badge"
									hint="Use this setting to show or hide the discount percent badge which shows on a product that is on sale."
								/>
								<SettingListTile
									title="Stock statuses"
									hint="This settings shows or hides the stock statuses of products."
									isDropdown={true}
									optionValues={["In stocks only", "Hide", "All stock statuses"]}
								/>
							</Panel>
							<Panel header={<>Custom CSS (advanced)     <Tooltip placement="top" title="Style the instant search box to your liking (CSS knowledge needed)."><InfoCircleOutlined/></Tooltip></>} key={5}>
								<Alert message="Note that you may need to use '!important' in some cases." type="info" showIcon /><br/>
								<div className="list-tile">
									<p id="current">You can find all available styles <a href="#current">here.</a></p>
									<div>
										<Button disabled>Preview changes</Button>
									</div>
								</div>
								<CodeMirror
									value=''
									options={{
										mode: 'xml',
										lineNumbers: true
									}}
									onChange={(editor, data, value) => {
									}}
								/>
							</Panel>
							<Panel header={<>Sticky widget    <Tooltip placement="top" title="If your theme doesn't provide a search bar, you can use this floating search icon to help your visitors find the best products."><InfoCircleOutlined/></Tooltip></>} key={6}>
								<SettingListTile
									title="Show sticky widget"
									hint="Control when the sticky widget shows on your storefront. When set to 'Missing search input', we'll show the widget if there is no input on the current page. When set to 'Always', the widget would always be visible. When set to 'Never', the widget would not be visible"
									isDropdown={true}
									optionValues={["Missing search input", "Always", "Never"]}
								/>
								<SettingListTile
									title="Widget position"
									hint="Choose where you would like the sticky widget to be placed."
									isDropdown={true}
									optionValues={["Top right", "Top left", "Center right", "Center left", "Bottom right", "Bottom left"]}
								/>
								<FormModal/>
							</Panel>
							<Panel header={<>Full page search overlay    <Tooltip placement="top" title="A full-page overlay with a search input. It can increase your store's search conversion if your theme already provides a search bar and it is a must-have when sticky widget is enabled."><InfoCircleOutlined/></Tooltip></>} key={7}>
								<SettingListTile
									title="Show search overlay"
									hint="When set to 'Sticky widget click', we'll show a full page search overlay ONLY when the sticky search icon is clicked. When set to 'Always', we'll show the search overlay whenever a visitor clicks on any of the search icons or search inputs on the page."
									isDropdown={true}
									optionValues={["Sticky widget click", "Always"]}
								/>
								<div className="list-tile">
									<p>
									Search input placeholder &nbsp;  
										<Tooltip
											className="tooltip-icon"
											placement="top"
											title="Placeholder for the search input"
										>
										<InfoCircleOutlined/>
										</Tooltip>
									</p>
									<div>
										<Input></Input>
									</div>
								</div>
							</Panel>
							<Panel header={<>Custom search bar    <Tooltip placement="top" title="Easily add a search bar to your theme to help your visitors find what they're looking for instantly."><InfoCircleOutlined/></Tooltip></>} key={8}>
								<Collapse>
									<Panel header="Step 1 - Create snippet" key={0}>
										<p>Add the custom search bar snippet to your theme.</p>
										<Tooltip placement="top" title="We'll add a liquid file to your preferred theme. You can edit this file anytime.">
											<Button>Add snippets to theme</Button>
										</Tooltip>
										&nbsp;
										<Tooltip placement="top" title="Edit the basic styles of the custom search bar.">
											<Button>Edit snippets</Button>
										</Tooltip>
									</Panel>
									<Panel header="Step 2 - Include snippet" key={1}>
										<p>Copy the relevant code below and paste it anywhere you want the search bar to show on your store front.</p>
										<p>Desktop snippet</p>
										<Text code copyable>&#123;% render 'shopify-search-bar', mode: 'desktop' %&#125;</Text><br/><br/>
										<p>Mobile snippet</p>
										<Text code copyable>&#123;% render 'shopify-search-bar', mode: 'mobile' %&#125;</Text>
										<Divider />
										<p>See our recommended locations on where to include the relevant snippet.</p>
										<Tooltip placement="top" title="We'll give you recommendations on where to include the custom search bar.">
											<Button>Documentation</Button>
										</Tooltip>
										<Button type="link">Need some more help?</Button>
									</Panel>
								</Collapse>
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
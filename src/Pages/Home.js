import React from "react";
import { Tabs } from 'antd';
import TopSearches from "../Components/Home/TopSearches";
import AllSearches from "../Components/Home/AllSearches";
import NoResultSearches from "../Components/Home/NoResultSearches";
import TrandingSearches from "../Components/Home/TrandingSearches";

const { TabPane } = Tabs;

export default function Home() {

	const onTabChanged = (key) => {
		console.log(key)
	}

	return (
		<Tabs defaultActiveKey="1" onChange={onTabChanged}>
			<TabPane tab="Top Searches" key="1">
				<TopSearches />
			</TabPane>
			<TabPane tab="All Searches" key="2">
				<AllSearches />
			</TabPane>
			<TabPane tab="Non-result searches" key="3">
				<NoResultSearches />
			</TabPane>
			<TabPane tab="Tranding" key="4">
				<TrandingSearches />
			</TabPane>
		</Tabs>
	);
}
import React from "react";
import HelpCard from "../Components/Help/Card";
import { Row, Col, Typography, Collapse} from 'antd';
import Faqs from '../Stub/Help/faq';
import { WechatOutlined, SmileOutlined, MailOutlined  } from '@ant-design/icons';
import '../Assets/styles/modules/help/style.scss';

const { Title } = Typography;
const { Panel } = Collapse;

export default function Help() {

	const callback = (key) => {
		console.log(key);
	}

	const onRequestLiveChat = () => {
		console.info('Live chat')
	}

	const onVisitHelpCenter = () => {
		console.info('Visit help center')
	}

	const onSupportTicketRequest = () => {
		console.info('Support request')
	}

	return (
		<div className="search-help">
			<Row gutter={20} justify="center">
				<Col span={4}>
					<HelpCard
						Icon={WechatOutlined}
						title="Start live chat"
						body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis ab cupiditate maxime vitae, iure iste incidunt dignissimos sunt"
						onClick={onRequestLiveChat}
					/>
				</Col>
				<Col span={4}>
					<HelpCard
						Icon={SmileOutlined}
						title="Visit help center"
						body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis ab cupiditate maxime vitae, iure iste incidunt dignissimos sunt"
						onClick={onVisitHelpCenter}
					/>
				</Col>
				<Col span={4}>
					<HelpCard
						Icon={MailOutlined}
						title="Send support ticket"
						body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis ab cupiditate maxime vitae, iure iste incidunt dignissimos sunt"
						onClick={onSupportTicketRequest}
					/>
				</Col>
			</Row>
			<Title level={2} style={{ textAlign: 'center', margin: '60px 0' }}>Frequenty asked questions</Title>
			<Row justify="center">
				<Col span={12}>
					<Collapse defaultActiveKey={['0']} onChange={callback}>
						{
							Faqs.map((faq,index) => {
								return (
									<Panel header={faq.question} key={index}>
										<p>{faq.answer}</p>
									</Panel>
								)
							})
						}
					</Collapse>
				</Col>
			</Row>
		</div>
	);
}
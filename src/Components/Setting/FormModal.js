import React, { useState } from "react";
import { Modal, Button, Form, Input, Select } from 'antd';
const { TextArea } = Input;
export default function FormModal() {
	const [form] = Form.useForm();
	const [visibleModal,setvisibleModal] = useState(false);
	const showModal = () => {
		setvisibleModal(true);
	}
	const handleOk = () => {
		setvisibleModal(false);
  };

  const handleCancel = () => {
		setvisibleModal(false);
  };
	return (
		<>
			<Button type="link" onClick={showModal}>Would you like to customize the sticky widget?</Button>
			<Modal
				visible={visibleModal}
				title="Customization request"
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key="back" onClick={handleCancel}>
						Discard
					</Button>,
					<Button key="submit" type="primary" onClick={handleOk}>
						Submit
					</Button>,
				]}
			>
				<Form
					form={form}
					layout="vertical"
					autoComplete="off"
				>
					<div style={{ overflow: 'hidden' }}>
						<Form.Item
							name="email"
							label="Email"
							rules={[
								{ required: true, message: 'Please input your E-mail!', },
								{ type: 'email', message: 'The input is not valid E-mail!', },
							]}
						>
							<Input placeholder="example@example.com" allowClear />
						</Form.Item>
						<Form.Item
							name="feature"
							label="Feature"
							rules={[{required: true}]}
						>
							<Select defaultValue='Stickey widget'>
								<Select.Option value="Stickey widget">Stickey widget</Select.Option>
								<Select.Option value="Search overlay">Search overlay</Select.Option>
								<Select.Option value="Custom search bar">Custom search bar</Select.Option>
								<Select.Option value="Other">Other</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item
							name="Description"
							label="Description"
							rules={[{required: true, message: 'Please enter description!'}]}
						>
							<TextArea placeholder="Please describe what would you like us to customize" rows={4} />
						</Form.Item>
						<Form.Item
							name="Your store's password"
							label="Your store's password"
							rules={[{required: true, message: "Please enter your store's password!"}]}
						>
							<Input.Password placeholder="input password" />
						</Form.Item>
					</div>
				</Form>
			</Modal>
		</>
	)
};
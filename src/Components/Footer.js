import React from "react";
import { Layout } from 'antd';
const { Footer: AntFooter } = Layout;

export default function Footer(props) {
  return (
    <AntFooter
      className="app-footer"
      style={{ backgroundColor: 'white' }}
      {...props}
    >
      Copyright @ 2021 Shopify-Search
    </AntFooter>
  )
};
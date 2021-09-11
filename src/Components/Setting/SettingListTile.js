import React from "react";
import { Switch, Tooltip } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';

export default function SettingListTile(props) {

  const {
    title,
    hint,
    icon,
    value,
    onChange,
    tooltipProps,
    iconProps,
    switchProps,
    ...otherProps
  } = props;

  return (
    <div className="list-tile" {...otherProps}>
      <div>
        <p>
          {title} &nbsp;  
          <Tooltip
            className="tooltip-icon"
            placement="top"
            title={hint}
          >
            { icon || <InfoCircleOutlined {...iconProps}/> }
          </Tooltip>
        </p>
      </div>
      <Switch value={value} onChange={onChange} {...switchProps}/>
    </div>
  )
};
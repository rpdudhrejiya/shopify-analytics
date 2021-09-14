import React from "react";
import { Switch, Tooltip, Select } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';
const { Option } = Select;

export default function SettingListTile(props) {

  const {
    title,
    hint,
    icon,
    value,
    onChange,
    isDropdown,
    optionValues,
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
      {
        !isDropdown ? <Switch value={value} onChange={onChange} {...switchProps}/> : 
          (<Select defaultValue={optionValues[0]} style={{ width: 120 }} >
            {
              optionValues.map((item) => (
                <Option value={item}>{item}</Option>
              ))
            }
          </Select>)
      }
    </div>
  )
};
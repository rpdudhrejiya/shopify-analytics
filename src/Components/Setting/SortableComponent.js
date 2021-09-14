import React from 'react';
import { sortable } from 'react-sortable';
import { Card, Tooltip, InputNumber } from "antd";
import { InfoCircleOutlined, SwapOutlined } from '@ant-design/icons';
class Item extends React.Component {
  render() {
    return (
      <Card>
				<div class="list-tile" {...this.props}>
					<div>
						<p>
							<SwapOutlined/> &nbsp;
							{this.props.title} &nbsp;
							<Tooltip 
								placement="top" 
								title={this.props.hint}
								className="tooltip-icon"
							>
								<InfoCircleOutlined/>
							</Tooltip>
						</p>
					</div>
					{this.props.title==='Search history' ? 
						<div>
							Hits (Desktop) &nbsp;
							<InputNumber min={0} max={10} defaultValue={3} /> <br/><br/>
							Hits (Mobile) &nbsp;
							<InputNumber min={0} max={10} defaultValue={3} />
						</div> : 
						<div>
							Hits &nbsp;
							<InputNumber min={0} max={10} defaultValue={3} />
						</div> 
					}
				</div>
			</Card>
    )
  }
}
var SortableComponent = sortable(Item);
export default SortableComponent;
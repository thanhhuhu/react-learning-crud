import { Menu } from 'antd';
import {PieChartOutlined} from "@ant-design/icons";
import {Link, NavLink} from "react-router-dom";
const Header = () => {
    const items = [
        {
            label: <Link to='/'>Todo list</Link>,
            key: '1',
            icon: <PieChartOutlined />,
        },
        {
            label: <Link to='/note'>Note</Link>,
            key: '2',
            icon: <PieChartOutlined />,
        }
    ];
    return (
        <div
            style={{
                width: 350,
            }}
        >
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="horizontal"
                theme="light"
                items={items}
            />
        </div>

    )
}
export default Header
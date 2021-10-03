import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const routes = [{
    id: 'route-1',
    name: 'Home',
    pathname: '/'
}, {
    id: 'route-2',
    name: 'Difficulty',
    pathname: '/difficulty'
}, {
    id: 'route-3',
    name: 'Hash rate',
    pathname: '/hash-rate'
}];

const Navigation = () => (
    <Menu theme="dark" mode="horizontal">
        {routes.map(({ id, name, pathname }) => (
            <Menu.Item key={id}>
                <Link to={pathname}>{name}</Link>
            </Menu.Item>
        ))}
    </Menu>
);

export default Navigation;

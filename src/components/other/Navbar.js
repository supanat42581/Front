import React , { useState, useEffect }from 'react'
import { Layout, Menu, Row, Col, Button } from 'antd';
import LocalStorageService from '../../services/LocalStorageService';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import axios from '../../config/axios';


const { Header } = Layout;
const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);






function Navbar(props) {
    const [name, setName] = useState("");
    const [id, setId] = useState(0);

    const logout = () => {
        LocalStorageService.removeToken();
        props.setRole("guest");
    };

    useEffect(() => {
      
        const token = LocalStorageService.getToken();

        if (token) {
            const user = jwtDecode(token);
            setName(user.name);
            setId(user.id);
        }
    }, []);
    
    
    return (
    
    
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={24} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Layout className="layout" >
                            <div className="logo" />
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['key']} style={{display:"flex", justifyContent:"flex-end", alignItems:"center"}}>
                                <Menu.Item key="1"><Link to ="/course">Course</Link></Menu.Item>
                                <Menu.Item key="2"><Link to ="/booking">Booking</Link></Menu.Item>
                                <Menu.Item key="3"><Link to ="/cart">Cart</Link></Menu.Item>
                                <Search placeholder="input search text" onSearch={value => console.log(value)} style={{width:"20vw"}} senterButton />
                                <Button type="primary" danger onClick={logout} setRole={props.setRole}>Logout</Button>
                            </Menu>
                        </Layout>
                    </Col>
                        
                    <Col span={8}>
                        
                    </Col>
                </Row>
            </Col>
        </Row>

    )
}

export default Navbar

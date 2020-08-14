import React , { useState, useEffect, useContext }from 'react'
import { Layout, Menu, Row, Col, Button } from 'antd';
import LocalStorageService from '../../services/LocalStorageService';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import axios from '../../config/axios';
import { SearchContext } from '../../context/SearchContext';


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

    const {searchTerm, setSearchTerm} = useContext(SearchContext)

    const logout = () => {
        LocalStorageService.removeToken();
        props.setRole("guest");
    };


    const fetchData = async()=>{
        const search = await axios.get("/course/search")

         
     
     }


    useEffect(() => {
      
        const token = LocalStorageService.getToken();

        if (token) {
            const user = jwtDecode(token);
            setName(user.name);
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
                                <Search placeholder="input search text" onSearch={value => setSearchTerm(value)} style={{width:"20vw"}} senterButton />
                                 <Button>{name}</Button>
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

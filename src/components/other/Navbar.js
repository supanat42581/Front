import React , { useState, useEffect, useContext }from 'react'
import { Layout, Menu, Row, Col, Button} from 'antd';
import LocalStorageService from '../../services/LocalStorageService';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import axios from '../../config/axios';
import { SearchContext } from '../../context/SearchContext';
import logo from '../../components/picture/logo.jpg'
import { SmileTwoTone } from '@ant-design/icons';

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
                    <Col span={24} style={{display:"flex", justifyContent:"start", alignItems:"center"}}>
                        <Layout className="layout" >
                            <div className="logo" />
                            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['key']} style={{display:"flex", justifyContent:"flex-start", alignItems:"center", backgroundColor:"#b5f5ec"}}>
                                <Col style={{justifyContent:"center", alignItems:"center"}}><img src={logo} alt="logo" style={{ height: "70px", width: "100px", borderRadius:"10%", margin:"5px"}}/></Col>
                                <Menu.Item key="1"><Link to ="/course"><b>Course</b></Link></Menu.Item>
                                <Menu.Item key="3"><Link to ="/cart"><b>Cart</b></Link></Menu.Item>
                                <Search placeholder="input search text" onSearch={value => setSearchTerm(value)} style={{width:"45vw", marginRight:"10px"}} senterButton />
                                <Button style={{marginRight:"10px", width:"150px"}}><SmileTwoTone />Howdy : {name}</Button>
                                <Button type="primary" primary style={{marginRight:"10px"}}><Link to ="/addcourse"> Add Course </Link></Button>
                                <Button type="primary" danger onClick={logout} setRole={props.setRole}>Logout</Button>
                            </Menu>
                        </Layout>
                    </Col>
                </Row>
    )
}

export default Navbar

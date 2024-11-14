import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Row, Button} from 'reactstrap'
import logo from '../assets/travel.avif'
import { RiMenuFill } from "react-icons/ri";

const nav_links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'#',
        display:'About'
    },
    {
        path:'/tour',
        display:'Tours'
    },
]


function Header() {
  return (
    <div className='header'>
        <Container>
            <Row>
                <div className="nav_wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="" width={'100px'} />
                    </div>

                    <div className="navigation">

                        <ul className="menu d-flex align-items-center gap-5"> 
                       {
                            nav_links.map((item,index)=>(
                                <li className='nav_item' key={index}>
                                    <NavLink to={item.path} className={navClass=> navClass.isActive ? 'active_link':''}>{item.display}</NavLink>
                                </li>
                            ))   
                       }
                        </ul>
                    </div>

                    <div className="nav_right d-flex align-items-center gap-4">
                        <div className="nav_btns d-flex align-items-center gap-4">
                            <Button className='btn  btn-secondary'> <Link to={'/login'}>Login</Link></Button>
                            <Button className='btn btn-primary'> <Link to={'register'}>Register</Link></Button>
                        </div>

                        <span className='mobile_menu'>
                        <RiMenuFill />
                        </span>

                    </div>

                </div>
            </Row>
        </Container>
        
    </div>
  )
}

export default Header
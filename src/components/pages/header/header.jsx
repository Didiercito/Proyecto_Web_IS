import './header.css';
import { Input } from '../../iu/input/input';
import { Link } from '../../iu/link/link';
import logo from '../../../assets/img/logo.png'
import { FaCog } from 'react-icons/fa';

export function Header() {
    return (
        <header id="header">
            <div className="container d-flex-beetween">
                <div className="d-flex-beetween">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="global-search">
                        <Input placeholder="Buscar" label={false}></Input>
                    </div>
                    <nav className="global-menu">
                        <Link key="home" valueStr="Inicio" />
                        <Link key="groups" valueStr="Grupos" />
                        <Link key="articles" valueStr="Articulos" />
                        <Link key="shared" valueStr="Comunicados" />
                    </nav>
                </div>
                <div className="">
                    <nav>
                        <Link key="profile" valueStr="Perfil" />
                        <Link key="settings" icon={<FaCog />}  />
                    </nav>
                </div>
            </div>
        </header>
    );        
}
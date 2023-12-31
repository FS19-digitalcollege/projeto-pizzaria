import { ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {

    const [cartVisible, setCartVisible] = useState<boolean>(false);
    const location = useLocation();
    
    return(
        <>
            <HeaderContainer>
                <HeaderActions>
                    <HeaderLogo>LOGO</HeaderLogo>
                    <HeaderMenu>
                        <li>
                            <a
                                href="/"
                                className={location.pathname === '/' ? "active" : ""}
                            >Início</a>
                        </li>
                        <li>
                            <a
                                href="/cardapio"
                                className={location.pathname === '/cardapio' ? "active" : ""}
                            >Cardápio</a>
                        </li>
                        <li>
                            <a
                                href="/promocoes"
                                className={location.pathname === '/promocoes' ? "active" : ""}
                            >Promoções</a>
                        </li>
                    </HeaderMenu>
                </HeaderActions>
                <HeaderActions>
                    <HeaderBTN href="/entrar">Entrar</HeaderBTN>
                    <ShoppingCart
                        className="icon"
                        size={24}
                        onClick={() => setCartVisible(!cartVisible)}
                    />
                    <HeaderCart className={cartVisible ? "active" : ""} />
                </HeaderActions>
            </HeaderContainer>
        </>
    );
}

const HeaderContainer = styled.header`
    width: 100%;
    background-color: #6B0504;
    padding: 16px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #F4796B;

    & .icon{
        background-color: white;
        width: 50px;
        height: 50px;
        padding: 12px;
        border-radius: 25px;
        cursor: pointer;
    }
`;

const HeaderLogo = styled.h1`
    font-size: 44px;
    font-weight: bold;
    color: #FFFFFF;
`;

const HeaderMenu = styled.ul`
    display: flex;
    gap: 16px;

    & li a{
        font-size: 16px;
        color: #FFFFFF;
        line-height: 40px;
        display: block;
        position: relative;

        &.active{
            color: #F4796B;
        }

        &.active::after{
            content: "";
            width: 100%;
            height: 4px;
            border-radius: 2px;
            background-color: #F4796B;
            position: absolute;
            top: 100%;
            left: 0;
        }
    }
`;

const HeaderActions = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    position: relative;
`;

const HeaderBTN = styled.a`
    display: block;
    height: 46px;
    line-height: 46px;
    padding: 0 26px;
    background-color: #FFFFFF;
    color: #bd0000;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
`;

const HeaderCart = styled.div`
    width: 250px;
    height: 300px;
    background-color: #FFFF00;
    position: absolute;
    top: calc(100% + 16px);
    right: 0;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transition: all ease 200ms;

    &.active{
        opacity: 1;
        visibility: visible;
    }

    &::before{
        content: "";
        border: 6px solid transparent;
        border-top: 0;
        border-bottom-color: #FFFF00;
        position: absolute;
        bottom: 100%;
        right: 22px;
    }
`;

export default Header;

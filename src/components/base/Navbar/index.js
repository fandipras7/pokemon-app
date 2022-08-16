import React from "react";
import { Link } from 'react-router-dom'
import style from "./navbar.module.css"
import logoPokemon from "../../../assets/images/logoPokemon.png"
import iconPlus from "../../../assets/icons/plus-lg.svg"

const Navbar = ({ page }) => {
    return (
        <>
            <div className={`fluid-container align-item-center ${style.navbar}`}>
                <ul className="mt-4">
                    {page === 'home' ? (
                        <ul>
                            <li className={"float-start " + style.link}>
                                <Link to="/">
                                    <img className="mt-3" src={logoPokemon} alt="logoPokemon" />
                                </Link>
                            </li>
                            <li className={"float-end " + style.link}>
                                <Link to="/AddPokemon">
                                    <div className={style.frame}>
                                        <img  className={style.plusIcon} src={iconPlus} alt="logoPokemon" />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    ): (
                        <li className={"float-start " + style.link}>
                        <Link to="/">
                            kembali
                        </Link>
                    </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default Navbar;

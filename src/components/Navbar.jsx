import React from 'react';
import {Link} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';

function Navbar({title, links, socials}) {
    const [open, setOpen] = React.useState(false);
    return (
        <ul className={"navList " + (open ? "" : "closed")}>
            <li className="title">
                <h1>{title}</h1>
                <GiHamburgerMenu className={"menuButton " + (open ? "open" : "")} onClick={() => setOpen(!open)} />
            </li>
            <div className={"dropdown " + (open ? "" : "closed")}>
                <div className={"links " + (open ? "" : "closed")}>
                    {links.map(link => {
                        const {id, url, text} = link;
                        return (
                            <li key={id}><Link onClick={() => setOpen(false)} to={url}>{text}</Link></li>
                        )
                    })}
                </div>
                <div className={"socials  " + (open ? "" : "closed")}>
                    {socials.map(social => {
                        const {id, url, icon} = social;
                        return (
                            <li key={id}><Link onClick={() => setOpen(false)} to={url}>{icon}</Link></li>
                        )
                    })}
                </div>
            </div>
        </ul>
    )
}

export default Navbar

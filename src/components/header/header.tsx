'use client';
import Image from 'next/image';
import { ReactElement } from 'react';
import Link from 'next/link';

import './header.styles.css';
import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { MenuLink } from '@data-types/menu-link.type';
import { useContactContext } from '@contexts/contact.context';
import smilingMonkImage from '@public/smiling_monk.jpeg';

export const Header = ({ menuLinks }: { menuLinks: MenuLink[] }): ReactElement => {
    const { setIsOpen } = useContactContext();

    const filteredMenuLinks = menuLinks
        .filter((link: MenuLink) => link.name !== 'home')
        .filter((link: MenuLink) => link.name !== 'contact');

    return (
        <header>
            <Link href="/" className="profile-link">
                <Image src={smilingMonkImage}
                    alt="Smiling Monk"
                    className="profile-image"
                    data-testid="mock-static-image" />
            </Link>
            <nav className="primary-navigation">
                <ul>
                    <li key="contact">
                        <button className="nav-link" onClick={() => setIsOpen(true)}>Contact</button>
                    </li>
                    {filteredMenuLinks.map(({ name, link }) => {
                        return name.includes('projects') ? (
                            <li key={name}>
                                <Link href="/#projects" className="nav-link">
                                    {capitalizeFirstLetter(name)}
                                </Link>
                            </li>
                        ) : (
                            <li key={name}>
                                <Link href={link} className="nav-link">
                                    {capitalizeFirstLetter(name)}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};

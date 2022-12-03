import React from 'react';
import useNavbar from '../../talons/navbar';

const Navbar = () => {
    const talonProps = useNavbar();
    const { handleNavbarToHomePage, handleNavbarToYourProject, handleNavbarToCreateProject } = talonProps;

    return (
        <div style={{ display: 'grid' }}>
            <p>Nav bar</p>
            <button onClick={(handleNavbarToHomePage)}>home page</button>
            <button onClick={handleNavbarToYourProject}>your project</button>
            <button onClick={handleNavbarToCreateProject}>create project</button>
        </div>
    );
};

export default Navbar;
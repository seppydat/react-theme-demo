import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const useNavbar = (props = {}) => {
    const history = useHistory();

    const handleNavbarToHomePage = useCallback(() => {
        history.push('/');
    }, [history]);

    const handleNavbarToYourProject = useCallback(() => {
        history.push('/your-project');
    }, [history]);

    const handleNavbarToCreateProject = useCallback(() => {
        history.push('/create-project');
    }, [history]);

    return {
        handleNavbarToHomePage,
        handleNavbarToYourProject,
        handleNavbarToCreateProject
    };
};

export default useNavbar;
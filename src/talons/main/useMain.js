import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import Dashboard from '../../components/dashboard';
import PageNotFound from '../../components/pageNotFound';
import CreateProject from '../../components/createProject';
import YourProject from '../../components/yourProject';

const useMain = (props = {}) => {
    const location = useLocation();
    const { pathname } = location;

    const getComponentRenderMapping = useCallback(() => {
        switch (pathname) {
            case '/': {
                return Dashboard;
            }
            case '/create-project': {
                return CreateProject;
            }
            case '/your-project': {
                return YourProject;
            }

            default: {
                return PageNotFound;
            }
        }
    }, [pathname]);

    const ComponentRender = getComponentRenderMapping();

    return {
        ComponentRender
    };
};

export default useMain;
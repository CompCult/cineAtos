import { getToken } from './auth';
import { Response } from './Response';

export const authentication = (): boolean => {
    const userType: Response = getToken();
    let canAccess: boolean = false;

    if (userType.type === 'gestor') {
        canAccess = true;
    }

    if (userType.type === 'professor' && userType.can_edit) {
        canAccess = true;
    }

    return canAccess;
}
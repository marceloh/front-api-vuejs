import Cookie from 'js-cookie';

export default {
    auth(to, from, next) {
        const token = Cookie.get('_myapp_token');
        //add ajax para o backend para verificar a validade do token
        
        if (!token) {
            next('/login');
        }

        next();
    }
}
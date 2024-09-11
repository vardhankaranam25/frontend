import router from './router.js'

export const initializeRoutes = (app) => {
    app.use('/', router)
}

export default initializeRoutes;
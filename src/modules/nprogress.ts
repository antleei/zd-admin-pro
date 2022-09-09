import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { router } from './router'

NProgress.configure({
    showSpinner: false,
    easing: 'ease',
    speed: 400,
    trickleSpeed: 200,
    minimum: 0.3,
})

export default () => {
    router.beforeEach(() => { NProgress.start() })
    router.afterEach(() => { NProgress.done() })
}

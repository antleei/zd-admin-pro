import { formatModules } from './helper'

const modules = import.meta.glob('./zh-CN/**/*.ts', {
    import: 'default',
    eager: true,
})

export default formatModules(modules)

import { formatModules } from './helper'

const modules = import.meta.glob('./en/**/*.ts', {
    import: 'default',
    eager: true,
})

export default formatModules(modules)

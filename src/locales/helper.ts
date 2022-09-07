export function formatModules(modules: any) {
    let result: any = {}

    Object.keys(modules).forEach((key) => {
        const defaultModule = modules[key]

        if (!defaultModule)
            return

        result = { ...result, ...defaultModule }
    })
    return result
}

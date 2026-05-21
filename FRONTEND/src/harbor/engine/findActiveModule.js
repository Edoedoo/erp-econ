
export default function findActiveModule(modules, pathname) {
    return modules.find(
        module => module.route === pathname
    )

}
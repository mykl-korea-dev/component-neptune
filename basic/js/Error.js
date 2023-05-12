export default function errorMessage({
    message = "",
    component = "",
    element = "",
                                     }) {
    console.error(`Error: Message: ${message},
        Component: ${component},
        Element: ${element}
    `)
}
import { getCurrentTheme } from "./functions"

export var navLinkStyle = () => {
    return {
        textDecoration: 'none',
        margin: '5px',
        color:  'inherit'
    }
}

export var commonButtonStyle = ({theme}) => {
    return {
        backgroundColor: theme.color,
        color: theme.font,
        borderRadius: '5px',
        ppearance: 'none',
        alignItems: 'center',
        borderStyle: 'none',
        cursor: 'pointer',
        fontWeight: 500,
        height: '24px'
    }
}
export function inputStyle ({theme},error) {
    return ({
        height: '25px',
        width: '200px',
        borderRadius: '5px',
        margin: '5px',
        color: theme.font,
        background: theme.transparent,
        border: error ? `1px solid red` : 'none'
    })
}


const name = (props) => {
    
    props.sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }))

}

export default name;
const name = (props) => {

    props.sort((a, b) => b.name.localeCompare(a.name, 'es', { sensitivity: 'base' }))
    console.log(props)
}

export default name;
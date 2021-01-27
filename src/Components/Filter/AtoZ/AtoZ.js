const name = (props) => {
    console.log(props)
    props.Data.sort(function(a,b){
        if(parseInt(a.name) > parseInt(b.name)){
            // console.log(`Return 1 for ${a.name} and ${b.name}`) 
            return 1 
        }
        if (parseInt(a.name) < parseInt(b.name)){
            // console.log(`Return -1 for ${a.name} and ${b.name`)
            return -1
        }
        return 0;
    })
}

export default name;
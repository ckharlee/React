import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CopyRight from './CopyRight'
function Display({name, age, description, level, image}){


    return(<Card style={{backgroundColor: "rgb(86, 180, 49)"}}>
          (<Card style={{Shadow: "rgb(207, 207, 35)"}}>

          </Card>
        <CardContent>
    <h1>{name}</h1>
        
    </CardContent>
        <CardMedia component = 'img' height ='230' image={image} alt='no image loaded' />
        <CardContent>   
        <h3>Age: {age}</h3>
        <p>Description: {description}</p>
        <p>level: {level}</p>
            <CopyRight />


        </CardContent>
        </Card>



    );
}

export default Display;




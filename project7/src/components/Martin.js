import Grid from '@mui/material/Grid';
import Display from './Display';
import Bob from '../im/Bob.jpg'
import MamaPain from '../im/MamaPain.jpg'
import Jerome from '../im/Jerome.jpg'


function Martin(){
const MartinInfo= [{
    level:'Basic',
    name:'Bob From Marketing',
    age:'39',
    description:'Horrible dancing skills, but atleast his cowboy boots and jacket match.',
    image: Bob,
},
{
    level:'Lengendary',
    name:'Mama Pain',
    age:'78',
    description:'Leathal come backs, she can make any adult cry.',
    image: MamaPain,

},
{
    level:'Intermediate',
    name:'Jerome',
    age:'50',
    description:'The original playa from the Himalayas . Use this card to get out of any sticky situation.',
    image: Jerome,
}
]


    return(<Grid container spacing={2}>
        {MartinInfo.map((Martin) =>{
            return <Grid item xs={4}>
                <Display level={Martin.level} name={Martin.name} age={Martin.age} 
                description={Martin.description} image={Martin.image} />

            </Grid>
        })

        }

    </Grid>); 
}
export default Martin;
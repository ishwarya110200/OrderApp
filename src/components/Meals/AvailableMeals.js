import classes from './AvailableMelas.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS=[
{
    id:'m1',
    name:'chicken briyani',
    description:'This is a delectable dish prepared out of rice, chicken, and a melange of spices. ',
    price:250,
},
{
    id:'m2',
    name:'Fish Fry',
    description:'Fish are marinated in salt and turmeric and then fried in mustard oil.',
    price:150,
},

{
    id:'m3',
    name:'Veg Meals',
    description:'An India Special',
    price:200,
},

{
    id:'m4',
    name:'Barbecue Burger',
    description:'American, raw, meaty',
    price:250,
},

];


const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem 
    id = {meal.id}
    key = {meal.id} 
    name={meal.name} 
    description={meal.description} 
    price={meal.price}
    />
    ));
    return(
    <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
    );

};
export default AvailableMeals;
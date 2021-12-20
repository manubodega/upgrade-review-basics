const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const categories = []

for (let val of movies){
    // console.log(val.categories)
    for (let cat of val.categories){
        // console.log(cat)
        if (categories.includes(cat) == false){
            categories.push(cat)
        }
    }
    
}
console.log(categories)

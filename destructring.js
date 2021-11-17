const  fish = { id:'43', name:'King Hilsha', price: '9000', 
            phone: '0140170000', address:'padma, chadpura', dress: 'silver'
        }
    
    // const price = fish.price;
    // const phone = fish.phone;
    // const address = fish.address;
    // const dress = fish.dress;

    const {price, phone, address, dress} = fish
    
    console.log( price, phone, address, dress);

    const company ={ name:'Sea Beach', 
    ceo:{ name:'Shaykot_Selim', id:'43500', food:'Kazu-Badam'},
    web:{ work:'Website-Development', employ:'50', framework:'Next js'}
    }

    // const food = company.ceo.food;
    // const employ = company.web.employ;
    // const id = company.ceo.id;
    // const work = company.web.work;
    // const name = company.ceo.name;
    // const framework = company.web.framework;
    const {name, id, food,} = company.ceo;
    const { work, framework, employ} = company.web; 


    console.log(name, id, work, framework, employ, food);
let menu = {
    "mess": "CGC Hostel",
    "week": "Feb/Mar, 2024",
    "days": [    //days is an array with objects( 7 mon,tue,wed...) as a value
      
    {
        "day": "SUNDAY",
        "date": "3rd Mar, 2024",
        "meals": [
          {
            "meal": "BREAKFAST",
            "items": [
              "Paratha (Choice of filling)",
              "Fruits",
              "Achaar",
              "Tea/Coffee"
            ]
          },
          {
            "meal": "LUNCH",
            "items": [
              "Green Salad",
              "Dal Makhani",
              "Jeera Rice",
              "Seasonal Vegetable",
              "Papad"
            ]
          },
          {
            "meal": "DINNER",
            "items": [
              "Green Salad",
              "Veg Pulao",
              "Kadai Paneer",
              "Raita",
              "Papad"
            ]
          }
        ]
      },
  




    {
        "day": "MONDAY",
        "date": "26th Feb, 2024",
        "meals": [      //meals is an array with objects(3 bf,lnh,dnr) as a value 
          {
            "meal": "BREAKFAST",
            "items": [
              "Mix Veg Prantha",
              "Curd/Butter",
              "Achaar",
              "Tea/Milk"
            ]
          },
          {
            "meal": "LUNCH",
            "items": [
              "Green Salad",
              "Dal Makhani",
              "Aloo Gajjar Mattar",
              "Rice",
              "Chappati",
              "Mix Veg Raita",
              "Achaar"
            ]
          },
          {
            "meal": "DINNER",
            "items": [
              "Green Salad",
              "Dal tadka Punjabi",
              "Mattar Methi Malai",
              "Rice",
              "Chappati",
              "Achaar"
            ]
          }
        ]
      },
      {
        "day": "TUESDAY",
        "date": "27th Feb, 2024",
        "meals": [
          {
            "meal": "BREAKFAST",
            "items": [
              "Aloo Prantha",
              "Curd/Butter",
              "Achaar",
              "Tea/Milk"
            ]
          },
          {
            "meal": "LUNCH",
            "items": [
              "Green Salad",
              "Rajmah Raseela",
              "Nutri Masala",
              "Rice",
              "Chappati",
              "Plain Curd",
              "Achaar"
            ]
          },
          {
            "meal": "DINNER",
            "items": [
              "Green Salad",
              "Dal Urad sabut",
              "Aloo Gobhi Mattar",
              "Rice",
              "Chappati",
              "Achaar"
            ]
          }
        ]
      },
      {
        "day": "WEDNESDAY",
        "date": "28th Feb, 2024",
        "meals": [
          {
            "meal": "BREAKFAST",
            "items": [
              "Veg Poha",
              "Cornflakes/Daliya",
              "Achaar",
              "Tea/Milk"
            ]
          },
          {
            "meal": "LUNCH",
            "items": [
              "Green Salad",
              "Kale Cholley",
              "Jeera Aloo",
              "Rice",
              "Chappati",
              "Boondi Raita",
              "Achaar"
            ]
          },
          {
            "meal": "DINNER",
            "items": [
              "Green salad",
              "Mattar Paneer",
              "Chicken Curry",
              "Onion Pulao",
              "Chappati",
              "Achaar"
            ]
          }
        ]
      },
      {
        "day": "THURSDAY",
        "date": "29th Feb, 2024",
        "meals": [
          {
            "meal": "BREAKFAST",
            "items": [
              "Gobhi Prantha",
              "Curd/Butter",
              "Achaar",
              "Tea/Milk"
            ]
          },
          {
            "meal": "LUNCH",
            "items": [
              "Green Salad",
              "Kadhi Pakora",
              "Methi Paratha",
              "Rice",
              "Chappati",
              "Achaar"
            ]
          },
          {
            "meal": "DINNER",
            "items": [
              "Green Salad",
              "Malai Kofta",
              "Bhindi Masala",
              "Rice",
              "Chappati",
              "Achaar"
            ]
          }
        ]
      },
      {
        "day": "FRIDAY",
        "date": "1st Mar, 2024",
        "meals": [
          {
            "meal": "BREAKFAST",
            "items": [
              "Poha",
              "Upma/Idli",
              "Achaar",
              "Tea/Coffee"
            ]
          },
          {
            "meal": "LUNCH",
            "items": [
              "Green Salad",
              "Chole Bhature",
              "Aloo Matar Sabzi",
              "Rice",
              "Achaar"
            ]
          },
          {
            "meal": "DINNER",
            "items": [
              "Green Salad",
              "Veg Pulao",
              "Kadai Paneer",
              "Raita",
              "Papad"
            ]
          }
        ]
      },
      {
        "day": "SATURDAY",
        "date": "2nd Mar, 2024",
        "meals": [
          {
            "meal": "BREAKFAST",
            "items": [
              "Bread Omelette",
              "Fruits",
              "Achaar",
              "Tea/Coffee"
            ]
          },
          {
            "meal": "LUNCH",
            "items": [
              "Green Salad",
              "Rajma Chawal",
              "Aloo Gobi Sabzi",
              "Achaar"
            ]
          },
          {
            "meal": "DINNER",
            "items": [
              "Green Salad",
              "Veg Biryani",
              "Dahi Baingan",
              "Raita",
              "Papad"
            ]
          }
        ]
      }
    ]      //closing -- days is an array with objects(7 mon,tue,wed...) as a value
  };  //const menu ==closing
alert(menu.days[day].meals[i].meals)

  function getTodayDay(){
    const d = new Date();
    let dayy = d.getDay();
    return dayy
}
function HandleOnClick(params) {
    // alert(params)
    if(params<=6){
        displayMenu(params)
    }
    else if(params==99){
        const today=getTodayDay()
        displayMenu(today)
    }
    else if(params==999){
        const tomorrow=getTodayDay()
        displayMenu(tomorrow+1)

    }
}
function displayMenu(day) {  //day b/w 0 to 6
   // Assuming 'day' is already defined and holds a valid index between 0 and 6

let weather_body = document.querySelector('.w-report');

let tableHTML = `
  <table>
    <thead>
      <tr>
        <th>Time</th>
        <th>Items</th>
      </tr>
    </thead>
    <tbody>`;

// Get the selected day's meals
const meals = menu.days[day].meals;

// Loop through each meal and create table rows
for (let i = 0; i < meals.length; i++) {
  tableHTML += `
    <tr>
      <td>${meals[i].meal}</td>
      <td>
        <ul class="items">`;

  // Loop through each item in the current meal and create list items
  for (let j = 0; j < meals[i].items.length; j++) {
    tableHTML += `<li>${meals[i].items[j]}</li>`;
  }

  tableHTML += `</ul>
      </td>
    </tr>`;
}

tableHTML += `</tbody></table>`;

weather_body.innerHTML = tableHTML;







    
}


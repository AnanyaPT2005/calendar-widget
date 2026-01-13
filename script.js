function updateCalender(){
    const day=new Date();
    const date=day.getDate();
    const monthName=["January","February","March","April","May","June"
        ,"July","August","September","October","November","December"
    ];

    const month=monthName[day.getMonth()];
    document.getElementById('day').textContent=date;
    document.getElementById('month').textContent=month;
}

updateCalender();

// {
//   "name": "electron-app",
//   "version": "1.0.0",
//   "main": "main.js",
//   "scripts": {
//     "start": "electron ."
//   },
//   "devDependencies": {
//     "electron": "^39.2.7",
//     "electron-builder": "^26.4.0",
//     "electronmon": "^2.0.4"
//   }
// }
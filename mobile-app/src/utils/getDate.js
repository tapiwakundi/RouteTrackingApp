export const getDate = () => {
    var now = new Date();   
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var weekday = days[ now.getDay() ];
    var month = months[ now.getMonth() ];
    var day = now.getDate()

    return `${weekday}, ${month} ${day}`
    
}
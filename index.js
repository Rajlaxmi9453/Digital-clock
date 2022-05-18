function showTime()
{
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let seconds = time.getSeconds();
    let day = time.getDay();
let am_pm = "AM";
    if(hour>12)
    {
        hour = hour-12;
        am_pm = "PM";
    }
    if(hour == 0)
    {
        am_pm="AM";
    }
    if(hour<10)
    {
        hour = "0" + hour;
    }
    if(min<10)
    {
        min="0" + min;
    }
    if(seconds<10)
    {
        seconds = "0" + seconds;
    }
    let currentTime = hour +":" + min + ":" + seconds +"  " + am_pm;
    document.getElementById("Clock").innerHTML = currentTime;
    let dayName = "Monday";
    switch(day)
    {
        case 0:
            dayName="Sunday";
        break;
        case 1:
            dayName="Monday";
        break;
        case 2:
            dayName="Tuesday";
        break;
        case 3:
            dayName="Wednesday";
        break;
        case 4:
            dayName="Thursday";
        break;
        case 5:
            dayName="Friday";
        break;
        case 6:
            dayName="Saturday";
        break;
    }
    let d = time.getDate();
    let m = time.getMonth();
    let y = time.getFullYear();
    let mo="January";
    switch(m)
    {
        case 0:
            mo="January";
        break;
        case 1:
            mo="February";
        break;
        case 2:
            mo="March";
        break;
        case 3:
            mo="April";
        break;
        case 4:
            mo="May";
        break;
        case 5:
            mo="June";
        break;
        case 6:
            mo="July";
        break;
        case 7:
            mo="August";
        break;
        case 8:
            mo="September";
        break;
        case 9:
            mo="October";
        break;
        case 10:
            mo="November";
        break;
        case 11:
            mo="December";
        break;
    }   
    let date = d +" " +  mo  +"  " +y;
    document.getElementById("day").innerHTML = dayName + ", " + date;
    //document.getElementById("date").innerHTML = date;
}
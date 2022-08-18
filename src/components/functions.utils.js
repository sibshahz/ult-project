export const encodeDateInString=(date)=>{
    return Intl.DateTimeFormat('en-UK', {day: '2-digit', month: '2-digit',year: 'numeric'}).format(date);
}

export const decodeDateFromString=(dateStr)=> { 
    dateStr = dateStr.split("/");
    return new Date(dateStr[2], dateStr[1] - 1, dateStr[0]);
}
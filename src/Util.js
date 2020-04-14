
function parseNumber(s){
    let news = s.replace('(','-')
    let r = parseFloat(news.replace(/[,)(]/g, ''))
    if (news.trim() && Number.isNaN(r)){console.log(`found NaN ${s}`)}
    if (!Number.isNaN(r) && r<0){console.log(`found negtive: ${s}`)}
    return Number.isNaN(r)?0:r
}
function items2array(rawitems){
    let dates = new Array(7+12+12).fill().map((_,i)=>{
        let year = 2016 + Math.floor((i+6)/12);
        let month = (i+6)%12+1;
        return `${year}-${month.toString().padStart(2,0)}`
    })
    let a = Object.fromEntries(dates.map(v=>([v,0])));
    let items = rawitems.map(v=>({"date":v["date"],"fund":parseNumber(v['金额'])}))
    items.forEach(i=>{
        a[i['date']] = (a[i['date']]?a[i['date']]:0) + i['fund']
    })
    let data = Object.entries(a).map(([date,fund])=>({'date':date,'fund':fund}));
    console.log(data)
    return data.sort((a,b)=>(a['date']).localeCompare(b['date']))
}
export {parseNumber,items2array};

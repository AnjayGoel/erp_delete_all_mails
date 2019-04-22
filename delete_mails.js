params = 'actionType=inbox&limit=10000&offset=0'
var params2="actionType=Delete&items="
xmlHttp=new XMLHttpRequest();
xmlHttp.open("POST",'https://erp.iitkgp.ac.in/IMail/emailAjax.jsp',false);
xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlHttp.send(params);
if (xmlHttp.readyState==4 && xmlHttp.status==200) {
        var ele = document.createElement('html')
        ele.innerHTML=xmlHttp.responseText
        var ids = ele.getElementsByTagName('div')[5].getElementsByTagName("tr")
        params2+=ids[0].id
        for (let i=1;i<ids.lenght;i++) {
            params2+=','+ids[i].id
        }
        xmlHttp.open("POST",'https://erp.iitkgp.ac.in/IMail/emailAjax.jsp',false);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send(params2);
        alert("Done");
}

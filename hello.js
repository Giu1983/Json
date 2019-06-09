$(document).ready(function() {
    $.getJSON (
        './json.php',
        function(data){
            for(i=0, i<data.length; i++) {
                let content = '<li>'; 
                content += data[i].name + '' + data[i].name;
                content += '<br />'; 
                content += data[i].date_start + '' + data[i].date_start;
                content += data[i].date_end + '' + data[i].date_end; 
                content += '</li>'; 

                $('ul.tournament').append(content);
            }
        }
    ); 
}
    

    

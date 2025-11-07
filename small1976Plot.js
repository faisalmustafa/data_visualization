var data=[["1","USA",Culturally responsive,65],
["2","USA",Culturally relevant,20],
["3","USA",Multicultural education,15],
["4","USA",Cultural competence,13],
["5","USA",Culturally diverse,8],
["6","Germany",Culturally responsive,4],
["7","USA",Critical race,4],
["8","USA",Culturally sustainable,4],
["9","Turkey",Cultural competence,4],
["10","Australia",Culturally responsive,3],
["11","Germany",Linguistically responsive,3],
["12","USA",Culturally relevant and sustainable,3],
["13","Australia",Culturally diverse,2],
["14","Austria",Culturally responsive,2],
["15","Canada",Culturally responsive,2],
["16","Iceland",Culturally responsive,2],
["17","Israel",Culturally responsive,2],
["18","South Korea",Cultural competence,2],
["19","Taiwan",Culturally responsive,2],
["20","USA",Culturally proactive,2],
["21","USA",Intercultural communicative competence,2],
["22","USA",Intercultural competence,2],
["23","USA",Linguistically responsive,2],
["24","USA",Social justice pedagogy,2],
["25","Australia",Cultural competence,1],
["26","Australia",Cultural interface,1],
["27","Australia",Intercultural capacity,1],
["28","Austria",Cultural competence,1],
["29","Belgium",Cultural competence,1],
["30","Belgium",Culturally responsive,1],
["31","Belgium",Multiculturalism,1],
["32","Brazil",Culturally responsive,1],
["33","Chile",Culturally relevant,1],
["34","China",Special education,1],
["35","Ecuador",Culturally responsive,1],
["36","Finland",Culturally responsive,1],
["37","Finland",Multicultural education,1],
["38","France",Cultural competence,1],
["39","France",Culturally responsive,1],
["40","Georgia",Intercultural sensitivity,1],
["41","Germany",Intercultural communicative competence,1],
["42","Indonesia",Inclusive education,1],
["43","Indonesia",Multicultural education,1],
["44","Isarel",Multicultural education,1],
["45","Israel",Multicultural education,1],
["46","Italy",Culturally responsive,1],
["47","Japan",Cultural competence,1],
["48","Kenya",Cultural interface,1],
["49","Malaysia",Culturally responsive,1],
["50","Malaysia",Intercultural capacity,1],
["51","Mexico",Culturally responsive,1],
["52","Morocco",Multiculturalism,1],
["53","Nepal",Cultural competence,1],
["54","New Zealand",Interculturality,1],
["55","Norway",Culturally diverse,1],
["56","Norway",Intercultural competence,1],
["57","Norwegia",Culturally responsive,1],
["58","Norwegia",Multicultural education,1],
["59","Oman",Culturally responsive,1],
["60","Pakistan",Cultural competence,1],
["61","Samoa",Cultural competence,1],
["62","South Africa",Culturally diverse,1],
["63","South Africa",Global competence,1],
["64","South Africa",Inclusive education,1],
["65","South Africa",Intercultural competence,1],
["66","South Africa",Intercultural education,1],
["67","South Africa",Linguistically responsive,1],
["68","South Korea",Culturally diverse,1],
["69","South Korea",Multicultural education,1],
["70","South Korea",Multiculturalism & culturally responsive,1],
["71","Taiwan",Intercultural competence,1],
["72","Czech Rep.",Culturally diverse,1],
["73","Philippines",Cultural competence,1],
["74","Philippines",Multicultural education,1],
["75","UK",Critical race,1],
["76","UK",Intercultural competence,1],
["77","UK",Intercultural education,1],
["78","USA",Both Relevent and responsive,1],
["79","USA",Culturally and linguistically diverse,1],
["80","USA",Culturally inclusive science teaching,1],
["81","USA",Culturally relevant and responsive,1],
["82","USA",Culturally responsive sustaining,1],
["83","USA",Global awareness,1],
["84","USA",Global competence,1],
["85","USA",Inclusion,1],
["86","USA",Interculturality,1],
["87","USA",Linguistically diverse,1],
["88","USA",Mixed approaches,1],
["89","USA",Multicultural and intercultural sensitivity,1],
["90","USA",Multicultural awareness,1],
["91","USA",Multicultural teaching competency,1],
["92","USA",Multiculturalism,1],
["93","USA",Multiculturalism & culturally responsive,1],
["94","USA",Multicuturalism,1],
["95","USA",Racism,1],
["96","USA",Social justice teaching,1],
["97","USA",sociocultural competence,1],
["98","UAE",Culturally responsive,1],
["99","Turkey",Culturally responsive,1],
["100","Turkey",Global awareness,1],
["101","Turkey",Intercultural communicative competence,1],
["102","Turkey",Intercultural education,1],
["103","Turkey",Intercultural sensitivity & multicultural attitude,1],
["104","Turkey",Multicultural education,1]]



 function sort(sortOrder){
                    return function(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)) }
                  }
var color = {'Unlinked':'#3366CC','USA':'#E1712B','Turkey':'#16FD22','South Africa':'#0D16FF','Australia':'#37BC7D','South Korea':'#F700DD','Belgium':'#00D1FE','Germany':'#ECE600','UK':'#FE9200','Austria':'#1C762A','Finland':'#980049','France':'#6D2E8B','Indonesia':'#0DFBD8','Israel':'#6E4500','Malaysia':'#42707E','Norway':'#C62AFC','Norwegia':'#FE8FDB','Taiwan':'#FE0D91','Philippines':'#859AFE','Brazil':'#A7F47F','Canada':'#FEC77D','Chile':'#FF6365','China':'#D5C4FB','Ecuador':'#C2EAC7','Georgia':'#FF9898','Iceland':'#8B8B00','Isarel':'#915375','Italy':'#DD8CFF','Japan':'#ABE8F6','Kenya':'#16FEA0','Mexico':'#0D5695','Morocco':'#D40095','Nepal':'#7F8266','New Zealand':'#AB0DA1','Oman':'#7E38CA','Pakistan':'#AA4016','Samoa':'#00A08D','Czech Rep.':'#E7E5A0','UAE':'#FF6C9D'};




var g1 = svg.append("g").attr("transform","translate(150,50)");
                         var bp1=viz.bP()
                         .data(data)
                         .value(d=>d[2])
                         .min(10)
                         .pad(5)
                         .height(1000)
                         .width(200)
                         .barSize(20)
                         .fill(d=>color[d.primary])
.sortSecondary(sort(["Culturally responsive","Cultural competence","Multicultural education","Culturally relevant","Culturally diverse","Intercultural competence","Linguistically responsive","Critical race","Culturally sustainable","Intercultural communicative competence","Culturally relevant and sustainable","Intercultural education","Multiculturalism","Cultural interface","Culturally proactive","Global awareness","Global competence","Inclusive education","Intercultural capacity","Interculturality","Multiculturalism & culturally responsive","Social justice pedagogy","Both Relevent and responsive","Culturally and linguistically diverse","Culturally inclusive science teaching","Culturally relevant and responsive","Culturally responsive sustaining","Inclusion","Intercultural sensitivity","Intercultural sensitivity & multicultural attitude","Linguistically diverse","Mixed approaches","Multicultural and intercultural sensitivity","Multicultural awareness","Multicultural teaching competency","Multicuturalism","Racism","Social justice teaching","Special education","sociocultural competence"]))
.sortPrimary(sort(["USA","Turkey","Australia","Germany","South Africa","South Korea","Austria","Belgium","Israel","Taiwan","UK","Canada","Finland","France","Iceland","Indonesia","Malaysia","Norway","Norwegia","Philippines","Brazil","Chile","China","Czech Rep.","Ecuador","Georgia","Isarel","Italy","Japan","Kenya","Mexico","Morocco","Nepal","New Zealand","Oman","Pakistan","Samoa","UAE"]))
.orient("vertical");

g1.call(bp1);g1.append("text")
                        .attr("x",-50).attr("y",-8)
                        .style("text-anchor","middle")
                        .text("Country");
                        g1.append("text")
                        .attr("x", 250)
                        .attr("y",-8).style("text-anchor","middle")
                        .text("Term");
                        g1.append("text")
                        .attr("x",100).attr("y",-25)
                        .style("text-anchor","middle")
                        .attr("class","header")
                        .text("");

 g1.selectAll(".mainBars")
                        .on("mouseover",mouseover)
                        .on("mouseout",mouseout);

 g1.selectAll(".mainBars").append("text").attr("class","label")
                        .attr("x",d=>(d.part=="primary"? -20:20))
                        .attr("y",d=>+6)
                        .text(d=>d.key)
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

 g1.selectAll(".mainBars").append("text").attr("class","perc")
                        .attr("x",d=>(d.part=="primary"? -110:330))
                        .attr("y",d=>+6)
                        .text(function(d){ return d3.format("0.1%")(d.percent)})
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start")); 


var g2 = svg.append("g").attr("transform","translate(575,50)");
                         var bp2=viz.bP()
                         .data(data)
                         .value(d=>d[3])
                         .min(10)
                         .pad(5)
                         .height(1000)
                         .width(200)
                         .barSize(20)
                         .fill(d=>color[d.primary])
.sortSecondary(sort(["Culturally responsive","Cultural competence","Multicultural education","Culturally relevant","Culturally diverse","Intercultural competence","Linguistically responsive","Critical race","Culturally sustainable","Intercultural communicative competence","Culturally relevant and sustainable","Intercultural education","Multiculturalism","Cultural interface","Culturally proactive","Global awareness","Global competence","Inclusive education","Intercultural capacity","Interculturality","Multiculturalism & culturally responsive","Social justice pedagogy","Both Relevent and responsive","Culturally and linguistically diverse","Culturally inclusive science teaching","Culturally relevant and responsive","Culturally responsive sustaining","Inclusion","Intercultural sensitivity","Intercultural sensitivity & multicultural attitude","Linguistically diverse","Mixed approaches","Multicultural and intercultural sensitivity","Multicultural awareness","Multicultural teaching competency","Multicuturalism","Racism","Social justice teaching","Special education","sociocultural competence"]))
.sortPrimary(sort(["USA","Turkey","Australia","Germany","South Africa","South Korea","Austria","Belgium","Israel","Taiwan","UK","Canada","Finland","France","Iceland","Indonesia","Malaysia","Norway","Norwegia","Philippines","Brazil","Chile","China","Czech Rep.","Ecuador","Georgia","Isarel","Italy","Japan","Kenya","Mexico","Morocco","Nepal","New Zealand","Oman","Pakistan","Samoa","UAE"]))
.orient("vertical");

g2.call(bp2);g2.append("text")
                        .attr("x",-50).attr("y",-8)
                        .style("text-anchor","middle")
                        .text("Country");
                        g2.append("text")
                        .attr("x", 250)
                        .attr("y",-8).style("text-anchor","middle")
                        .text("Term");
                        g2.append("text")
                        .attr("x",100).attr("y",-25)
                        .style("text-anchor","middle")
                        .attr("class","header")
                        .text("NA");

 g2.selectAll(".mainBars")
                        .on("mouseover",mouseover)
                        .on("mouseout",mouseout);

 g2.selectAll(".mainBars").append("text").attr("class","label")
                        .attr("x",d=>(d.part=="primary"? -20:20))
                        .attr("y",d=>+6)
                        .text(d=>d.key)
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

 g2.selectAll(".mainBars").append("text").attr("class","perc")
                        .attr("x",d=>(d.part=="primary"? -110:330))
                        .attr("y",d=>+6)
                        .text(function(d){ return d3.format("0.1%")(d.percent)})
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start")); 

function mouseover(d){
bp1.mouseover(d);
                            g1.selectAll(".mainBars")
                            .select(".perc")
                            .text(function(d){ return d3.format("0.1%")(d.percent)});
bp2.mouseover(d);
                            g2.selectAll(".mainBars")
                            .select(".perc")
                            .text(function(d){ return d3.format("0.1%")(d.percent)});
}

                     function mouseout(d){
bp1.mouseout(d);
                            g1.selectAll(".mainBars")
                            .select(".perc")
                            .text(function(d){ return d3.format("0.1%")(d.percent)});
bp2.mouseout(d);
                            g2.selectAll(".mainBars")
                            .select(".perc")
                            .text(function(d){ return d3.format("0.1%")(d.percent)});
}



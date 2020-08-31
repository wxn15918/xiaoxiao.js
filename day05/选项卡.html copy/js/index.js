var main = document.getElementsByClassName('main');
var oList = document.getElementsByTagName('li');
var oDiv = main[0].getElementsByTagName('div');


function change(index){

    for(var i = 0;i < oList.length;i++){
        oList[i].className = '';
         oDiv[i].className = '';
    }

    oList[index].className = 'select';
    oDiv[index].className = 'select';
}

// for(var i = 0;i < oList.length;i++){
//     oList[i].myIndex = i;
//     oList[i].onclick = function (){
        
//         change(this.myIndex);
//     }
// }

// for(var i = 0;i < oList.length;i++){
//    ( function(i){
//        oList[i].onclick = function(){
//            change(i);
//        }
//    })(i);
// }

for(var i = 0;i < oList.length;i++){
    (
        function(i){
            return oList[i].onclick = function(){
                change(i);
            }
        }
    )(i);
 }
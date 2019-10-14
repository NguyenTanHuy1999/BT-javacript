
function myfuntion(a)
        {
        	var name_array = ['java', 'c#', 'c++','python']
			for (var i = 0; i < name_array.length; i++)
            {    
                if(name_array[i]==a)
                return true;
                else
                return false;
            }
        }
        console.log(myfuntion('java'))
function myfuntion()
        {
        	var name_array = ['java', 'c#', 'c++','python']
            var arr=[];
			for (var i = 0; i < name_array.length; i++)
            {    
                arr[i]="Learning"+name_array[i];
            }
            return arr;
        }
        console.log(myfuntion().toString())
var emp = function(id, name, address){
	this.empid = id;
	this.empName = name;
	this.empAddress = address
}

var collection = function(){
	var data = [];
	data.push(new emp(123, 'Phaniraj','Bangalore'))
	data.push(new emp(124, 'James scott','New york'))
	data.push(new emp(125, 'George','London'))
	data.push(new emp(126, 'Sheron','Chicago'))
	this.newEmp = function(emp){
		data.push(emp);
	}
	this.remove = function(id){
		for (var i = 0; i < data.length; i++) {
			if(data[i].empid == id){
				data.splice(i, 1);
				return;
			}
		}
	}

	this.update = function(emp){
		var foundemp = data.find(function(e){
			return e.empid == emp.empid;
		})

		foundemp.empName = emp.empName;
		foundemp.empAddress = emp.empAddress;
	}

	this.getEmp = function(id){
		return data.find(function(e){
			return e.empid == id;	
		})
	}
	this.allEmps = function(){
		return data;
	}
}
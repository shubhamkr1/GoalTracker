function getGoals(){
	$.get('http://localhost:3000/goals',function(data){
		viewModel.goals(data);
	});
}

function ViewModel(){
	var self = this;
	self.goals = ko.observableArray();
	self.goalInputName = ko.observableArray();
	self.goalInputDeadline = ko.observableArray();

	self.addGoal = function(){
		var name = $(#name).val();
		var type = $(#type).val();
		var deadline = $(#deadline).val();

		self.goals.push({
			name: name,
			type: type,
			deadline: deadline
		});

		$.ajax({
			url: "http://localhost:3000/goals",
			data: JSON.stringify({
                  "name": name,
                  "type": type,
                  "deadline": deadline  
			});
		});
	}

	self.types = ko.observableArray(['Health & Fitness','Professional','Relationships','Self Help']);
}

var viewModel = new ViewModel();

ko.applyBindings(viewModel);
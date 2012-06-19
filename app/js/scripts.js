function SpoonController($scope) {
    $scope.todos = [
        {firstWord:'learn angular', secondWord:'click'},
        {firstWord:'build an angular app', done:false}];

    $scope.addSpoon = function() {
     
        var first= $scope.todoText;
        var second= $scope.todoText2;
            
        var firstLetters= first.split("");
        var firstLetter=firstLetters[0];
        firstLetters.splice(0,1);
        
        
        
        var secondLetters= second.split("");
        var secondLetter= secondLetters[0];
        secondLetters.splice(0,1);
        
        var spoon1= firstLetters.join("");
        var spoon2= secondLetters.join("");

    $scope.todos.push({firstWord:secondLetter + spoon1, secondWord:firstLetter + spoon2});
    $scope.todoText = '';
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
        if (!todo.done){
            $scope.todos.push(todo);
        }
    });
  };
};


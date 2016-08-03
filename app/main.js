// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}



var app = angular.module('main',[]);

app.controller('MainCtrl', function($scope, $http) {
		
		$scope.Items = [	{"Item": "Couch", "Description": "Black ikea pull out couch", "Original Cost": "600", "Cost": "250", "Images": ["images/couch_1.JPG","images/couch_2.JPG","images/couch_3.JPG"]},
							{"Item": "BBQ", "Description": "Three burner propane bbq", "Original Cost": "100", "Cost": "50", "Images": ["images/bbq_1.jpg"]},
							{"Item": "Patio Set", "Description": "Three chairs and small table", "Original Cost": "90", "Cost": "45", "Images": ["images/patio_1.JPG","images/patio_2.JPG"]}
					];
		
		$scope.SelectedItem = $scope.Items[0];
		$scope.ImageIndex = 0;
		
		$scope.selectionChanged = function(item) {
			$scope.SelectedItem = item;
			$scope.ImageIndex = 0;
			$('#image-gallery-caption').text(item.Description);
            $('#image-gallery-title').text(item.Item);
            $('#image-gallery-image').attr('src', item.Images[$scope.ImageIndex]);
		}
		
		$scope.setButtons = function() {
			
		}
		
		$scope.nextButtonClick = function() {
			
			$scope.ImageIndex = ($scope.ImageIndex + 1) % $scope.SelectedItem.Images.length;
			
            $('#image-gallery-image').attr('src', $scope.SelectedItem.Images[$scope.ImageIndex]);
			
			$scope.setButtons();
		}
		
		$scope.prevButtonClick = function() {
			if($scope.ImageIndex <= 0)
				$scope.ImageIndex = $scope.SelectedItem.Images.length - 1;
			else
				$scope.ImageIndex--;
			
            $('#image-gallery-image').attr('src', $scope.SelectedItem.Images[$scope.ImageIndex]);
			
			$scope.setButtons();
		}
	}
);